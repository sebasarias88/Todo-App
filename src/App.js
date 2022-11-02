import './App.css';
import Header from "./components/Header";
import {useState} from "react";
import NewTaskForm from "./components/NewTaskForm";
import TaskContainer from "./components/TaskContainer";

function App() {

    const [tasks, setTasks] = useState([])

    const createNewTask = (name) => {
        const task = {
            id: Math.random() * 10,
            name: name,
            completed: false
        }
        setTasks([task, ...tasks])
    }

    return (
        <div className="App">
            <Header/>
            <NewTaskForm createNewTask={createNewTask}/>
            <TaskContainer tasks={tasks} setTasks={setTasks}/>
            <div className="footer">
                <input type="checkbox"/>
                <p>COMPLETED TASKS</p>
            </div>
            <hr/>
        </div>
    );
}

export default App;
