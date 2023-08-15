SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS card;
CREATE TABLE card (
    id INT PRIMARY KEY,
    card_type VARCHAR(255),
    card_number VARCHAR(255),
    expiry_date DATE,
    cvv VARCHAR(255)
);

DROP TABLE IF EXISTS bank_account;
CREATE TABLE bank_account (
    IFSC_Code VARCHAR(255) PRIMARY KEY,
    account_no INT,
    card_id INT,
	FOREIGN KEY (card_id) REFERENCES card(id)
);

DROP TABLE IF EXISTS user;
CREATE TABLE user (
    id INT PRIMARY KEY,
    email VARCHAR(255),
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    password VARCHAR(255),
    address VARCHAR(255),
    country VARCHAR(255),
    phone_number INT,
    date_of_birth DATE,
    city VARCHAR(255),
    pincode INT
);

DROP TABLE IF EXISTS business_details;
CREATE TABLE business_details (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    register_number VARCHAR(255),
    register_address VARCHAR(255),
    sender_id INT,
    FOREIGN KEY (sender_id) REFERENCES user(id)
);

DROP TABLE IF EXISTS recipient;
CREATE TABLE recipient (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255),
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    bank_account_type VARCHAR(255),
    bank_IFSC_Code VARCHAR(255)
);

DROP TABLE IF EXISTS transaction_details;
CREATE TABLE transaction_details (
    id INT PRIMARY KEY AUTO_INCREMENT,
    from_currency VARCHAR(255),
    to_currency VARCHAR(255),
    recipient_id INT,
    sender_id INT,
    amount DECIMAL(10, 2),
    amount_converted DECIMAL(10, 2),
    status VARCHAR(255),
    purpose VARCHAR(255),
    FOREIGN KEY (recipient_id) REFERENCES recipient(id),
    FOREIGN KEY (sender_id) REFERENCES user(id)
);

DROP TABLE IF EXISTS business_user;
CREATE TABLE business_user (
    id INT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    business_id INT,
    busines_user_type VARCHAR(255),
    date_of_birth VARCHAR(255),
    country VARCHAR(255),
    FOREIGN KEY (business_id) REFERENCES business_details(id)
);

SET FOREIGN_KEY_CHECKS = 1;