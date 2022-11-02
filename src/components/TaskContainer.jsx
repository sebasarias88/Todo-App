import EditTask from "./EditTask";

export default function TaskContainer({tasks, setTasks}){
    const handleCompletedButtonClick = (id) => {
        const newTask = tasks.map(task => {
            if (task.id === id) {
                return({...task, completed: !task.completed})
            }
            return({...task})
        })
        setTasks(newTask)
    }

    const handleDelete = (id) => {
        const deleTasks = tasks.filter(task=>task.id!==id)
        setTasks(deleTasks)
    }

    return (
        <div>
            {
                tasks.map(task => (
                    <EditTask task={task}
                              handleDelete={handleDelete}
                              handleCompletedButtonClick={handleCompletedButtonClick}/>
                ))
            }
        </div>
        )
}