INSERT INTO Orders (order_id, customer_id, order_date)
VALUES
(1, 101, '2024-08-12'),
(2, 102, '2024-08-13');

INSERT INTO OrderDetails (order_detail_id, order_id, product_id, quantity)
VALUES
(1, 1, 1, 2),
(2, 1, 3, 1),
(3, 2, 2, 1),
(4, 2, 4, 2);
