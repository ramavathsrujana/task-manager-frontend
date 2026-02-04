# Task Manager Web App (Frontend)

## Live Demo
https://charming-chaja-dce1dc.netlify.app/

## Project Overview
This is a mobile-friendly Task Manager web application built using React JS.
The application allows users to add tasks, view tasks, mark tasks as completed, and delete tasks.
The UI is designed to be clean, responsive, and easy to use on both desktop and mobile devices.

## Tech Stack
- React JS
- JavaScript (ES6)
- HTML5
- CSS3
- Axios (for API calls)
- Netlify (Frontend Deployment)

## Features
- Add new tasks
- View all tasks
- Mark tasks as completed
- Delete tasks
- Responsive, mobile-friendly design
- Clean and modern UI

## How to Run the Frontend Locally
1. Clone the repository
2. Navigate to the frontend folder
3. Install dependencies:
   npm install
4. Start the development server:
   npm start
5. Open browser at:
   http://localhost:3000/

## API Integration
The frontend is integrated with a Django REST API.
For local development, the backend runs at:
http://127.0.0.1:8000/api/tasks/

## Notes / Assumptions
- The frontend is deployed on Netlify to demonstrate UI, React component structure, and deployment.
- The backend APIs are implemented using Django REST Framework and are available in a separate GitHub repository.
- Due to free-tier cloud hosting limitations, the backend is intended to be run locally for full CRUD functionality.

## Backend Repository
https://github.com/ramavathsrujana/task-manager-backend
