SELECT o.order_id, o.order_date, sum(p.price * d.quantity) as total_amount
FROM OrderDetails d
JOIN Orders o ON o.order_id = d.order_id
JOIN Products p ON d.product_id = p.product_id
GROUP BY o.order_id