# Secure Login Application

A secure login application built with **Node.js** and **MySQL**, implementing **secure coding practices** to prevent **SQL injection**, handle **password hashing**, and ensure **secure session management**.

## Features

- **SQL Injection Prevention** using parameterized queries
- **Password Hashing** with bcrypt
- **Session Management** for secure login
- Basic **Error Handling**

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/secure-login-app.git
   ```

2. Navigate to the project folder:
   ```bash
   cd secure-login-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up the **MySQL** database:
   - Create a database named `login_app`
   - Create a `users` table with fields `id`, `username`, `password`
   
   Example MySQL query:
   ```sql
   CREATE TABLE users (id INT PRIMARY KEY AUTO_INCREMENT, username VARCHAR(50), password VARCHAR(255));
   ```

5. Run the server:
   ```bash
   node server.js
   ```

6. Access the app at `http://localhost:3000`.

## Security Improvements

- **SQL Injection Protection**: Switched from string concatenation to parameterized queries.
- **Password Hashing**: Replaced plaintext password comparison with bcrypt.
- **Session Management**: Implemented session handling for authenticated users.

## Future Enhancements

- Rate limiting to prevent brute-force attacks
- Two-Factor Authentication (2FA)
- Improved logging for security monitoring

## License

MIT License
```

---

### Key Changes in the Shortened Version:

1. **Overview and Features** are kept very brief.
2. **Installation steps** are simplified, without repetitive information.
3. **Security Improvements** are mentioned concisely.
4. **Future Enhancements** are listed with no extra details.
5. **License** is kept minimal.

