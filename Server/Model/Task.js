const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema(
    {
        Task_type: {
            type:String,
            required: true
        },
        Tittle: {
            type:String,
            required: true
        },
        Description:{
            type:String,
            required: true
        },
        Suburb:{
            type: String
        },
        Date:{
            type: String,
            required: true
        },
        Payment_type:{
            type:String,
            required: true
        },
        Budget:{
            type:String,
            required: true
        }
    }
)

module.exports = mongoose.model("Task", taskSchema)