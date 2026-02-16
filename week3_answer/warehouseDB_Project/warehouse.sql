CREATE TABLE Products (
  product_id INT PRIMARY KEY,
  product_name VARCHAR(100),
  category VARCHAR(100),
  price DECIMAL(10,2)
);

CREATE TABLE Inventory (
  inventory_id INT PRIMARY KEY,
  product_id INT,
  quantity INT,
  location VARCHAR(100),
  FOREIGN KEY (product_id) REFERENCES Products(product_id)
);

CREATE TABLE Orders (
  order_id INT PRIMARY KEY,
  customer_id INT,
  order_date DATE
);

CREATE TABLE OrderDetails (
  order_detail_id INT PRIMARY KEY,
  order_id INT,
  product_id INT,
  quantity INT,
  FOREIGN KEY (order_id) REFERENCES Orders(order_id),
  FOREIGN KEY (product_id) REFERENCES Products(product_id)
);

INSERT INTO Products VALUES
(1, 'Laptop', 'Elektronik', 999.99),
(2, 'Desk Chair', 'Perabot', 199.99),
(3, 'Printer', 'Elektronik', 299.99),
(4, 'Bookshelf', 'Perabot', 149.99);

SELECT product_name, price
FROM Products
ORDER BY price DESC;

INSERT INTO Inventory VALUES
(1, 1, 50, 'Warehouse A'),
(2, 2, 30, 'Warehouse B'),
(3, 3, 20, 'Warehouse A'),
(4, 4, 40, 'Warehouse B');

SELECT 
  p.product_name,
  i.quantity,
  i.location
FROM Products p
JOIN Inventory i
  ON p.product_id = i.product_id;

UPDATE Products
SET price = 1099.99
WHERE product_name = 'Laptop';

SELECT 
  i.location,
  SUM(i.quantity * p.price) AS total_value
FROM Inventory i
JOIN Products p
  ON i.product_id = p.product_id
GROUP BY i.location;

INSERT INTO Orders VALUES
(1, 101, '2024-08-12'),
(2, 102, '2024-08-13');

INSERT INTO OrderDetails VALUES
(1, 1, 1, 2),
(2, 1, 3, 1),
(3, 2, 2, 1),
(4, 2, 4, 2);

SELECT 
  o.order_id,
  o.order_date,
  SUM(od.quantity * p.price) AS total_amount
FROM Orders o
JOIN OrderDetails od ON o.order_id = od.order_id
JOIN Products p ON od.product_id = p.product_id
GROUP BY o.order_id, o.order_date;

SELECT p.product_id, p.product_name
FROM Products p
LEFT JOIN OrderDetails od ON p.product_id = od.product_id
WHERE od.product_id IS NULL;

CREATE VIEW product_stock AS
SELECT 
  p.product_name,
  i.quantity,
  i.location
FROM Products p
JOIN Inventory i
  ON p.product_id = i.product_id;



