import { useState } from 'react'
import './App.css'
import { AddTask } from './components/AddTask'
import { ShowTask } from './components/ShowTask'

function App() {
  const [tasks,setTasks] = useState([])

  const addTask = (newTask)=>{
    let object = {
      task: newTask,
      status: false
    }
    setTasks([...tasks,object])
  }

  const changeStatus = (indice)=>{
    tasks[indice].status = !tasks[indice].status
    setTasks([...tasks])
  }


    const removeTask = (indice)=>{
      tasks.splice(indice,1)
      setTasks([...tasks])
    }

  return (
    <>
    <h1>Administrador de tareas</h1>
      <AddTask addTask={addTask} />
      <ShowTask taskList= {tasks} changeStatus={changeStatus} removeTask= {removeTask} />
    </>
  )
}

export default App
