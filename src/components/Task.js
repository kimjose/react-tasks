import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = (props) => {
    let task = props.task
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => props.onToggle(task.id)}>
            <h3>{task.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => props.onDelete(task.id)} /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
