//========Task Model
// Model generally represents a collection in MongoDB Database and provide and interface to interact with database
//This allows to Create, Read, Update, Delete documents based on the schema
//========
const mongoose = require("mongoose");//Imports mongoose library
const taskSchema = new mongoose.Schema({
    task:{
        type:String,
        required:true,
    }
})
//creates new Schema for a collection in mongoDB.
module.exports = mongoose.model("Task",taskSchema);
    //name of the model ==> 'Task'
    //schema ==> taskSchema