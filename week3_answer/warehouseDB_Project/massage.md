# How to Run the SQL Project

This guide explains how to run the `warehouse.sql` file using SQLite on Windows.

## Requirements
- Windows PC  
- SQLite installed at: `C:\sqlite`  
- The SQL file is located at:  
  `C:\Week3-Backend-MVC-Database-By-Ryo\week3_answer\warehouseDB_Project\warehouse.sql`

## How to Run

1. **Open Command Prompt (CMD)**  
Press **Windows + R**, type:
and press **Enter**

2. **Navigate to SQLite Folder**
cd C:\sqlite


3. **Launch SQLite**
sqlite3

4. **Run the SQL File**  
At the `sqlite>` prompt, type:
.read "C:\Week3-Backend-MVC-Database-By-Ryo\week3_answer\warehouseDB_Project\warehouse.sql"

5. **(Optional) Make Output Display as a Table**
.headers on
.mode column

6. **Check the Data**  
Try:
SELECT * FROM Products;

7. **Exit SQLite**
.exit