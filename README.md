# Merchant Management System

This project is a full-stack Merchant Management System built with:

- `backend/` – Spring Boot (Java 17)
- `merchant/` – Angular (Frontend UI)

## Folder Structure

```
.
├── backend/   # Spring Boot API with MariaDB/MySQL support  
└── merchant/  # Angular frontend (SPA)
```

## Getting Started

### 1. Backend

```bash
cd backend
mvn spring-boot:run
```

Ensure MariaDB/MySQL is running and configured correctly in `application.properties`.

### 2. Frontend

```bash
cd merchant
npm install
ng serve
```

Access the frontend at: `http://localhost:4200`

## Tech Stack

- Spring Boot 3.1.2  
- Java 17  
- MariaDB / MySQL  
- Angular 16  
- Bootstrap (optional)

## Notes

- Use compatible Node.js version (v20 recommended)
- Frontend and backend communicate via RESTful API
