// soal 1: buat database warehouse dan buat collection untuk warehouse
use('warehouse')

// db.createCollection("Products")
// db.createCollection("Inventory")
// db.createCollection("Orders")

// soal 2: masukan data berikut kedalam Collections products

// db.Products.insertMany([
//     {
//         _id: 1,
//         product_name: "Laptop",
//         category: "Elektronik",
//         price: 999.99
//     },
//     {
//         _id: 2,
//         product_name: "Meja Kursi",
//         category: "Perabot",
//         price: 199.99
//     },
//     {
//         _id: 3,
//         product_name: "Printer",
//         category: "Elektronik",
//         price: 299.99
//     },
//     {
//         _id: 4,
//         product_name: "Rak Buku",
//         category: "Elektronik",
//         price: 149.99
//     }
// ])

// db.Products.find().pretty()

// soal 3: menampilkan semua produk beserta nama dan harganya, diurutkan berdasarkan harga dalam urutan menaik atau ascending

// db.Products.find({}, { product_name: 1, price: 1, _id: 0 }).sort({ price: 1 })

// soal 4: masukan data kedalam inventory
// db.Inventory.insertMany([
//     {
//         _id: 1,
//         product_id: 1,
//         quantity: 50,
//         location: 'Gudang A'
//     },
//     {
//         _id: 2,
//         product_id: 2,
//         quantity: 30,
//         location: 'Gudang B'
//     },
//     {
//         _id: 3,
//         product_id: 3,
//         quantity: 20,
//         location: 'Gudang A'
//     },
//     {
//         _id: 4,
//         product_id: 4,
//         quantity: 40,
//         location: 'Gudang B'
//     },
// ])

// db.Inventory.find().pretty()

// soal 5: menggabungkan tabel (aggregate) produk dan inventaris yang menampilkan nama produk, quantity, location untuk semua produk

// db.Inventory.aggregate([
//     {
//         $lookup: {
//             from: "Products",
//             localField: "product_id",
//             foreignField: "_id",
//             as: "product_info"
//         }
//     },
//     { $unwind: "$product_info" },
//     {
//         $project: {
//             _id: 0,
//             product_name: "$product_info.product_name",
//             quantity: 1,
//             location: 1,
//         }
//     },
// ])

// soal 6: Perbarui harga 'Laptop' menjadi 1099,99.

// db.Products.updateOne({ product_name: "Laptop" }, { $set: { price: 1099.99 } });
// db.Products.find().pretty()

// soal 7: Tuliskan query untuk menghitung nilai total inventaris pada setiap gudang.
// db.Products.aggregate([
//     {
//         $lookup: {
//             from: "Inventory",
//             localField: "_id",
//             foreignField: "product_id",
//             as: "inventoryData"
//         }
//     },
//     {
//         $unwind: {
//             path: "$inventoryData",
//             preserveNullAndEmptyArrays: true
//         }
//     },
//     {
//         $group: {
//             _id: "$inventoryData.location",
//             total_value: { $sum: { $multiply: ["$price", "$inventoryData.quantity"] } }
//         }
//     }
// ])

// soal 8: Masukkan data berikut ke dalam Colection Orders :
//  {
//     _id: 1,
//     customer_id: 101,
//     order_date: ISODate("2024-08-12"),
//     order_details: [
//       { product_id: 1, quantity: 2 },
//       { product_id: 3, quantity: 1 }
//     ]
//   },
//   {
//     _id: 2,
//     customer_id: 102,
//     order_date: ISODate("2024-08-13"),
//     order_details: [
//       { product_id: 2, quantity: 1 },
//       { product_id: 4, quantity: 2 }
//     ]
//   }
// db.Orders.insertMany([
//     {
//         _id: 1,
//         customer_id: 101,
//         order_date: new Date(),
//         order_details: [
//             { product_id: 1, quantity: 2 },
//             { product_id: 3, quantity: 1 }
//         ]
//     },
//     {
//         _id: 2,
//         customer_id: 102,
//         order_date: new Date(),
//         order_details: [
//             { product_id: 2, quantity: 1 },
//             { product_id: 4, quantity: 2 }
//         ]
//     }
// ])

// // db.Orders.deleteMany({}) //hapus data collection

// db.Orders.find().pretty()

//soal 9: Tulis Query untuk menampilkan jumlah total untuk setiap pesanan, termasuk order_id, order_date, dan total_amount.
// db.Orders.aggregate([
//     {
//         $unwind: "$order_details"
//     },
//     {
//         $lookup: {
//             from: "Products",
//             localField: "order_details.product_id",
//             foreignField: "_id",
//             as: "productData"
//         }
//     },
//     {
//         $unwind: "$productData"
//     },
//     {
//         $group: {
//             _id: "$_id",
//             order_date: { $first: "$order_date" },
//             total_amount: {
//                 $sum: { $multiply: ["$order_details.quantity", "$productData.price"] }
//             }
//         }
//     }
// ])

//soal 10: Tulis query untuk mencari produk yang belum pernah dipesan.
db.Products.aggregate([
    {
        $lookup: {
            from: "Orders",
            localField: "_id",
            foreignField: "order_details.product_id",
            as: "orderData"
        }
    },
    {
        $match: {
            orderData: { $size: 0 }
        }
    }
])

// db.Products.insertOne({
//     _id: 5,
//     product_name: "Mouse",
//     category: "Elektronik",
//     price: 30
// })

// db.Products.find().pretty()


