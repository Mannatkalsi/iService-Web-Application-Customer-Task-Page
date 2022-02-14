const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const Task = require("./Model/Task")
const cors = require("cors")

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({
  origin: ["http://localhost:3000"]
}))
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/iServiceDB", { useNewUrlParser: true, useUnifiedTopology: true })



app.post('/task', (req, res) => {
  task_type = req.body.task_type,
    tittle = req.body.task_tittle,
    description = req.body.task_description,
    date = req.body.task_date,
    payment_type = req.body.payment_type,
    budget = req.body.budget

  const task = new Task({
    Task_type: task_type,
    Tittle: tittle,
    Description: description,
    Date: date,
    Payment_type: payment_type,
    Budget: budget
  })
  if (req.body.task_type == "person") {
    task.set("suburb", req.body.task_suburb)
  }
  task.save()
    .catch((err) => console.log(err))
  console.log(task)
  res.redirect("http://localhost:3000")
})



let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port, (req, res) => {
  console.log("Server is running on port 8000")
})
