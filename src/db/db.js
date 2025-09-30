import sqlite3 from 'sqlite3';
sqlite3.verbose();

const db = new sqlite3.Database('./inventory.db', (err) => {
    if(err) {
        console.error("Failed to connect to SQLite Database:", err.message);
    }
    else {
        console.log("Connected to SQLite Database");
    }
});


// const db = new sqlite3.Database(':memory', (err) => {
//     if(err){
//         console.error("Failed to connect to SQLite Database");
//     }
//     else {
//         console.log("Connected to SQLite Database");
//     }
// })

db.run(
    `CREATE TABLE IF NOT EXISTS Products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT,
    Description TEXT,
    Stock_Quantity INTEGER
    )`,
    (err) => {
        if(err) {
            console.error("Error Creating Products Table:", err.message)
        }
        else {
            console.log("Products Table created successfully");
        }
    }
);

export default db;