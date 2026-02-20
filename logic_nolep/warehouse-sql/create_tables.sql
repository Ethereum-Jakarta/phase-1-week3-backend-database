CREATE TABLE Products (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL,
    category VARCHAR(50),
    price NUMERIC(10, 2)
);

CREATE TABLE Inventory (
    inventory_id SERIAL PRIMARY KEY,
    product_id INTEGER,
    quantity INTEGER,
    location TEXT, 
    CONSTRAINT fk_products
        FOREIGN KEY(product_id)
        REFERENCES Products(product_id)
        ON DELETE CASCADE
);

CREATE TABLE Orders (
    order_id SERIAL PRIMARY KEY,
    customer_id INTEGER,
    order_date DATE
);

CREATE TABLE OrderDetails (
    order_detail_id SERIAL PRIMARY KEY,
    order_id INTEGER,
    product_id INTEGER,
    quantity INTEGER,
    CONSTRAINT fk_orders
        FOREIGN KEY(order_id)
        REFERENCES Orders(order_id)
        ON DELETE CASCADE,
    CONSTRAINT fk_products
        FOREIGN KEY(product_id)
        REFERENCES Products(product_id)
        ON DELETE CASCADE
);