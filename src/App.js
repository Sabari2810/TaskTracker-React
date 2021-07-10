import Header from "./components/Header";
import Task from "./components/Task";
import {useState,useEffect} from 'react'
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask,setShowAddTask] = useState(false)

  const [tasks,setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasks = await fetchTasks()
      setTasks(
        tasks
      )
    }

    getTasks();

  },[]);


  const fetchTasks = async () =>  {
    const response = await fetch("http://localhost:8000/tasks");
    return response.json();
  }

  const fetchTask = async (id) =>  {
    const response = await fetch(`http://localhost:8000/tasks/${id}`);
    return response.json();
  }

  const deleteTaskFromServer = async (id) => {
    await fetch(`http://localhost:8000/tasks/${id}`,
      {
        method : "DELETE"
      }
    )
  }


const deleteTask = (id) => {
  deleteTaskFromServer(id)
  setTasks(
    tasks.filter((task) => task.id !== id)
  )
}

const toggleTask = async (id) => {
  await updateReminder(id)
  setTasks(
    tasks.map((task) => task.id === id ? {...task,reminder: !task.reminder} : task)
  )
}

const addTask = async (id,text,day,reminder) => {
  fetch("http://localhost:8000/tasks",{
    method:"POST",
    headers:{
      'Content-Type' : "application/json"
    },
    body : JSON.stringify({
      "text" : text,
      "day" : day,
      "reminder" : reminder
    })
  })
  setTasks(
    [...tasks,
      {
        id:tasks.length+1,
        text:text,
        day:day,
        reminder:reminder
      }
    ]
  )
}


const updateReminder = async(id) => {
  const res = await fetchTask(id);
  const toUpdate = {...res,reminder:!res.reminder}
  fetch(`http://localhost:8000/tasks/${id}`,{
    method:"PUT",
    headers:{
      'Content-Type' : "application/json"
    },
    body : JSON.stringify(toUpdate)
  })
}

const toggleAddForm = () => {
  setShowAddTask(
    !showAddTask
  )
}

  return (
    <div className="container">
      <Header onAddTask={addTask} onToggleForm={toggleAddForm} showAddTask={showAddTask} title="Task Tracker"/>
      { showAddTask && <AddTask onAddTask={addTask}></AddTask>}
      {tasks.length > 0 ? <Task tasks={tasks} onToggle={toggleTask} onDeleteTask={deleteTask} ></Task> : "No Available Tasks"}
    </div>
  );
}

export default App;
