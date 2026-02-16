-- 1. Buat database warehouse dan buat table
CREATE TABLE `warehouse-system`.`product` (
  `product_id` INT NOT NULL AUTO_INCREMENT,
  `product_name` VARCHAR(45) NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  `price` DECIMAL(10, 2) NOT NULL,
  PRIMARY KEY (`product_id`));

CREATE TABLE `warehouse-system`.`inventory` (
  `inventory_id` INT NOT NULL AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `quantity` INT NOT NULL,
  `location` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`inventory_id`));

CREATE TABLE `warehouse-system`.`orders` (
  `order_id` INT NOT NULL AUTO_INCREMENT,
  `customer_id` INT NOT NULL,
  `order_date` DATE NOT NULL,
  PRIMARY KEY (`order_id`));

CREATE TABLE `warehouse-system`.`order_details` (
  `order_detail_id` INT NOT NULL AUTO_INCREMENT,
  `order_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  `quantity` INT NOT NULL,
  PRIMARY KEY (`order_detail_id`),
  UNIQUE INDEX `order_detail_id_UNIQUE` (`order_detail_id` ASC) VISIBLE);

-- 2. Masukkan data ke dalam tabel product
INSERT INTO product(product_id, product_name, category, price)VALUES(1, 'Laptop', 'Elektronik', 999.99);
INSERT INTO product(product_name, category, price) VALUES('Meja Kursi', 'Perabot', 199.99);
INSERT INTO product(product_name, category, price) VALUES('Printer', 'Elektronik', 299.99);
INSERT INTO product(product_name, category, price) VALUES('Rak Buku', 'Perabot', 149.99);

-- 3. Tulis query untuk menampilkan semua produk beserta nama dan harganya, diurutkan berdasarkan harga dalam urutan menurun
SELECT product_name, price FROM products ORDER BY price DESC;

-- 4. Masukkan data ke dalam tabel inventaris
INSERT INTO inventory(inventory_id, product_id, quantity, location) VALUES(1, 1, 50, 'Gudang A');
INSERT INTO inventory(product_id, quantity, location) VALUES(2, 30, 'Gudang B');
INSERT INTO inventory(product_id, quantity, location) VALUES(3, 20, 'Gudang A');
INSERT INTO inventory(product_id, quantity, location) VALUES(4, 40, 'Gudang B');

-- 5. Tulis Query untuk menggabungkan tabel Produk dan Inventaris, yang menampilkan nama produk, kuantitas, dan lokasi untuk semua produk
SELECT products.product_name, inventory.quantity, inventory.location
FROM products
JOIN inventory ON products.product_id = inventory.product_id;

-- 6. Perbarui harga 'Laptop' menjadi 1099,99
UPDATE products SET price = 1099.99 WHERE product_name = 'Laptop';

-- 7. Tuliskan kueri untuk menghitung nilai total inventaris pada setiap gudang
SELECT inventory.location, SUM(products.price * inventory.quantity) AS total_value
FROM products
JOIN inventory ON products.product_id = inventory.product_id
GROUP BY inventory.location;

-- 8. Masukkan data ke dalam tabel order dan order list
INSERT INTO orders(order_id, customer_id, order_date) VALUES(1, 101, '2024-08-12');
INSERT INTO orders(customer_id, order_date) VALUES(102, '2024-08-13');

INSERT INTO order_details(order_detail_id, order_id, product_id, quantity) VALUES(1, 1, 1, 2);
INSERT INTO order_details(order_id, product_id, quantity) VALUES(1, 3, 1);
INSERT INTO order_details(order_id, product_id, quantity) VALUES(2, 2, 1);
INSERT INTO order_details(order_id, product_id, quantity) VALUES(2, 4, 2);

-- 9. Tulis Query untuk menampilkan jumlah total untuk setiap pesanan, termasuk order_id, order_date, dan total_amount.
SELECT orders.order_id, orders.order_date, SUM(order_details.quantity * products.price) AS total_amount
FROM orders
JOIN order_details ON orders.order_id = order_details.order_id
JOIN products ON order_details.product_id = products.product_id
GROUP BY orders.order_id;

-- 10. Tulis kueri untuk mencari produk yang belum pernah dipesan
SELECT products.product_id ,products.product_name
FROM products
JOIN order_details ON products.product_id = order_details.product_id
WHERE products.product_id != order_details.product_id;

-- 11. Buat tampilan yang menunjukkan tingkat stok saat ini untuk semua produk, termasuk nama_produk, jumlah, dan lokasi
SELECT products.product_name, inventory.quantity, inventory.location
FROM products
JOIN inventory ON products.product_id = inventory.product_id;