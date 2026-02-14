-- soal: 
-- buat database 
CREATE DATABASE warehouse

-- buat tabel product
CREATE TABLE Product(
    product_id INT PRIMARY KEY,
    product_name VARCHAR(50),
    category VARCHAR(50),
    price INT
)

-- mengubah type data kolom price
ALTER TABLE Product
ALTER COLUMN price TYPE NUMERIC(10,2)

-- buat tabel inventory
CREATE TABLE Inventory(
    inventory_id INT PRIMARY KEY,
    product_id INT,
    quantity INT,
    location VARCHAR(50),
    FOREIGN KEY (product_id) REFERENCES Product(product_id)
)

-- buat tabel orders
CREATE TABLE Orders(
    order_id INT PRIMARY KEY,
    customer_id INT,
    order_date VARCHAR(50)
)

-- buat tabel orderDetails
CREATE TABLE OrderDetails(
    order_detail_id INT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT,
    FOREIGN KEY (order_id) REFERENCES Orders(order_id),
    FOREIGN KEY (product_id) REFERENCES Product(product_id)
)

-- soal 2:
-- input data kedalam tabel products
INSERT INTO product(product_id, product_name, category, price)
VALUES
(1, 'Laptop', 'Elektronik', 999.99),
(2, 'Meja Kursi', 'Perabot', 199.99),
(3, 'Printer', 'Elektronik', 299.99),
(4, 'Rak Buku', 'Perabot', 149.99)

-- menampilkan data tabel products
SELECT * FROM product

-- soal 3:
-- menampilkan data nama produk dan harga diurutkan berdasarkan harga dalam urutan menurun
SELECT product_name, price FROM product
ORDER BY price DESC

--soal $:
-- masukan data kedalam tabel inventoris
INSERT INTO inventory (inventory_id, product_id, quantity, location)
VALUES
(1, 1, 50, 'GUDANG A'),
(2, 2, 30, 'GUDANG B'),
(3, 3, 20, 'GUDANG A'),
(4, 4, 40, 'GUDANG B');

SELECT * FROM inventory

-- soal 5:
-- menggabungkan tabel product dan inventory yang menampilkan nama produk, kuantitas, dan lokasi untuk semua produk

SELECT product.product_name, inventory.quantity, inventory.location
FROM product
JOIN inventory ON product.product_id = inventory.product_id

-- soal 6:
-- memperbarui data harga dari laptop
UPDATE product
SET price = 1099.99
WHERE product_name = 'Laptop';

SELECT * FROM product

-- soal 7:
-- menghitung nilai total inventaris pada setiap gudang
SELECT inventory.location, SUM(product.price * inventory.quantity) as total_value
FROM product
JOIN inventory ON product.product_id = inventory.product_id
GROUP BY inventory.location
ORDER BY SUM(product.price) DESC

-- soal 8:
-- masukan data kedalam tabel orders dan orderDetails
INSERT INTO orders(order_id, customer_id, order_date)
VALUES
(1, 101, '2024-08-12'),
(2, 102, '2024-08-13');

SELECT * FROM orders;

INSERT INTO orderdetails(order_detail_id, order_id, product_id, quantity)
VALUES
(1, 1, 1, 2),
(2, 1, 3, 1),
(3, 2, 2, 1),
(4, 2, 4, 2);

SELECT * FROM orderdetails;

-- soal 9:
-- menampilkan jumlah total untuk setiap pesanan, termasuk order_id, order_date dan total_amount
SELECT orders.order_id, orders.order_date, SUM(orderdetails.quantity * product.price) as total_amount
FROM orders
JOIN orderDetails ON orders.order_id = orderdetails.order_id
JOIN product ON product.product_id = orderDetails.product_id
GROUP BY orders.order_id, orders.order_date
ORDER BY orders.order_id ASC

-- soal 10:
-- mencari produk yang belum pernah di pesan
SELECT product.product_id, product.product_name
FROM product
LEFT JOIN orderdetails ON orderdetails.product_id = product.product_id
WHERE orderdetails.order_id IS NULL

-- soal 11:
SELECT product.product_name, inventory.quantity, inventory.location
FROM product
JOIN inventory ON inventory.product_id = product.product_id





