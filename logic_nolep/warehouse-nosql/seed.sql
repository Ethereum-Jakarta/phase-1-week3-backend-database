use warehouse

db.createCollection("Products")
db.createCollection("Inventory")
db.createCollection("Orders")

db.Products.insertMany([
    {
        _id: 1,
        product_name: 'Laptop',
        category: 'Elektronik',
        price: 999.99
    },
    {
        _id: 2,
        product_name: 'Meja Kursi',
        category: 'Perabot',
        price: 199.99
    },
    {
        _id: 3,
        product_name: 'Printer',
        category: 'Elektronik',
        price: 299.99
    }, 
    {
        _id: 4,
        product_name: 'Rak Buku',
        category: 'Perabot',
        price: 149.99
    }
]);

db.Products.find({}, {_id: 0,product_name: 1, price: 1}).sort({price: 1})

db.Inventory.insertMany([
    {
        _id: 1,
        product_id: 1,
        quantity: 50,
        location: 'Gudang A'
    },
    {
        _id: 2,
        product_id: 2,
        quantity: 30,
        location: 'Gudang B'
    },
    {
        _id: 3,
        product_id: 3,
        quantity: 20,
        location: 'Gudang A'
    },
    {
        _id: 4,
        product_id: 4,
        quantity: 40,
        location: 'Gudang B'
    }
]);

db.Products.aggregate([
    {
        $lookup: {
            from: "Inventory",
            localField: "_id",
            foreignField: "product_id",
            as: "newInventory" 
        }
    },
    {
        $unwind: "$newInventory"
    },
    {
        $project: {
            _id: 0,
            product_name: 1,
            quantity: "$newInventory.quantity",
            location: "$newInventory.location"
        }
    }
]);

db.Products.updateOne({product_name: 'Laptop'}, {$set: {price: 1099.99}})

db.Products.aggregate([
    {
        $lookup: {
            from: "Inventory",
            localField: "_id",
            foreignField: "product_id",
            as: "newInventory"
        }
    },
    {
        $unwind: "$newInventory"
    },
    {
        $project: {
            _id: 0,
            location: "$newInventory.location",
            total_value: {
                $multiply: ["$newInventory.quantity", "$price"]
            }
        }
    },
    {
        $group: {
            _id: "$location",
            total_value: {
                $sum: {
                    $round: ["$total_value", 2]
                }
            }
        }
    },
    {
        $sort: {
            "total_value": -1
        }
    }
]);

db.Orders.insertMany([
    {
        _id: 1,
        customer_id: 101,
        order_date: ISODate("2024-08-12"),
        order_details: [
            { product_id: 1, quantity: 2 },
            { product_id: 3, quantity: 1 }
        ]
    },
    {
        _id: 2,
        customer_id: 102,
        order_date: ISODate("2024-08-13"),
        order_details: [
            { product_id: 2, quantity: 1 },
            { product_id: 4, quantity: 2 }
        ]
    }
]);

db.Orders.aggregate([
    {
        $unwind: "$order_details"
    },
    {
        $lookup: {
            from: "Products",
            localField: "order_details.product_id",
            foreignField: "_id",
            as: "newOrders"
        }
    },
    {
        $unwind: "$newOrders"
    },
    {
        $project: {
            order_id: 1,
            order_date: 1,
            total_amount: {
                $multiply: ["$newOrders.price", "$order_details.quantity"]
            }
        }
    },
    {
        $group: {
            _id: { order_id: "$order_id", order_date: "$order_date" },
            total_amount: {
                $sum: "$total_amount"
            }
        }
    },
    {
        $project: {
            order_id: "$_id.order_id",
            order_date: "$_id.order_date",
            total_amount: {
                $round: ["$total_amount", 2]
            }
        }
    },
    {
        $sort: { "total_amount": -1 }
    }
]);