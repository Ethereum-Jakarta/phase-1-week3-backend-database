# ADDRESS BOOK API

> Hola 🤓! FEX here, in this project i create basic RESTful API in Typescript with postgreSQL.

---

## 🛠️ Features

- Create, edit, organize contact
- Managing contact relation using group feature

---

## 🚀 Get Started

1. Fork this repo and clone this repo to your local directory
2. Install All required dependencies

```bash
npm install
```

3. Because this project using postgresql you must have a postgresql or using cloud services that provide postgresql. Then create a database
4. create .env file then insert your database url inside e.g:

```env
DATABASE_URL=postgres://username:password@host:port/your_db_name
```

5. initiate migration(feel free if you want to change schema go to ./src/migrations/\*\*.sql).

```bash
npm run migrate
```

6.

---

## 📚 Tech Stack

**Language**

- TypeScript, SQL

**Runtime / Platform**

- Node.js `> v18+`

**Database**

- PostgreSQL via PG driver

---

## 📦 Libraries Used

| Library   | Description                 |
| --------- | --------------------------- |
| `express` | HTTP server                 |
| `dotenv`  | Environment variable loader |
| `node-pg` | PostgreSQL driver           |
| `jest`    | Unit Testing                |
| `tsx`     | TypeScript runtime (dev)    |

---

## 📁 Project Structure

```txt
.
├── src
│   ├── controllers
│   ├── services
│   ├── models
│   ├── routes
│   └── index.ts
├── data
│   └── database.sqlite
├── .env.example
├── package.json
└── README.md
```
