const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TasksSchema = Schema({
    created:{
        type:Date, 
        required:true
    },
    due:{
        type:Date,
        required:false
    },
    taskName:{
        type:String, 
        required:true
    },
    taskDetails:{
        type:[String],
        required:false
    }
})

module.exports = Tasks = mongoose.model('tasks',TasksSchema);