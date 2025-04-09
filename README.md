#  Bookstore REST API

A fully-featured backend REST API for managing a Bookstore — built with **Node.js**, **Express.js**, **MongoDB**, and **Docker**. Includes user authentication, book management, filtering, searching, pagination, and JWT-protected routes.

---

##  Features

-  JWT-based User Authentication (Signup + Login)
-  CRUD for Books (Create, Read, Update, Delete)
-  Filter by author, category, rating
-  Search books by partial title
-  Pagination and sorting (by price or rating)
-  Dockerized with MongoDB and Express API
-  Error handling and input validation

---

##  Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **Auth:** JSON Web Tokens (JWT), bcrypt
- **Containerization:** Docker, Docker Compose
- **Testing Tool (optional):** Postman

---

##  Getting Started

###  Local Setup

```bash
git clone https://github.com/ShivamGupta256/bookstore-api.git
cd bookstore-api
npm install
cp .env.example .env  # or create your own
npm run dev
```

###  Docker Setup (Recommended)

```bash
docker-compose up --build
```

Then open: `http://localhost:5000`

---

##  Environment Variables

In `.env` (for Docker, use same values in `docker-compose.yml`):

```env
PORT=5000
MONGO_URI=mongodb://mongo:27017/bookstore
JWT_SECRET=supersecretkey
```

---

##  API Endpoints

### Auth Routes
| Method | Endpoint            | Description       |
|--------|---------------------|-------------------|
| POST   | `/api/auth/signup`  | Register a user   |
| POST   | `/api/auth/login`   | Login, get token  |

### Book Routes *(JWT Protected)*
| Method | Endpoint             | Description                  |
|--------|----------------------|------------------------------|
| GET    | `/api/books`         | List all books               |
| GET    | `/api/books/:id`     | Get book by ID               |
| POST   | `/api/books`         | Create a book                |
| PUT    | `/api/books/:id`     | Update a book                |
| DELETE | `/api/books/:id`     | Delete a book                |

#### Optional Query Params for `GET /books`:
- `author`, `category`, `minRating`, `title`
- `page`, `limit`, `sortBy`, `order`

---

##  Folder Structure

```
bookstore-api/
├── controllers/         # Logic for routes
├── models/              # Mongoose schemas
├── routes/              # Route definitions
├── middlewares/         # JWT auth middleware
├── utils/               # (Optional helpers)
├── .env                 # Environment variables
├── Dockerfile           # Docker build file
├── docker-compose.yml   # For multi-container setup
├── server.js            # Entry point
└── README.md            # You're here!
```

---

##  Notes

- Ensure MongoDB is running when testing locally
- Use Postman to test endpoints
- Always include JWT in `Authorization` header for protected routes

---

##  License

This project is for educational and evaluation purposes only.

---

##  Author

Built by Shivam Gupta.