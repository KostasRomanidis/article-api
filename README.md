# Article API

A modern Node.js REST API backend built with TypeScript.  
This project provides endpoints for retrieving articles, designed to support mobile apps and frontend applications with mock data.

---

## Features

- **TypeScript** for type safety and maintainability
- **Express.js** for fast and flexible routing
- **Winston** for structured logging
- **CORS** enabled for frontend/mobile integration
- **Mock data** served from JSON for easy prototyping
- **Ready for extension** with real database or authentication

---

## Endpoints

| Method | Endpoint            | Description                       |
|--------|---------------------|-----------------------------------|
| GET    | `/api/articles`     | Get all articles                  |
| GET    | `/api/articles/:id` | Get a single article by its `id`  |

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```bash
git clone https://github.com/your-username/article-api.git
cd article-api
npm install
cp .env.example .env
```

### Running in Development

```bash
npm run dev
```

The API will be available at [http://localhost:3000/api/articles](http://localhost:3000/api/articles).

### Building and Running in Production

```bash
npm run build
npm start
```

---

## Environment Variables

- Copy `.env.example` to `.env` and edit as needed:
  ```bash
  cp .env.example .env
  ```
- Example:
  ```
  PORT=3000
  ```

---

## Project Structure

```
src/
  api/           # Controllers and routes
  config/        # Logger and configuration
  data/          # Mock JSON data
  utils/         # Utility functions
  App.ts         # Express app setup
  server.ts      # Entry point
```

---

## Customization

- To add or modify articles, edit `src/data/articles.mock.json`.
- To change the port, edit the `PORT` value in your `.env` file.

---

## License

MIT

---

## Author

[KostasRomanidis]