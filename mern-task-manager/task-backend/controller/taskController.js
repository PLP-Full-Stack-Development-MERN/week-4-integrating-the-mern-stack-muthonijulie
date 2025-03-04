const Task=require("../model/Task");

const createTask=async(req,res)=>{
    try{
        const newTask=await Task.create(req.body);
        await newTask.save();
        res.status(201).json(newTask);
    }catch(error){
        res.status(400).json({error:"Bad request"});
    }
};
const getTask=async(req,res)=>{
    const tasks=await Task.find();
    res.json(tasks);
};


const updateTask=async(req,res)=>{
    try{
        const updateTask=await Task.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updateTask){
            return res.status(404).json({message:"Task not found"});
        }
        res.json(updateTask);
    }
    catch(error){
        res.status(500).json({message:"Server error",error:error.message});
    }
};

const deleteTask=async(req,res)=>{
    await Task.findByIdAndDelete(req.params.id);
    res.send("Task deleted")
};

module.exports={getTask,createTask,updateTask,deleteTask};