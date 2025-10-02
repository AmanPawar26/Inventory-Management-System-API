Got it! You want a **clean, structured README in the same style** as the Utility App example you shared. Here’s the **Inventory Management System API README** in that style:

````markdown
# 🛠️ Inventory Management System API – Backend

This is the backend for the Inventory Management System, built with **Node.js**, **Express**, and **SQLite**, for managing products in a warehouse.

---

## ✅ Prerequisites

- Node.js (v18+ recommended)
- SQLite (bundled with `sqlite3` dependency)
- Postman (optional, for testing API endpoints)

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/inventory_management_system_api.git
cd inventory_management_system_api
````

### 2. Install Dependencies

```bash
npm install
```

This installs both:

* **Runtime dependencies**

  * `express`
  * `sqlite3`
  * `dotenv`
* **Development dependencies**

  * `jest`, `babel-jest`, `@babel/core`, `@babel/preset-env`
  * `nodemon`
  * `prettier`

### 3. Environment Variables

Create a `.env` file in the root folder:

```
PORT=3000
```

The `PORT` variable defines which port the backend will run on.

---

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

### Products CRUD

| Method | Endpoint          | Description            |
| ------ | ----------------- | ---------------------- |
| GET    | /api/products     | Get all products       |
| GET    | /api/products/:id | Get a product by ID    |
| POST   | /api/products     | Create a new product   |
| PUT    | /api/products/:id | Update product details |
| DELETE | /api/products/:id | Delete a product       |

### Stock Management

| Method | Endpoint                   | Description                   |
| ------ | -------------------------- | ----------------------------- |
| PUT    | /api/products/:id/increase | Increase stock quantity       |
| PUT    | /api/products/:id/decrease | Decrease stock quantity       |
| GET    | /api/products/low-stock    | List products below threshold |

---

## 📦 Sample JSON Data for POST Requests

```json
{
  "name": "Keyboard",
  "description": "Wireless mechanical keyboard",
  "stock_quantity": 10
}
```

```json
{
  "name": "Mouse",
  "description": "Bluetooth ergonomic mouse",
  "stock_quantity": 15
}
```

```json
{
  "name": "Monitor",
  "description": "27-inch 4K UHD monitor",
  "stock_quantity": 5
}
```

*(Omit `low_stock_threshold`; defaults to 30.)*

---

## 📁 Folder Structure

```
inventory_management_system_api/
├── src/
│   ├── index.js                <-- Entry point
│   ├── controllers/
│   ├── routes/
│   ├── db/
│   └── Unit_Tests/
├── src/Inventory_Management_System.postman_collection.json  <-- Postman collection
├── .env
├── package.json
└── README.md
```

---

## 🔐 Important Notes

* The database (`inventory.db`) is created automatically on first run.
* Do **not commit** `.env` files or database files if using real data.
* Postman collection is included in `src/Inventory_Management_System.postman_collection.json` for quick testing.

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

## ⚡ PowerShell Testing Example

Pretty-print all products:

```powershell
Invoke-RestMethod -Uri "http://localhost:3000/api/products" -Method GET | ConvertTo-Json -Depth 5
```

Increase stock:

```powershell
Invoke-RestMethod -Uri "http://localhost:3000/api/products/1/increase" -Method PUT -Body '{"stock_quantity":5}' -ContentType "application/json" | ConvertTo-Json -Depth 5
```

Decrease stock:

```powershell
Invoke-RestMethod -Uri "http://localhost:3000/api/products/1/decrease" -Method PUT -Body '{"stock_quantity":3}' -ContentType "application/json" | ConvertTo-Json -Depth 5
```

Low-stock products:

```powershell
Invoke-RestMethod -Uri "http://localhost:3000/api/products/low-stock" -Method GET | ConvertTo-Json -Depth 5
```

---

## 📌 Assumptions & Design Choices

1. `Low_Stock_Threshold` defaults to `30` if not provided.
2. Stock cannot be decreased below 0.
3. CRUD and stock management routes are separated for modularity.
4. SQLite chosen for simplicity and portability.
5. Jest used for unit testing with mocked database calls.

---

```

This README follows **exactly the style you showed**, including:

- Clear sections for setup, endpoints, folder structure  
- Prerequisites  
- Postman integration note  
- PowerShell examples  
- Testing and assumptions  

---

If you want, I can also **add a “Run all CRUD endpoints quickly via PowerShell script” snippet** to this README so the company can just copy-paste and verify all endpoints at once.  

Do you want me to add that?
```
