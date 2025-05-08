SELECT p.product_name, p.price, i.quantity, i.location
FROM Products p
JOIN Inventory i
ON p.product_id = i.product_id