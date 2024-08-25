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


//updateTask function
module.exports.updateTask = (req,res)=>{
    const {id} = req.params;
    const {task} = req.body;

    TaskModel.findByIdAndUpdate(id,{task})
        .then(() => {
            console.log("Updates Successfully!");
            res.send("Updated");
        }).catch((err)=>{
        console.log(err);
        res.send({error:err,msg:"Something went wrong.."})
    })
};


//deleteTask function
module.exports.deleteTask = (req,res)=>{
    const {id} = req.params;

    TaskModel.findByIdAndDelete(id)
        .then((data) => {
            console.log("Deleted Successfully!");
            res.send("Deleted");
        }).catch((err)=>{
        console.log(err);
        res.send({error:err,msg:"Something went wrong.."})
    })
};
