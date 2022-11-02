import {useState} from "react";

export default function NewTaskForm ({createNewTask}) {
    const [inputValue, setInputValue] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        createNewTask(inputValue)
        setInputValue("")
    }

    const inputChange = (e) => {
        console.log(e)
        setInputValue(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="input"
                type="text"
                autoComplete="off"
                value={inputValue}
                onChange={inputChange}
                placeholder="Add task"/>
        </form>
    )
}