import {useState} from 'react';

function AddTask({onAddTask}) {

    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState(false)

    return (
        <form className="add-form">
            <div className="form-control">
                <label>Task</label>
                <input type="text" value={text} onChange={(e) => (
                    setText(e.target.value)
                )} name="text" />
            </div>
            <div className="form-control">
                <label>Day</label>
                <input type="text" value={day} onChange={(e) => setDay(e.target.value)} name="day" />
            </div>
            <div className="form-control form-control-check">
                <label>Reminder</label>
                <input type="checkbox" value={reminder} onChange={(e) => (
                    setReminder(e.currentTarget.checked)
                )} name="reminder"/>
            </div>
            <input type="button" onClick={() => onAddTask('',text,day,reminder)} value="Add Task" className="btn btn-block" />
        </form>
    )
}

export default AddTask
