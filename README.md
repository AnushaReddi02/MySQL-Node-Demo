# 🚀 MySQL with Node.js (First Project)

## 📖 Description  
This is my **first hands-on project** integrating **Node.js with MySQL**.  
I used the **Faker.js library** to generate random user data such as `id`, `username`, `email`, and `password`, and then inserted 100 fake users into a MySQL database.  

---

## 📚 What I Learned  
- How to connect **Node.js** with a **MySQL database** using `mysql2`.  
- How to use the **Faker.js** library to generate mock data.  
- How to write and execute SQL queries (`INSERT` and `SELECT`).  
- How databases store and retrieve information.  
- Basics of structuring a simple backend project.  

---

## ⚙️ Steps to Run Locally  

1. **Clone the repository**  
   ```
   git clone https://github.com/AnushaReddi02/MySQL-Node-Demo.git
  
   ```

   ---
   
2.**Install dependencies**
```
npm install mysql2 @faker-js/faker
```

---

3. **Set up MySQL database**  
- Open MySQL Workbench or terminal
- Create a database:
   ```
  CREATE DATABASE MySQL_With_Node;
  USE MySQL_With_Node;
   ```
- Create users table:
   ```
  CREATE TABLE users (
  id VARCHAR(255) PRIMARY KEY,
  username VARCHAR(50),
  email VARCHAR(100),
  password VARCHAR(100)
);
```
---

   ```
  4. **Run The Project**  
   ```
   node index.js
   ```
---

## 📸 Screenshot of Output

After running SELECT * FROM users;

![Output Screenshot](https://github.com/AnushaReddi02/MySQL-Node-Demo/blob/main/output%20screenshot.png?raw=true)

---

## ✅ Conclusion

This project was a great first step into SQL + Node.js integration.
It helped me understand how data flows between an application and a database.
Excited to build bigger projects with these fundamentals! 🚀
