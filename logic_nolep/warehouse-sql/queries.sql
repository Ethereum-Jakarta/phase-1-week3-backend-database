SELECT product_name, price FROM Products
ORDER BY price DESC;

SELECT p.product_name, quantity, location
FROM Products p
INNER JOIN Inventory i ON p.product_id = i.product_id;

SELECT i.location, SUM(p.price * i.quantity) AS total_value
FROM Inventory i
INNER JOIN Products p ON p.product_id = i.product_id
GROUP BY i.location;

SELECT od.order_id, o.order_date, SUM(p.price * od.quantity) AS total_amount
FROM OrderDetails od
INNER JOIN Orders o ON od.order_id = o.order_id
INNER JOIN Products p ON p.product_id = od.product_id
GROUP BY od.order_id, o.order_date;

SELECT od.product_id, p.product_name
FROM OrderDetails od
LEFT JOIN Products p ON p.product_id = od.product_id
WHERE od.product_id IS NULL;

SELECT p.product_name, i.quantity, i.location
FROM Products p
INNER JOIN Inventory i ON i.product_id = p.product_id;