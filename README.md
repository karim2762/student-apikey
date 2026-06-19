# 🎓 Student API Key

<div align="center">

### Fast • Secure • Lightweight Student Information API

A powerful Node.js API that provides student information through secure API key authentication. Built for educational projects, testing, and learning purposes.

![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge&logo=node.js)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)
![API](https://img.shields.io/badge/API-REST-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-orange?style=for-the-badge)

</div>

---

## ✨ Features

✅ Secure API Key Authentication  
✅ Search Student by Roll Number  
✅ Filter Students by Name  
✅ Search by Branch  
✅ Search by Location/Place  
✅ JSON Response Format  
✅ Vercel Ready Deployment  
✅ Lightweight & Fast Performance

---

## 📂 Project Structure

```bash
student-apikey/
│
├── api/
│   └── student.js
│
├── data/
│   └── students.json
│
├── package.json
├── vercel.json
└── README.md
```

---

## 🔐 Authentication

Every request requires a valid API Key.

### Header Method

```http
x-api-key: YOUR_API_KEY
```

### Query Method

```http
?key=YOUR_API_KEY
```

---

## 🚀 API Endpoints

### Get Student By Roll Number

```http
GET /api/student?roll=123&key=YOUR_API_KEY
```

#### Response

```json
{
  "roll": "123",
  "name": "John Doe",
  "branch": "CSE",
  "address": "Delhi"
}
```

---

### Search By Name

```http
GET /api/student?name=john&key=YOUR_API_KEY
```

---

### Search By Branch

```http
GET /api/student?branch=cse&key=YOUR_API_KEY
```

---

### Search By Place

```http
GET /api/student?place=delhi&key=YOUR_API_KEY
```

---

## ⚠️ Error Responses

### Invalid API Key

```json
{
  "success": false,
  "message": "Invalid API Key"
}
```

### Student Not Found

```json
{
  "success": false,
  "message": "Student not found"
}
```

---

## 🛠 Deployment

### Deploy on Vercel

1. Fork this repository
2. Import to Vercel
3. Add Environment Variable

```env
API_KEY=your_secret_key
```

4. Deploy

Your API will be live instantly.

---

## 💡 Example Request

```bash
curl -H "x-api-key: YOUR_API_KEY" \
https://your-domain.vercel.app/api/student?roll=123
```

---

## 🎯 Use Cases

- Educational Projects
- Student Management Systems
- API Learning
- Backend Practice
- JSON Database Experiments
- Authentication Testing

---

## 📜 Disclaimer

This project is intended for educational and learning purposes only. Ensure that no sensitive student data is exposed publicly.

---

<div align="center">

### 👨‍💻 Developed by KEXER

**Crafting Simple, Secure & Powerful APIs**

© 2026 KEXER. All Rights Reserved.

⭐ If you like this project, don't forget to star the repository.

</div>
