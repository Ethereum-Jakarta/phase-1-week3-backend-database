db.Products.find({}, {_id: 0, product_name: 1, price: 1}).sort({price: 1})

db.Products.aggregate([
    {
        $lookup: {
            from: "Inventory",
            localField: "_id",
            foreignField: "product_id",
            as: "new_inventory"
        }
    },
    {
        $unwind: "$new_inventory"
    },
    {
        $project: {
            _id: 0,
            product_name: 1,
            quantity: "$new_inventory.quantity",
            location: "$new_inventory.location"
        }
    }
])

db.Products.aggregate([
    {
        $lookup: {
            from: "Inventory",
            localField: "_id",
            foreignField: "product_id",
            as: "new_inventory"
        }
    },
    {
        $unwind: "$new_inventory"
    },
    {
        $group: {
            _id: "$new_inventory.location",
            total_value: {
                $sum: { $multiply: ["$new_inventory.quantity", "$price"] }
            }
        }
    },
    {
        $project: {
            _id: "$_id",
            total_value: {
                $round: [ "$total_value", 2 ]
            }
        }
    },
    {
        $sort: {
            total_value: -1
        }
    }
])

db.Orders.aggregate([
    {
        $unwind: "$order_details"
    },
    {
        $lookup: {
            from: "Products",
            localField: "order_details.product_id",
            foreignField: "_id",
            as: "new_order_details"
        }
    },
    {
        $unwind: "$new_order_details"
    },
    {
        $group: {
            _id: { order_id: "$_id", order_date: "$order_date" },
            total_amount: {
                $sum: { $multiply: ["$order_details.quantity", "$new_order_details.price"] }
            }
        }
    },
    {
        $project: {
            _id: 0,
            order_id: "$_id.order_id",
            order_date: "$_id.order_date",
            total_amount: {
                $round: [ "$total_amount", 2 ]
            }
        }
    },
    {
        $sort: {
            order_id: 1
        }
    }
])

db.Products.aggregate([
    {
        $lookup: {
            from: "Orders",
            localField: "_id",
            foreignField: "order_details.product_id",
            as: "order_history"
        }
    },
    {
        $match: {
            order_history: { $size: 0 }
        }
    },
    {
        $project: {
            product_name: 1
        }
    }
])