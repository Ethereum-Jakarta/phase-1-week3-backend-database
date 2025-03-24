# Logic Nolep (Warehouse Management System SQL)
Kali ini kalian akan diberi tugas untuk membuat Warehouse Database System. dan kalian harus mengikuti langhak2 dan syarat2 tertentu untuk 
mengerjakan soal ini.

1. buat database warehouse dan buat table dengan mengikuti syarat di bawah ini
  -  Products (product_id, product_name, category, price)
  -  Inventory (inventory_id, product_id, quantity, location)
  -  Orders (order_id, customer_id, order_date)
  -  OrderDetails (order_detail_id, order_id, product_id, quantity)

```sql
CREATE TABLE IF NOT EXISTS Products (
    product_id INTEGER PRIMARY KEY,
    product_name TEXT,
    category TEXT,
    price REAL
);

CREATE TABLE IF NOT EXISTS Inventory (
    inventory_id INTEGER PRIMARY KEY,
    product_id INTEGER,
    quantity INTEGER,
    location TEXT,
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);

CREATE TABLE IF NOT EXISTS Orders (
    order_id INTEGER PRIMARY KEY,
    customer_id INTEGER,
    order_date TEXT
);

CREATE TABLE IF NOT EXISTS OrderDetails (
    order_detail_id INTEGER PRIMARY KEY,
    order_id INTEGER,
    product_id INTEGER,
    quantity INTEGER,
    FOREIGN KEY (order_id) REFERENCES Orders(order_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);
```

2. Masukkan data berikut ke dalam tabel Products:
    - (1, 'Laptop', 'Elektronik', 999,99)
    - (2, 'Meja Kursi', 'Perabot', 199,99)
    - (3, 'Printer', 'Elektronik', 299,99)
    - (4, 'Rak Buku', 'Perabot', 149,99)

```sql
INSERT INTO Products (product_id, product_name, category, price)
VALUES (1, 'Laptop', 'Elektronik', 999.99);

INSERT INTO Products (product_id, product_name, category, price)
VALUES (2, 'Meja Kursi', 'Perabot', 199.99);

INSERT INTO Products (product_id, product_name, category, price)
VALUES (3, 'Printer', 'Elektronik', 299.99);

INSERT INTO Products (product_id, product_name, category, price)
VALUES (4, 'Rak Buku', 'Perabot', 149.99);
```
  
3. Tulis query untuk menampilkan semua produk beserta nama dan harganya, diurutkan berdasarkan harga dalam urutan menurun.

```sql
SELECT product_name, price FROM Products ORDER BY price DESC;
```

Expected output:
```
product_name | price
-------------+--------
Laptop       | 999.99
Printer      | 299.99
Desk Chair   | 199.99
Bookshelf    | 149.99
```

4. Masukkan data berikut ke dalam tabel Inventaris:
    - (1, 1, 50, 'Gudang A')
    - (2, 2, 30, 'Gudang B')
    - (3, 3, 20, 'Gudang A')
    - (4, 4, 40, 'Gudang B')

```sql
INSERT INTO Inventory (inventory_id, product_id, quantity, location)
VALUES (1, 1, 50, 'Gudang A');

INSERT INTO Inventory (inventory_id, product_id, quantity, location)
VALUES (2, 2, 30, 'Gudang B');

INSERT INTO Inventory (inventory_id, product_id, quantity, location)
VALUES (3, 3, 20, 'Gudang A');

INSERT INTO Inventory (inventory_id, product_id, quantity, location)
VALUES (4, 4, 40, 'Gudang B');
```
  
5. Tulis Query untuk menggabungkan tabel Produk dan Inventaris, yang menampilkan nama produk, kuantitas, dan lokasi untuk semua produk.

```sql
SELECT p.product_name, i.quantity, i.location
FROM Products p
JOIN Inventory i ON p.product_id = i.product_id;
```

Expected output
```
product_name | quantity | location
-------------+----------+------------
Laptop       | 50       | Warehouse A
Desk Chair   | 30       | Warehouse B
Printer      | 20       | Warehouse A
Bookshelf    | 40       | Warehouse B
```

6. Perbarui harga 'Laptop' menjadi 1099,99.

```sql
UPDATE Products SET price = 1099.99 WHERE product_name = 'Laptop';
```

7. Tuliskan kueri untuk menghitung nilai total inventaris pada setiap gudang.

```sql
SELECT i.location, SUM(p.price * i.quantity) as total_value
FROM Inventory i
JOIN Products p ON p.product_id = i.product_id
GROUP BY i.location;
```

Output yang diharapkan (setelah pembaruan harga pada pertanyaan 6):
```
location    | total_value
------------+------------
Warehouse A | 60999.80
Warehouse B | 11999.60
```

8. Masukkan data berikut ke dalam tabel Orders dan OrderDetails:
    1. Orders: (1, 101, '2024-08-12'), (2, 102, '2024-08-13')
    2. OrderDetails: (1, 1, 1, 2), (2, 1, 3, 1), (3, 2, 2, 1), (4, 2, 4, 2)

```sql
INSERT INTO Orders (order_id, customer_id, order_date)
VALUES (1, 101, '2024-08-12');

INSERT INTO Orders (order_id, customer_id, order_date)
VALUES (2, 102, '2024-08-13');

INSERT INTO OrderDetails (order_detail_id, order_id, product_id, quantity)
VALUES (1, 1, 1, 2);

INSERT INTO OrderDetails (order_detail_id, order_id, product_id, quantity)
VALUES (2, 1, 3, 1);

INSERT INTO OrderDetails (order_detail_id, order_id, product_id, quantity)
VALUES (3, 2, 2, 1);

INSERT INTO OrderDetails (order_detail_id, order_id, product_id, quantity)
VALUES (4, 2, 4, 2);
```
  
9. Tulis Query untuk menampilkan jumlah total untuk setiap pesanan, termasuk order_id, order_date, dan total_amount.

```sql
SELECT o.order_id, o.order_date, SUM(p.price * od.quantity) as total_amount
FROM Orders o 
JOIN OrderDetails od ON od.order_id = o.order_id
JOIN Products p ON p.product_id = od.product_id
GROUP BY o.order_id, o.order_date;
```

Expected Output:
```
order_id | order_date | total_amount
---------+------------+--------------
1        | 2024-08-12 | 2499.97
2        | 2024-08-13 | 499.97
```

10. Tulis kueri untuk mencari produk yang belum pernah dipesan.

```sql
SELECT p.product_id, p.product_name
FROM Products p
LEFT JOIN OrderDetails od ON p.product_id = od.product_id
WHERE od.product_id IS NULL;
```

Expected output:
```
product_id | product_name
-----------+--------------
(No rows, as all products have been ordered)
```

11. Buat tampilan yang menunjukkan tingkat stok saat ini untuk semua produk, termasuk nama_produk, jumlah, dan lokasi.

```sql
CREATE VIEW current_quantity AS
SELECT Products.product_name, Inventory.quantity, Inventory.location
FROM Products
JOIN Inventory ON Products.product_id = Inventory.product_id;

SELECT * FROM current_quantity;
```

Expected output
```
product_name | quantity | location
-------------+----------+------------
Laptop       | 50       | Warehouse A
Desk Chair   | 30       | Warehouse B
Printer      | 20       | Warehouse A
Bookshelf    | 40       | Warehouse B
```
