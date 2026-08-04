# CRM Management System

A full-stack **Customer Relationship Management (CRM)** web application built using the **MERN Stack** (MongoDB, Express.js, React, Node.js). This application enables administrators and employees to efficiently manage customers and leads through a secure, role-based system.

---

## 🚀 Features

### Authentication
- User Registration
- Secure Login using JWT
- Password Encryption with bcrypt
- Protected Routes

### Dashboard
- Overview of CRM statistics
- Quick access to major modules

### Customer Management
- Add Customer
- View Customer List
- Update Customer Details
- Delete Customer

### Lead Management
- Create New Lead
- View All Leads
- Update Lead Details
- Delete Lead
- Assign Leads to Employees
- Filter Leads

### User Roles
- **Admin**
  - Manage all customers and leads
  - Assign leads
  - Access all modules

- **Employee**
  - View assigned leads
  - Update lead status

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Vite
- React Router
- Axios
- CSS

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt.js

---

# 📁 Project Structure

```
CRM-PROJECT/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── src/
├── utils/
├── app.js
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

---

# ⚙️ Installation

## 1. Clone the repository

```bash
git clone https://github.com/Aman750549/CRM-PROJECT.git
```

## 2. Move into the project folder

```bash
cd CRM-PROJECT
```

## 3. Install dependencies

```bash
npm install
```

---

# 🔐 Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```

---

# ▶️ Run the Application

Start the backend:

```bash
npm run dev
```

If your project uses:

```bash
node server.js
```

run that instead.

For the frontend (Vite):

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

# 📌 API Features

### Authentication
- Register User
- Login User
- JWT Verification

### Customer APIs
- Create Customer
- Get Customers
- Update Customer
- Delete Customer

### Lead APIs
- Create Lead
- Get Leads
- Update Lead
- Delete Lead
- Assign Lead
- Filter Leads

---

# 📸 Screenshots

You can add screenshots here after uploading them to GitHub.

Example:

```
Login Page

Dashboard

Customer Management

Lead Management
```

---

# 🔮 Future Enhancements

- Email Notifications
- Activity Logs
- Data Export (PDF/Excel)
- Charts & Analytics
- Dark Mode
- Advanced Search
- File Upload Support

---

# 👨‍💻 Author

**Aman Singh Airy**

B.Tech Computer Science Engineering

Uttranchal University

GitHub: https://github.com/Aman750549

---

# 📄 License

This project was developed for educational purposes.
