# Login Application

This project is a simple login application with a React frontend and a Node.js backend. It uses Material-UI for styling, Zustand for state management, and includes a mock authentication system.

## Setup

1. Set up the frontend:
   ```sh
     cd frontend
     npm install
   ```
2. Set up the backend:
   ```sh
      cd ../backend
      npm install
   ```
3. Configure environment variables:

- Edit `frontend/.env`:
  ```
  VITE_API_URL=http://localhost:3001
  ```
- Edit `backend/.env`:
  ```
  PORT=3001
  ```

## Running the Application

1. Start the backend server:
   ```sh
     cd backend
     npm start
   ```
2. In a new terminal, start the frontend development server:
   ```sh
      cd frontend
      npm run dev
   ```

## Features

- Modern UI with Material-UI components
- Responsive design
- State management with Zustand
- Toast notifications for login feedback
- Mock authentication system

## Login Credentials

For testing purposes, use the following credentials:

- Username: user
- Password: password
