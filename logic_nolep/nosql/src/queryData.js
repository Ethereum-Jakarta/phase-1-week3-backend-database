const fs = require('fs');
const path = require('path');
function readJSON(filename) {
    const filePath = path.join(__dirname, `../data/${filename}`);  
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

// 3. Tampilkan semua produk berdasarkan harga (ascending)
function getSortedProducts() {
    const products = readJSON('produk.json');
    return products.sort((a, b) => a.price - b.price).map(p => ({
        product_name: p.product_name,
        price: p.price
    }));
}

// 5. Gabungkan tabel Produk dan Inventaris
function getProductInventory() {
    const products = readJSON('produk.json');
    const inventory = readJSON('gudang.json');

    return inventory.map(inv => {
        const product = products.find(p => p._id === inv.product_id);
        return {
            product_name: product.product_name,
            quantity: inv.quantity,
            location: inv.location
        };
    });
}

// 6. Update harga Laptop
function updateLaptopPrice(newPrice) {
    let products = readJSON('produk.json');
    products = products.map(p => p.product_name === "Laptop" ? { ...p, price: newPrice } : p);
    fs.writeFileSync(path.join(__dirname, '../data/produk.json'), JSON.stringify(products, null, 2));
}

// 7. Hitung total nilai inventaris per gudang
function getInventoryValue() {
    const products = readJSON('produk.json');
    const inventory = readJSON('gudang.json');

    const warehouseValue = {};

    inventory.forEach(inv => {
        const product = products.find(p => p._id === inv.product_id);
        const total = product.price * inv.quantity;

        if (warehouseValue[inv.location]) {
            warehouseValue[inv.location] += total;
        } else {
            warehouseValue[inv.location] = total;
        }
    });

    return Object.entries(warehouseValue).map(([location, total_value]) => ({
        _id: location,
        total_value: total_value.toFixed(2)
    }));
}

// 9. Hitung total order amount
function getOrderTotal() {
    const products = readJSON('produk.json');
    const orders = readJSON('pesan.json');

    return orders.map(order => {
        let total_amount = order.order_details.reduce((sum, item) => {
            const product = products.find(p => p._id === item.product_id);
            return sum + (product.price * item.quantity);
        }, 0);

        return {
            order_id: order.id,
            order_date: order.order_date,
            total_amount: total_amount.toFixed(2)
        };
    });
}

// 10. Cari produk yang belum pernah dipesan
function getUnorderedProducts() {
    const products = readJSON('produk.json');
    const orders = readJSON('pesan.json');

    const orderedProductIds = new Set(
        orders.flatMap(order => order.order_details.map(od => od.product_id))
    );

    return products.filter(p => !orderedProductIds.has(p.id));
}

// 🔹 TESTING FUNCTION 🔹
console.log("🔹 Produk berdasarkan harga (ascending):", getSortedProducts());
console.log("🔹 Data Produk & Inventaris:", getProductInventory());
updateLaptopPrice(1099.99);
console.log("🔹 Total Nilai Inventaris:", getInventoryValue());
console.log("🔹 Total Order Amount:", getOrderTotal());
console.log("🔹 Produk yang belum dipesan:", getUnorderedProducts());
