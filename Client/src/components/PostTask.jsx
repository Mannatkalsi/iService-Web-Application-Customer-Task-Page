import React, { useState } from 'react';
import Button from './Button';
import Describe from './Describe';
import Payment from './Payment';
import Date from './Date';
import TaskType from './TaskType';
import TaskBudget from './TaskBudget';

function Task() {
  const [isPerson, setIsPerson] = useState(true)
  const [task, setTask] = useState({
    task_type: '',
    task_tittle: '',
    task_description: '',
    task_suburb: '',
    task_date: '',
    payment_type: '',
    budget: ''
  })
  const onTypeChange = (e) => {
    if (e.target.value === "person") {
      setIsPerson(true)
      setTask((preValue) => {
        return {
          ...preValue,
          task_type: "person"
        }
      })
    }
    else {
      setIsPerson(false)
      setTask((preValue) => {
        return {
          ...preValue,
          task_type: "online"
        }
      })
    }
  }
  const handleChange = (event) => {
    const { name, value } = event.target
    setTask((preValue) => {
      return {
        ...preValue,
        [name]: value
      }
    })
  }
  const handleClick = () => {
    fetch('http://localhost:8000/task', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        task_type: task.task_type,
        task_tittle: task.task_tittle,
        task_description: task.task_description,
        task_suburb: task.task_suburb,
        task_date: task.task_date,
        payment_type: task.payment_type,
        budget: task.budget
      })
    })
      .then(response => response.json())
      .then(data => console(data))
      .catch(err => {
        console.log("Error: " + err)
      })
  }
  return (
    <div className="App">
      <div className="header-div">
        <h1 className="main">New Task</h1>
      </div>
      <TaskType typeChange={onTypeChange}/>
      <div className="header-div">
        <h2>Describe your task to Experts</h2>
      </div>
      <Describe onChange={handleChange} />
      <div className="header-div">
        <h2>Setting up your Task</h2>
      </div>
      <Date isTypePerson={isPerson} onChange={handleChange} />
      <div className="header-div">
        <h2>Suggest how much</h2>
      </div>
      <Payment onChange={handleChange} />
      <TaskBudget onChange={handleChange}/>
      <div>
        <Button onClick={handleClick}/>
      </div>
      <br />
    </div>
  );
}

export default Task