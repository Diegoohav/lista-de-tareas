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

  return (
    <>
    <h1>Administrador de tareas</h1>
      <AddTask addTask={addTask} />
      <ShowTask taskList= {tasks}/>
    </>
  )
}

export default App
