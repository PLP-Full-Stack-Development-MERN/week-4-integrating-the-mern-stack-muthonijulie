const mongodb_connection=require('mongoose');
const TaskSchema=new mongodb_connection.Schema({
    title:{type:String,required:true},
    description:{type:String},
    status:{type:String,default:'pending',enum:['pending','in progress','completed']},
    dueDate:{type:Date}
    
},{timestamps:true})
module.exports=mongodb_connection.model("Task",TaskSchema)