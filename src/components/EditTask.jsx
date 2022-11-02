import {useState} from "react";

export default function EditTask({task, handleCompletedButtonClick, handleDelete}) {
    const [isEditable, setIsEditable] = useState(false)
    const [value, setValue] = useState(task.value)

    const handleEditBtn = () => {
        setIsEditable(true)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setIsEditable(false)
    }

    const inputChange = (e) => {
        setValue(e.target.value)
    }

    return (
        isEditable
            ?
            <form onSubmit={handleSubmit}>
                <input
                    className="input"
                    type="text"
                    autoComplete="off"
                    value={value}
                    onChange={inputChange}/>
            </form>
            :

            <div className="task" key={task.id}>
                <p>{task.name}</p>
                <button
                    className="button"
                    onClick={() => handleCompletedButtonClick(task.id)}>
                    {task.completed ? "Completed" : "Uncompleted"}
                </button>
                <button className="button"
                        onClick={() => handleDelete(task.id)}>
                    Deleted
                </button>
                <button className="button" onClick={handleEditBtn}>Edit</button>
            </div>
    )
}