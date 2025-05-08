SELECT p.product_id, p.product_name
FROM Products p
JOIN OrderDetails od ON p.product_id = od.product_id
WHERE od.product_id IS NULL;
