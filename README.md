# MERN Todo List App

A simple and interactive **Todo List** application built using the **MERN stack** (MongoDB, Express.js, React, and Node.js). This app allows users to **add, update, delete, and manage tasks efficiently**.

## 🛠 Tech Stack

This project is built using the **MERN** stack:

- **MongoDB** - NoSQL database for storing tasks
- **Express.js** - Backend framework for handling API requests
- **React.js** - Frontend library for building the user interface
- **Node.js** - JavaScript runtime for running the backend server

### Additional Tools & Libraries:

- **React Router** - For client-side routing
- **Fetch API** - To make API calls from React
- **CSS** - For basic styling

## Features

This **MERN Todo List App** provides the following functionalities:

✅ **Add Task** – Users can create new tasks by providing a task name and assigning it to someone.  
✅ **Update Task** – Users can edit task details such as the task name and assigned person.  
✅ **Delete Task** – Users can remove tasks from the list.  
✅ **Mark as Done** – Users can mark tasks as completed.  
✅ **Real-time Updates** – The task list updates immediately after adding, editing, or deleting a task.

Here's the complete Installation & Setup section in a single code block that you can copy and paste directly into your README.md:

markdown

## 🛠 Installation & Setup

### Prerequisites

Before running the app, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [MongoDB](https://www.mongodb.com/) (Either MongoDB Atlas or a locally installed MongoDB instance)
- A code editor like [VS Code](https://code.visualstudio.com/)

### 🔹 Clone the Repository & Navigate

git clone https://github.com/your-username/todo-list.git
cd todo-list

### 🔹 Set Up Environment Variables

The project requires a MongoDB connection string to store tasks.

Inside the backend folder, create a file named `.env`.

Add the following variables:

# If using MongoDB Atlas, replace <your-mongo-uri> with your actual MongoDB Atlas URI

MONGO_URI=<your-mongo-uri>

# If using a local MongoDB server, use this connection string:

MONGO_URI=mongodb://localhost:27017/todoDB

# Backend URL

VITE_BACKEND_URL=http://localhost:3000

📌 **Note:** If using MongoDB Atlas, ensure your IP address is whitelisted in Atlas settings.

### 🔹 Install Dependencies & Run the Project

Since the project has separate frontend and backend, follow these steps:

# Move into the backend folder

cd backend

# Install backend dependencies

npm install

# Start the backend server

npm start

# Open a new terminal, then move into the frontend folder

cd ../frontend

# Install frontend dependencies

npm install

# Start the frontend server

npm run dev

This will start:

- The backend at `http://localhost:3000`
- The frontend at `http://localhost:5173` (or another port if 5173 is in use)

### 🔹 Testing the Application

1. Open your browser and go to `http://localhost:5173` to access the frontend
2. Perform operations like adding, updating, deleting, and marking tasks as done
3. Check the backend logs to see API requests being handled

## 📂 Project Structure

The project follows a **MERN stack** architecture with separate frontend and backend directories.

todo-list/
│── backend/ # Backend (Node.js, Express, MongoDB)
│ ├── controllers/ # Handles request logic
│ ├── models/ # Mongoose models (Task schema)
│ ├── routes/ # API routes
│ ├── config/ # Database connection config
│ ├── .env # Environment variables
│ ├── server.js # Main server file
│ ├── package.json # Backend dependencies
│  
│── frontend/ # Frontend (React, Vite)
│ ├── src/ # React components and pages
│ ├── services/ # API service functions
│ ├── App.jsx # Main React component
│ ├── main.jsx # Renders the app
│ ├── vite.config.js # Vite configuration
│ ├── package.json # Frontend dependencies
│  
│── README.md # Project documentation
│── .gitignore # Files to ignore in version control

### 📌 Explanation

- **backend/** → Contains the Express server, API routes, and MongoDB connection.
- **frontend/** → Contains the React app, UI components, and API service functions.
- **config/** → Stores database connection settings.
- **routes/** → Defines API endpoints for tasks.
- **models/** → Mongoose schemas for managing data.
- **services/** → Frontend API calls to the backend.

With this structure, **backend and frontend are completely separate**, making the project modular and scalable.

Here is the **API Endpoints** section with the correct base URL. You can directly copy-paste it into your `README.md`:  

md
## 🔌 API Endpoints  

The backend provides the following REST API endpoints for managing tasks.  

### 📌 Base URL  

http://localhost:3000/todos


### 🚀 Endpoints  

| Method  | Endpoint         | Description                  | Request Body |
|---------|-----------------|------------------------------|--------------|
| **GET**    | `/todos`         | Get all tasks              | None |
| **GET**    | `/todos/{id}`     | Get a single task by ID    | None |
| **POST**   | `/todos`         | Create a new task          | `{ "task": "Task Name", "assignedTo": "User Name", "completed": false }` |
| **PUT**    | `/todos/{id}`     | Update an existing task    | `{ "task": "Updated Task", "assignedTo": "Updated User", "completed": true }` |
| **DELETE** | `/todos/{id}`     | Delete a task by ID        | None |

### 📌 Example API Request (POST)  

To **create a new task**, send a `POST` request to `/todos` with the following JSON body:  

{
  "task": "Complete MERN Project",
  "assignedTo": "John Doe",
  "completed": false
}


This will return the created task object with a unique `id`.

## 🛠️ Usage  

Follow these steps to use the **MERN Todo List App** effectively:  

### 🏠 Home Page  
- The homepage displays all tasks fetched from the database.  
- Each task has options to **update**, **mark as done**, or **delete**.  

### ➕ Adding a Task  
1. Navigate to the "Add Task" section.  
2. Enter the **task name** and **assigned user**.  
3. Click the "Add Task" button.  
4. The new task will appear in the task list.  

### ✏️ Updating a Task  
1. Click the **"Update"** button next to the task you want to edit.  
2. Modify the **task name** or **assigned user**.  
3. Click **"Save Changes"** to update the task.  

### ✅ Marking a Task as Done  
1. Click the **"Mark as Done"** button for the task.  
2. The task status will be updated as **completed**.  

### ❌ Deleting a Task  
1. Click the **"Delete"** button next to the task.  
2. Confirm the deletion when prompted.  
3. The task will be permanently removed.  

---

This app helps manage tasks efficiently with a simple and interactive UI! 


##  Contributing

We welcome contributions from everyone! Follow these steps to contribute to this project:

### 🛠️ How to Contribute

1. **Fork the Repository**
   - Click the "Fork" button at the top-right of this repository's GitHub page

2. **Clone Your Fork**
   
   git clone https://github.com/your-username/todo-list.git
   cd todo-list
   

3. **Set Up Development Environment**
   
   # Install dependencies for both frontend and backend
   cd backend && npm install
   cd ../frontend && npm install
   

4. **Create a Feature Branch**
   git checkout -b feature/your-feature-name
   

5. **Make Your Changes**
   - Follow existing code style and patterns
   - Write clear commit messages
   - Test your changes thoroughly

6. **Commit and Push**
   git add .
   git commit -m "feat: add your feature description"
   git push origin feature/your-feature-name
   

7. **Create a Pull Request**
   - Go to the original repository on GitHub
   - Click "New Pull Request"
   - Compare across forks and select your branch
   - Fill out the PR template with details about your changes

### 📝 Contribution Guidelines
- Keep PRs focused on a single feature/bugfix
- Ensure your code passes all tests
- Update documentation if needed
- Follow the existing code style
- Be respectful and constructive in discussions

### 🐛 Reporting Issues
Found a bug? Please open an issue with:
- A clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

### ❓ Need Help?
Join our [Discord/Slack community] or open a discussion thread if you need help contributing!

We appreciate all contributions, big or small! 🎉


Key improvements made:
1. Added clear section headers
2. Included environment setup steps
3. Added more detailed contribution guidelines
4. Included issue reporting instructions
5. Added a help section
6. Used consistent formatting throughout
7. Made the branch naming convention clearer (feature/ prefix)
8. Added emojis for better visual scanning

## 📩 Contact

Have questions, suggestions, or want to collaborate? I'd love to hear from you!

### 🌐 Connect With Me
- **Email:** [borkarshreyas123@gmail.com](mailto:borkarshreyas123@gmail.com)
- **LinkedIn:** [Shreyash Borkar](https://www.linkedin.com/in/shreyash-borkar-b3a391198/)
- **GitHub:** [@shreyastagram](https://github.com/shreyastagram)
- **Portfolio:** https://shreyastagram.netlify.app/

### 💡 Project Support
- Found a bug? ➡️ [Open an Issue](https://github.com/shreyastagram/todo-list/issues)
- Want to contribute? ➡️ See [Contributing Guidelines](#-contributing)
- Like this project? ⭐ Star the repo!

---

🎯 **Let's build something amazing together!** Your feedback and contributions are always welcome.