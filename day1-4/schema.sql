CREATE TABLE customers (
    id PRIMARY KEY AUTO_INCREMENT,
    customer_name VARCHAR(100),
    phone VARCHAR(50)
);

CREATE TABLE transactions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT,
    item_name VARCHAR(50),
    amount DECIMAL(10,2),
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);