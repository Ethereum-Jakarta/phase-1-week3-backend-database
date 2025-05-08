SELECT i.location, SUM(p.price * i.quantity) as total_value
FROM Products p
JOIN Inventory i ON p.product_id = i.product_id
GROUP BY i.location;