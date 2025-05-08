CREATE TABLE Products (
    product_id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_name TEXT,
    category TEXT,
    price NUMERIC(6,2)
);

CREATE TABLE Inventory (
    inventory_id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER,
    quantity NUMERIC(5,0),
    location TEXT,
    FOREIGN KEY(product_id) REFERENCES Products(product_id)
);

CREATE TABLE Orders (
    order_id INTEGER PRIMARY KEY AUTOINCREMENT, 
    customer_id INTEGER, 
    order_date DATE
);

CREATE TABLE OrderDetails (
    order_detail_id INTEGER PRIMARY KEY AUTOINCREMENT, 
    order_id INTEGER, 
    product_id INTEGER, 
    quantity NUMERIC(5,0),
    FOREIGN KEY(order_id) REFERENCES Orders(order_id),
    FOREIGN KEY(product_id) REFERENCES Products(product_id)    
);

