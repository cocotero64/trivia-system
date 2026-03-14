# Trivia System - Distributed System Prototype

## Project Overview

This project is a distributed trivia system developed as a functional prototype for Software Architecture.  
The system consists of multiple independent components that communicate through HTTP APIs.

Users can load trivia questions and submit answers through a web interface. The frontend communicates with a backend API, which processes the logic and connects to a cloud database.

This architecture demonstrates a simple distributed system deployed in production.

---

# System Architecture

The system is composed of three independent services:

Frontend → Backend API → Database

1. Frontend (Web Client)
2. Backend API (Node.js Server)
3. Database (MongoDB Atlas)

Each component is deployed independently in the cloud.

---

# Technologies Used

Frontend
- HTML
- JavaScript
- Fetch API
- Vercel (Deployment)

Backend
- Node.js
- Express.js
- CORS
- Render (Deployment)

Database
- MongoDB Atlas (Cloud Database)
- Mongoose

Version Control
- Git
- GitHub

---

# Deployment URLs

Frontend (Vercel)

https://trivia-system-two.vercel.app

Backend API (Render)

https://trivia-system-t2vk.onrender.com

API Endpoint Example

https://trivia-system-t2vk.onrender.com/questions

---

# API Endpoints

Get trivia questions

GET /questions

Example response:
[
{
"id":1,
"question":"Which country produces most K-dramas?",
"options":["Japan","South Korea","China","Thailand"],
"answer":"South Korea"
}
]
Submit an answer

POST /answer

Example request body:


{
"questionId":1,
"answer":"South Korea"
}


Example response:


{
"correct": true
}


---

# How to Run the Project Locally

Clone the repository:


git clone https://github.com/cocotero64/trivia-system.git


Enter the backend folder:


cd backend


Install dependencies:


npm install


Start the server:


node server.js


Open the frontend:

Open `frontend/index.html` in your browser.

---

# System Requirements

Node.js  
Internet connection for MongoDB Atlas  

---

# Cost Analysis

This system uses free-tier cloud services:

Vercel (Frontend Hosting) → Free  
Render (Backend Hosting) → Free  
MongoDB Atlas (Database) → Free  

Total Monthly Cost: $0 USD

This meets the project requirement of staying under $75/month.

---

# Author

Emanuel De la Cerda  
Software Architecture Course
