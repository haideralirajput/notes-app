# Notes App

This repository contains two main components:
1. **Frontend**: A React application.
2. **Backend**: A Laravel application.

Both components work together to form a complete Notes application.

---

## Branch Information

- The **React** project is on the `master` branch.
- The **Laravel** project will run on the `main` branch.

---

## Prerequisites

Before running the project, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/)
- [Composer](https://getcomposer.org/)
- [PHP](https://www.php.net/)
- [Laravel](https://laravel.com/docs/8.x)
- [MySQL](https://www.mysql.com/)

---

## Project Setup

### 1. **Frontend Setup (React)**

The frontend is built using **React**. To get it running locally, follow these steps:

#### Steps:
1. Navigate to the `notes-frontend` directory:
   ```bash
   cd notes-frontend
   ```

2. Install the necessary packages using npm:
   ```bash
   npm install
   ```

3. Once the dependencies are installed, run the React application:
   ```bash
   npm start
   ```

   This will start the React app locally, usually available at [http://localhost:3000](http://localhost:3000).

---

### 2. **Backend Setup (Laravel)**

The backend is built using **Laravel**. Follow these steps to set up the backend:

#### Steps:
1. Navigate to the `notes-backend` directory (or your Laravel project directory):
   ```bash
   cd notes-backend
   ```

2. Install the required PHP dependencies using Composer:
   ```bash
   composer install
   ```

3. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```

4. Generate the application key:
   ```bash
   php artisan key:generate
   ```

5. Set up your database configuration in the `.env` file.

6. Run the migrations to set up the database:
   ```bash
   php artisan migrate
   ```

7. Finally, start the Laravel development server:
   ```bash
   php artisan serve
   ```

   This will start the Laravel app, usually available at [http://localhost:8000](http://localhost:8000).

---

## How It Works

- The **React** frontend communicates with the **Laravel** backend through API requests.
- The backend (Laravel) handles data processing, authentication, and storing notes in the database.
- The frontend (React) provides a user interface where users can add, view, and delete notes.

---

## Notes

- **Frontend and Backend Communication**: The React app and Laravel backend should be running on different ports (e.g., React on `3000` and Laravel on `8000`). Ensure you handle CORS properly in your Laravel app to allow requests from the React app.

- **CORS Configuration in Laravel**: You can configure CORS settings in the `config/cors.php` file in Laravel to allow the React app to make requests to the backend.

