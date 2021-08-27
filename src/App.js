import React from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header'
import Tasks from './components/Tasks';

function App() {
  const [showAddTask, setShowAddTask] = React.useState(false)

  const [tasks, setTasks] = React.useState([
    {
      id: 1,
      text: 'Go to Machakos',
      day: 'sun',
      reminder: true
    },
    {
      id: 2,
      text: 'Go to Work',
      day: 'mon',
      reminder: false
    },
    {
      id: 3,
      text: 'Walk with June',
      day: 'sun',
      reminder: true
    }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? {
      ...task, reminder: !task.reminder
    } : task))
  }

  const addTask = (task) => {
    let id = tasks.length + 2
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  const toggleAddTask = () => {
    setShowAddTask(!showAddTask)
  }

  return (
    <div className="container">
      <Header title="Task Tracker" toggleAddTask={toggleAddTask}></Header>
      {showAddTask && <AddTask onAdd={addTask} />}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    </div>
  );
}

export default App;
