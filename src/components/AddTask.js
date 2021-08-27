import React from 'react'

const AddTask = ({onAdd}) => {

    const [text, setText] = React.useState('')
    const [day, setDay] = React.useState('')
    const [reminder, setReminder] = React.useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        onAdd({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Task" value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Day & time</label>
                <input type="text" placeholder="Day & time" value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label>Set reminder</label>
                <input type="checkbox" checked={reminder} value={reminder} placeholder="Task" onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input className="btn btn-block" type='submit' value='Save Task'/>
        </form>
    )
}

export default AddTask
