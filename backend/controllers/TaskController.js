const TaskModel = require("../models/TaskModel");//imports TaskModel

//getTasks function
module.exports.getTasks =async (req,res)=>{
    const tasks = await TaskModel.find();
    res.send(tasks);
}

//saveTasks function :
module.exports.saveTask = (req,res)=>{
    const {task} = req.body;

    TaskModel.create({task})
        .then((data) => {
            console.log("Saved Successfully!");
            res.status(201).send(data);
        }).catch((err)=>{
        console.log(err);
        res.send({error:err,msg:"Something went wrong.."})
    })
};