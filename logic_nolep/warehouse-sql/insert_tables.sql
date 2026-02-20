INSERT INTO Products(product_name, category, price)
VALUES 
    ('Laptop', 'Elektronik', 999.99),
    ('Meja Kursi', 'Perabot', 199.99),
    ('Printer', 'Elektronik', 299.99),
    ('Rak Buku', 'Perabot', 149.99);

INSERT INTO Inventory(product_id, quantity, location)
VALUES 
    (1, 50, 'Gudang A'),
    (2, 30, 'Gudang B'),
    (3, 20, 'Gudang A'),
    (4, 40, 'Gudang B');

INSERT INTO Orders(customer_id, order_date)
VALUES 
    (101, '2024-08-12'),
    (102, '2024-08-13');

INSERT INTO OrderDetails(order_id, product_id, quantity)
VALUES
    (1, 1, 2),
    (1, 3, 1),
    (2, 2, 1),
    (2, 4, 2);