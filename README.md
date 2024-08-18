# Help Centre

This repository contains a full-stack project for a Help Centre system. It includes both frontend and backend components designed to manage and display help center information.

## Project Overview

- **Frontend:** A user interface built with React that interacts with the backend API to display help center cards and manage user interactions.
- **Backend:** An API built with Node.js and Express to handle CRUD operations for help center cards. It serves data to the frontend and handles requests related to managing help center information.

## Features

- **Frontend:**
  - Displays a list of help center cards.
  - Allows users to view details of specific cards.
  - Search and filter options for help center information.

- **Backend:**
  - **API Endpoints:**
    - `GET /api/help-center`: Retrieve all help center cards.
    - `POST /cards`: Add a new help center card.
    - `GET /cards/:title`: Retrieve a specific card by title.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/SaiKumargithub1/help-centre.git
   cd help-centre



##Frontend:

bash
Copy code
cd frontend
npm install
Backend:

bash
Copy code
cd backend
npm install
Run the Application:

Backend:
bash
Copy code
cd backend
npm start

Frontend:
bash
Copy code
cd frontend
npm start

Usage
Access the frontend at http://localhost:3001.
The backend API runs on http://localhost:3000.
