PROJECT OVERVIEW
The project allows the user to add tasks,description of what the task is all about,the status of the task and the due date.The user is able to mark the task as complete upon completion and delete if it was not the intended task on the list.
Upon keying in the task,it is saved in the database.

INSTALLATION STEPS:
To install the project,create two folders in the main folder 'mern-task-manager',task-frontend and task-backend
In the task-backend folder,install  backend  dependencies,'npm install express mongoose 
dotenv cors'
Ensure that the server .js file is created and defined the environment.The server is connected to the database,mongodb
To set up the task-frontend folder,create the react app 'npm create vite@latest mern-task-manager' then cd to the app and run the app.
Create the components folder where the TaskList,TaskItem and TaskForm will be stored.
Ensure that the code is connected to the backend by installing axios that enables fetching,get,post,delete and put actions.
Run the project by running the backend:'node server.js' and frontend 'npm run dev'

API ENDPONT DOCUMENTATION:
To document this, install swagger.ui that  stores the api endpoints and it is stored in the routes file

FEATURES AND USAGE GUIDE
The features are forms,lists.
The user can add the task details in the form and click the add button to submit the task.
The task item in displayed in the task list below the task form.

To view the deployed sites, visit:
https://render-mern-backend.onrender.com-backend
https://mern-task-manager-7fpd8oyhj-julies-projects-8179a2e9.vercel-frontend