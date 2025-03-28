```markdown
# Node.js Express API with MongoDB

This project is a simple Node.js Express API that connects to a MongoDB database and retrieves user data. It includes a GET endpoint at `/users/:id` which returns user details in JSON format only if the user’s age is greater than 21.

## Features

- **GET /users/:id** endpoint to fetch a user by their ID.
- Returns user details only if the user’s age is greater than 21.
- Gracefully handles invalid MongoDB ObjectId errors.
- Provides appropriate error responses (404 for not found, 400 for invalid IDs, and 500 for server errors).

## Prerequisites

- [Node.js](https://nodejs.org/) (v10 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/) (either a local instance or MongoDB Atlas)

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository_url>
   cd my-express-api
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Configuration

- Open the `server.js` file.
- Update the MongoDB connection string to match your setup:

  ```javascript
  const mongoURI = 'mongodb://localhost:27017/your-db-name';
  ```

  Replace `your-db-name` with your MongoDB database name. If you're using MongoDB Atlas, update the URI accordingly.

## Running the Server

1. **Start your MongoDB server** (if using a local instance):

   ```bash
   mongod
   ```

2. **Start the Node.js server:**

   ```bash
   node server.js
   ```

   The server will run on port 3000 by default, or the port defined in your environment variable.

## API Documentation

### GET /users/:id

- **Description:** Retrieves a user by their ID if the user's age is greater than 21.
- **Route Parameter:**
  - `id` — The MongoDB ObjectId of the user.
- **Responses:**
  - `200 OK` — Returns the user details in JSON format.
  - `400 Bad Request` — Returned if the provided ID is not a valid ObjectId.
  - `404 Not Found` — Returned if no user is found or if the user’s age is 21 or less.
  - `500 Internal Server Error` — Returned if an error occurs on the server.

#### Example Request

```bash
curl http://localhost:3000/users/60d5ec49f8d2e814c8a1a9b7
```

#### Example Response

```json
{
  "_id": "60d5ec49f8d2e814c8a1a9b7",
  "name": "John Doe",
  "email": "johndoe@email.com",
  "age": 30
}
```

## Project Structure

```
my-express-api/
├── server.js          # Main server file with Express API setup
├── package.json       # Project metadata and dependencies
└── README.md          # Project documentation
```

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Express.js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)
```
