
# 🛠️ Inventory Management System API – Backend

This is a **simple Inventory Management System API** built using **Node.js, Express.js, and SQLite**.  
It allows CRUD operations on products, stock management (increase/decrease), and listing products below their low stock threshold.

---

## 🚀 Features

- Full CRUD operations for products.
- Default `Low_Stock_Threshold = 30` if not provided.
- Safely increase or decrease stock quantity (prevents negative stock).
- Endpoint to list all products below threshold: `/stock/products/low-stock`.
- Modular design: separate controllers and routes for CRUD and stock operations.
- Unit tests included using Jest.
- Postman collection included for quick API testing.

---

## ✅ Prerequisites

- **Node.js** (v18+ recommended)
- **SQLite** (bundled with `sqlite3` dependency)
- **Postman** (optional, for testing API endpoints)

---

## 📁 Folder Structure

```
inventory_management_system_api/
├── src/
│   ├── index.js                <-- Entry point (loads db/db.js, then app.js)
│   ├── app.js                  <-- Express app setup
│   ├── controllers/
│   │   ├── products.controller.js    <-- CRUD logic
│   │   └── managestock.controller.js <-- Increase/Decrease/Low Stock logic
│   ├── routes/
│   │   ├── products.routes.js       <-- CRUD endpoints
│   │   └── managestock.routes.js    <-- Stock endpoints
│   ├── db/
│   │   └── db.js                   <-- SQLite connection & table creation
│   └── Unit_Tests/                  <-- Jest unit tests
├── src/Inventory_Management_System.postman_collection.json  <-- Postman collection
├── .env
├── package.json
└── README.md
```

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/AmanPawar26/Inventory-Management-System-API.git
cd Inventory-Management-System-API
````

### 2. Install Dependencies

```bash
npm install
```

> This will install all runtime and development dependencies from `package.json`.

### 3. Environment Variables

Create a `.env` file in the root folder:

```
PORT=3000
```

> The `PORT` variable defines the port where the backend will run.

### 4. Run the Project

```bash
npm run dev
```

Backend will start at:

```
http://localhost:3000
```

---

## 🔗 API Endpoints

### Products CRUD (`products.routes.js`)

| Method | Endpoint          | Description            |
| ------ | ----------------- | ---------------------- |
| GET    | /api/products     | Get all products       |
| GET    | /api/products/:id | Get a product by ID    |
| POST   | /api/products     | Create a new product   |
| PUT    | /api/products/:id | Update product details |
| DELETE | /api/products/:id | Delete a product       |

### Stock Management (`managestock.routes.js`)

| Method | Endpoint                   | Description                       |
| ------ | -------------------------- | --------------------------------- |
| PUT    | /api/products/:id/increase | Increase stock quantity           |
| PUT    | /api/products/:id/decrease | Decrease stock quantity           |
| GET    | /api/products/low-stock    | List products below low threshold |

---

## 📫 Quick Postman Testing

1. Import `src/Inventory_Management_System.postman_collection.json` in Postman.
2. Update the base URL to `http://localhost:3000`.
3. Test all CRUD and stock endpoints immediately without manual setup.

```

## 📦 Sample JSON Data for POST Requests

```json
{
  "name": "Laptop Stand",
  "description": "Aluminum adjustable laptop stand",
  "stock_quantity": 7
}
```

```json
{
  "name": "Office Chair",
  "description": "Ergonomic office chair with lumbar support",
  "stock_quantity": 3
}
```

```json
{
  "name": "USB Hub",
  "description": "7-port USB 3.0 hub",
  "stock_quantity": 25
}
```

> **Note:** Omit `low_stock_threshold`; it defaults to 30.

---

## 🧪 Testing

Run unit tests:

```bash
npm test
```

Tests cover:

* Increasing stock
* Decreasing stock
* Low stock checks
* Validation of input

---

## 🔐 Important Notes

* Database (`inventory.db`) is created automatically on first run.
* Postman collection included for quick API testing: `src/Inventory_Management_System.postman_collection.json`.

---

## 📌 Assumptions & Design Choices

1. `Low_Stock_Threshold` defaults to `30` if not provided.
2. Stock cannot be decreased below 0.
3. CRUD and stock management routes/controllers are separated for modularity.
4. SQLite chosen for simplicity and portability.
5. Jest used for unit testing with mocked database calls.
6. Postman collection included for easy API testing.

---
