
# PDF Chat Application

## Overview
This application allows users to upload PDF files, extract the text content, and then ask questions based on the content. The backend processes the PDF file, saves the content to a database, and interacts with the Groq API to answer questions. The frontend allows users to upload PDFs and interact with the document content via questions.

## Features
- Upload PDF files.
- Extract text content from PDFs.
- Ask questions based on the content of the uploaded PDF.
- Get answers using the Groq API.

## Architecture
The application follows a typical full-stack structure:
- **Backend**: Node.js server with Express.js, using MongoDB to store PDF document data.
- **Frontend**: React.js frontend provides a user-friendly interface for users to upload PDFs and interact with the document.

---

## Requirements
- Node.js (v14 or later)
- MongoDB (or a MongoDB Atlas account for cloud database hosting)
- API Key for Groq (for question-answering functionality)

---

## Setup Instructions

### 1. Clone the Repository
Clone this repository to your local machine:
```bash
git clone <repository-url>
cd <project-folder>
```
2. Backend Setup
Navigate to the Backend Folder

```bash
cd backend
```
Install Dependencies
Run the following command to install all required dependencies for the backend:

```bash
npm install
```
Create a .env File
In the backend folder, create a  file and set the following environment variables:.env

```plaintext
MONGO_URI=your-mongodb-uri
GROQ_API_KEY=your-groq-api-key
PORT=5000
```
Start the Backend Server
For development, use nodemon to start the backend server:

```bash
npm run dev
```
This will start the backend server at http://localhost:5000.

3. Frontend Setup
Navigate to the Frontend Folder

```bash
cd frontend
```
Install Dependencies
Run the following command to install the required dependencies for the frontend:

```bash
npm install
```
Start the Frontend Development Server
If using Vite:

```bash
npm run dev
```
This will start the frontend server at http://localhost:3000.

4. Running Both Servers Concurrently
Install concurrently as a Dependency
If you haven't already installed it, run:

```bash
npm install concurrently --save-dev
```
Update the Scripts Section in package.json
You can modify the scripts section to run the backend (server) and frontend (client) concurrently by adding the following entry:

```plaintext
{
  "scripts": {
    "start": "concurrently -n \"client,server\" -c \"bgBlue,bgYellow\" \"npm run client\" \"npm run server\"",
    "client": "cd frontend && npm run dev",
    "server": "cd backend && npm run dev"
  }
}
```
Explanation:
npm run client: Starts the frontend by navigating into the frontend folder and running .npm run dev
npm run server: Starts the backend by navigating into the backend folder and running .npm run dev
concurrently: Runs both commands (frontend and backend) concurrently in the same terminal window.
-n "client,server": Assigns labels for clarity in the terminal.
-c "bgBlue,bgYellow": Assigns color coding to the labels for easier identification.
API Documentation
Backend Routes
The backend exposes the following API endpoints:

POST /api/pdf/upload

Description: Upload a PDF file to the server, extract the text content, and save it to the database.
Request Body: The file should be sent as a payload.multipart/form-data
Response:
200 OK: Returns the document ID and filename.
400 Bad Request: If no file is uploaded.
Example Request:

```plaintext
POST /api/pdf/upload
Content-Type: multipart/form-data
File: [your-pdf-file]
```
Example Response:

```json
{
  "documentId": "some-unique-id",
  "filename": "example.pdf"
}
```
POST /api/pdf/ask

Description: Ask a question about the content of a document. The question and the document ID must be provided.
Request Body:
```json
{
  "documentId": "some-unique-id",
  "question": "What is the summary of this document?"
}
```
Response:
200 OK: Returns the answer to the question.
400 Bad Request: If the document ID or question is missing.
Example Request:

```plaintext
POST /api/pdf/ask
Content-Type: application/json
{
  "documentId": "some-unique-id",
  "question": "What is the main topic of the document?"
}
```
Example Response:

```json
{
  "answer": "The main topic of the document is artificial intelligence."
}
```
Frontend Usage
File Upload
The front end provides a user interface for uploading PDF files. The uploaded file's content is extracted, stored in the database, and a unique document ID is returned.

Upload a PDF file: Click on the "Upload PDF" button to select a file and upload it to the server.
View the uploaded file details: After a successful upload, a modal will appear showing the filename.
Ask a Question
After uploading a PDF, you can ask questions related to the document's content:

Submit a question: Enter your question in the input field and click the send button.
View the answer: The answer will be displayed below your question once it's processed by the backend.
Troubleshooting
Groq API Issues

Problem: The Groq API may not provide appropriate answers or may return incomplete responses.
Solution: Ensure your API key is valid and that the model you are using is appropriate for your questions.
Slow Response from Groq API

Problem: The Groq API can be slow, especially with larger documents.
Solution: If you encounter delays, you may need to wait before making further requests. Consider optimizing your document size if possible.
API Limitations

Problem: The Groq API may have request limits based on your usage.
Solution: Review your API usage and consider applying for increased quota if necessary.
