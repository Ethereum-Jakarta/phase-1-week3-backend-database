use werhouse

db.products.insertMany([
  { _id: 1, product_name: "Laptop", category: "Elektronik", price: 999.99 },
  { _id: 2, product_name: "Meja Kursi", category: "Perabot", price: 199.99 },
  { _id: 3, product_name: "Printer", category: "Elektronik", price: 299.99 },
  { _id: 4, product_name: "Rak Buku", category: "Perabot", price: 149.99 }
])

db.products.find(
  {},
  { _id: 0, product_name: 1, price: 1 }
).sort({ price: 1 })

db.inventory.insertMany([
  { _id: 1, product_id: 1, quantity: 50, location: "Gudang A" },
  { _id: 2, product_id: 2, quantity: 30, location: "Gudang B" },
  { _id: 3, product_id: 3, quantity: 20, location: "Gudang A" },
  { _id: 4, product_id: 4, quantity: 40, location: "Gudang B" }
])

db.inventory.aggregate([
  {
    $lookup: {
      from: "products",
      localField: "product_id",
      foreignField: "_id",
      as: "product"
    }
  },
  { $unwind: "$product" },
  {
    $project: {
      _id: 0,
      product_name: "$product.product_name",
      quantity: 1,
      location: 1
    }
  }
])

db.products.updateOne(
  { product_name: "Laptop" },
  { $set: { price: 1099.99 } }
)

db.inventory.aggregate([
  {
    $lookup: {
      from: "products",
      localField: "product_id",
      foreignField: "_id",
      as: "product"
    }
  },
  { $unwind: "$product" },
  {
    $group: {
      _id: "$location",
      total_value: {
        $sum: { $multiply: ["$quantity", "$product.price"] }
      }
    }
  }
])

db.orders.insertMany([
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
])

db.orders.aggregate([
  { $unwind: "$order_details" },
  {
    $lookup: {
      from: "products",
      localField: "order_details.product_id",
      foreignField: "_id",
      as: "product"
    }
  },
  { $unwind: "$product" },
  {
    $group: {
      _id: "$_id",
      order_date: { $first: "$order_date" },
      total_amount: {
        $sum: { $multiply: ["$order_details.quantity", "$product.price"] }
      }
    }
  },
  {
    $project: {
      _id: 0,
      order_id: "$_id",
      order_date: 1,
      total_amount: 1
    }
  }
])

db.products.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "order_details.product_id",
      as: "ordered"
    }
  },
  { $match: { ordered: { $size: 0 } } },
  { $project: { _id: 1, product_name: 1 } }
])
