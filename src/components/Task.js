import Taskitem from "./Taskitem"

function Task({ tasks ,onDeleteTask,onToggle}) {
    return (
        <>
            {
                tasks.map((task) => (
                    <Taskitem key={task.id} onToggle={onToggle} onDeleteTask={onDeleteTask} task={task} />
                ))
            }
        </>
    )
}

export default Task

