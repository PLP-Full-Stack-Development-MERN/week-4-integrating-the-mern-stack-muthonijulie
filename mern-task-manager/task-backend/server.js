const express=require('express');
const dotenv=require('dotenv');
const mongodb_connection=require('mongoose');
const cors=require('cors');
const logger=require("./middleware/logger");
const swaggerSetup=require("./swagger")
const Task=require("./model/Task");
const port_number=process.env.PORT || 3000;

dotenv.config();
const app=express();
app.use(express.json());
app.use(cors());
app.use(logger);

swaggerSetup(app);
const taskRoute=require('./routes/taskRoute');

app.use("/task",taskRoute);

mongodb_connection.connect(process.env.MONGO_URI)
.then(()=>console.log('MongoDB is connected successfully'))
.catch(err=>console.log("There is a connection error",err));


app.listen(port_number,()=>{
    console.log(`Server is running on http://localhost:${port_number}`)
    console.log(`API Docs available at http://localhost:${port_number}/api-docs`);
})