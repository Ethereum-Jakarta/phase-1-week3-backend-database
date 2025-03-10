CREATE DATABASE warehouse;

USE warehouse;

-- Buat tabel Products
CREATE TABLE Products (    
    product_id INT PRIMARY KEY, 
    product_name VARCHAR(100),
    category VARCHAR(100),
    price DECIMAL(10, 2)
);

-- Masukkan data ke dalam tabel Products
INSERT INTO Products (product_id, product_name, category, price) VALUES
(1, 'Laptop', 'Elektronik', 999.99),
(2, 'Meja Kursi', 'Perabot', 199.99),
(3, 'Printer', 'Elektronik', 299.99),
(4, 'Rak Buku', 'Perabot', 149.99);

-- buat tabel inventory
CREATE TABLE Inventory (
    inventory_id INT PRIMARY KEY,
    product_id INT,
    quantity INT,
    location VARCHAR(100)
);


INSERT INTO Inventory (inventory_id, product_id, quantity, location) VALUES
(1, 1, 50, 'Gudang A'),
(2, 2, 30, 'Gudang B'),
(3, 3, 20, 'Gudang A'),
(4, 4, 40, 'Gudang B');

-- gabungkan product dan inventory 
SELECT p.product_name, i.quantity, i.location
FROM Products p
JOIN INVENTORY i ON p.product_id = i.product_id;

-- buat table orders
CREATE TABLE Orders(
    order_id INT PRIMARY KEY, 
    customer_id INT, 
    order_date DATE
);
-- buat table ordersdetails
CREATE TABLE OrderDetails(
    order_detail_id INT PRIMARY KEY, 
    order_id INT, 
    product_id INT, 
    quantity INT
);

-- UPDATE HARGA LAPTOP
UPDATE Products
SET price = 1099.99
WHERE product_name = 'Laptop';

-- kueri untuk menghitung nilai total inventrus pada setiap gudang
SELECT i.location, SUM(p.price * i.quantity) AS total_value
FROM Inventory i
JOIN Products p ON i.product_id = p.product_id
GROUP BY i.location;

-- masukan data ke tabel orders dan order details
INSERT INTO Orders (order_id, customer_id, order_date) VALUES
(1, 101, '2024-08-12'),
(2, 102, '2024-08-13');

INSERT INTO OrderDetails (order_detail_id, order_id, product_id, quantity) VALUES
(1, 1, 1, 2), 
(2, 1, 3, 1), 
(3, 2, 2, 1), 
(4, 2, 4, 2);

-- menampilkan jumblah total untuk setiap pesanan 
SELECT o.order_id, o.order_date, SUM(od.quantity * p.price) AS total_amount
FROM Orders o
JOIN OrderDetails od ON o.order_id = od.order_id
JOIN Products p ON od.product_id = p.product_id
GROUP BY o.order_id, o.order_date;

-- query untuk mencari produk yang belum pernah di pesan 
SELECT p.product_id, p.product_name
FROM Products p
LEFT JOIN OrderDetails od ON p.product_id = od.product_id
WHERE od.product_id IS NULL;

-- buat tampilan untuk menunjukan tingkat stok saat ini 
CREATE VIEW CurrentStock AS
SELECT p.product_name, i.quantity, i.location
FROM Products p
JOIN Inventory i ON p.product_id = i.product_id;

SELECT * FROM CurrentStock;















