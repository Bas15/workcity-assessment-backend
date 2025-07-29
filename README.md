
# 🧠 Workcity Client & Project Management Backend API

This is a RESTful API built with Node.js, Express, and MongoDB for managing clients and their associated projects, with secure user authentication using JWT.

---

## 📦 Tech Stack

- Node.js + Express.js
- MongoDB + Mongoose
- JWT Authentication
- Bcrypt for password hashing
- CORS, Helmet, Morgan
- Validator

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/your-backend-repo.git
cd your-backend-repo
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create `.env` File
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4. Start the Server
```bash
npm run dev
```

---

## 🔐 Authentication Routes

### ✅ Register
**POST** `/api/auth/register`  
Registers a new user.

**Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "yourpassword"
}
```

**Response:**
```json
{
  "message": "User registered successfully",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "token": "JWT_TOKEN"
}
```

---

### ✅ Login
**POST** `/api/auth/login`  
Logs in an existing user.

**Body:**
```json
{
  "email": "john@example.com",
  "password": "yourpassword"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "token": "JWT_TOKEN"
}
```

---

## 👤 Client Routes

> 🔒 All client routes require a Bearer token in the header:  
`Authorization: Bearer JWT_TOKEN`

### 📄 Get All Clients  
**GET** `/api/clients`  
**Query Parameters (optional):**
- `search` (string)
- `page` (number)
- `limit` (number)

**Response:**
```json
{
  "clients": [...],
  "total": 10,
  "page": 1,
  "limit": 10
}
```

---

### ➕ Create New Client  
**POST** `/api/clients`  
**Body:**
```json
{
  "name": "Client A",
  "email": "clienta@example.com",
  "phone": "08012345678",
  "address": "Lagos, Nigeria"
}
```

---

### 🔍 Get Single Client  
**GET** `/api/clients/:id`

---

### ✏️ Update Client  
**PUT** `/api/clients/:id`  
**Body (any fields you want to update):**
```json
{
  "email": "newemail@example.com"
}
```

---

### ❌ Delete Client  
**DELETE** `/api/clients/:id`

---

## 📁 Project Routes

> 🔒 All project routes require authentication.

### 📄 Get All Projects  
**GET** `/api/projects`  
**Query Parameters (optional):**
- `clientId` – filter by a specific client
- `search` – keyword search
- `page`, `limit` – pagination

---

### ➕ Create New Project  
**POST** `/api/projects`  
**Body:**
```json
{
  "title": "Redesign Website",
  "description": "Improve UI/UX",
  "clientId": "client_object_id"
}
```

---

### 🔍 Get Single Project  
**GET** `/api/projects/:id`

---

### ✏️ Update Project  
**PUT** `/api/projects/:id`  
**Body:**
```json
{
  "title": "Updated Title"
}
```

---

### ❌ Delete Project  
**DELETE** `/api/projects/:id`

---

## 🛠️ Additional Notes

- All protected routes use `Authorization: Bearer JWT_TOKEN` in headers.
- Passwords are hashed with bcrypt before being stored.
- Token expiration and validation handled using JWT.
- Built with REST best practices and scalable structure.

---

## 📂 Folder Structure

```
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
├── utils/
└── app.js
```

---
## Postman Link
https://grey-rocket-685177.postman.co/workspace/d1830de1-69e7-49eb-84ab-f9b504f7e2da/documentation/20719142-633f30f4-3261-4356-9a18-fbe4d2341c45

---

## 📄 License

MIT
