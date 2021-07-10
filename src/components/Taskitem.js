import {FaTimes} from 'react-icons/fa'

function Taskitem({task,onDeleteTask,onToggle}) {
    return (
        <div className={
            task.reminder ? 'task reminder' : 'task'
        } onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} <FaTimes onClick={() => onDeleteTask(task.id)} /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Taskitem
