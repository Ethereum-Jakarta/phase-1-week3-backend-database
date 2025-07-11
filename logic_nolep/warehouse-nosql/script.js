// 1. buat database warehouse dan buat colection untuk warehouse system
// use warehouse-system
// db.products
// db.inventory
// db.orders

// 2. Masukkan data ke dalam collections product dengan data
// db.products.insertMany([
// {_id: 1, product_name: 'Laptop', category: 'Elektronik', price: 999.99},
// {_id: 2, product_name: 'Meja Kuris', category: 'Perabot', price: 199.99},
// {_id: 3, product_name: 'Printer', category: 'Elektronik', price: 299.99},
// {_id: 4, product_name: 'Rak Buku', category: 'Perabot', price: 149.99} ])

// 3. Tulis query untuk menampilkan semua produk beserta nama dan harganya, diurutkan berdasarkan harga dalam urutan menaik (Asceding)
// db.products.find().sort({price: 1})

// 4. Masukkan data ke dalam collection inventory
// db.inventory.insertMany([
// {_id: 1, product_id: 1, quantity: 50, location: 'Gudang A'},
// {_id: 2, product_id: 2, quantity: 30, location: 'Gudang B'},
// {_id: 3, product_id: 3, quantity: 20, location: 'Gudang A'},
// {_id: 4, product_id: 4, quantity: 40, location: 'Gudang B'}])

// 5. Tulis Query untuk menggabungkan tabel (aggregate) Produk dan Inventaris, yang menampilkan nama produk, kuantitas, dan lokasi untuk semua produk
// db.inventory.aggregate([
// {
//  $lookup: {
//          from: 'products',
//          localField: 'product_id',
//          foreignField: '_id',
//          as:'product_info'
//    }
//  },
//  {
//      $unwind: '$product_info'
//  },
//  {
//      $project: {
//          _id: 0,
//          product_name: '$product_info.product_name',
//          quantity: 1,
//          location: 1
//    }
//  }
// ])

// 6. Perbarui harga 'Laptop' menjadi 1099,99
// db.products.updateOne({product_name: 'Laptop'}, {$set: {price: 1099.99}})

// 7. Tuliskan query untuk menghitung nilai total inventaris pada setiap gudang
// db.inventory.aggregate([
// {$lookup: {from: 'products', localField: 'product_id', foreignField: '_id', as: 'product_info'}},
// {$unwind: '$product_info'},
// {$group: {_id: '$location', totalValue: {$sum: {$multiply: ['$quantity', '$product_info.price']}}}},
// {$project: {_id: 1, total_value: {$round: ['$totalValue', 2]}}}])

// 8. Masukkan data ke dalam collection orders
// db.orders.insertMany([
// {_id: 1, customer_id: 101, order_date: ISODate('2024-08-12'), order_details: [{product_id: 1, quantity: 2}, {product_id: 3, quantity: 1}]},
// {_id: 2, customer_id: 102, order_date: ISODate('2024-08-13'), order_details: [{product_id: 2, quantity: 1}, {product_id: 4, quantity: 2}]}])

// 9. Tulis Query untuk menampilkan jumlah total untuk setiap pesanan, termasuk order_id, order_date, dan total_amount
// db.orders.aggregate([
// {$unwind: '$order_details'},
// {$lookup: {from: 'products', localField: 'order_details.product_id', foreignField: '_id', as: 'product_info'}},
// {$unwind: '$product_info'},
// {$group: {_id: '$_id', order_date: {$first: '$order_date'}, total_amount: {$sum: {$multiply: ['$product_info.price', '$order_details.quantity']}}}},
// {$project: {order_id: '$_id', order_date: 1, total_amount: {$round: ['$total_amount', 2]}}}])

// 10. Tulis query untuk mencari produk yang belum pernah dipesan
// db.products.aggregate([
// {$lookup: {from: 'orders', localField: '_id', foreignField: 'order_details.product_id', as: 'order_match'}},
// {$match: {$expr: {$eq: [{$size: '$order_match'}, 0]}}}])