import { useEffect, useState } from 'react'
import { db } from "../firebase.js"
import TodoItem from './TodoItem.jsx'
import { useNavigate } from 'react-router-dom'

function TodoList() {
    const [todoData, setTodoData] = useState([]);
    const navigate = useNavigate();

    useEffect(function () {
        db.collection("todo-collection").onSnapshot(function (snapshot) {
            setTodoData(snapshot.docs.map(function (info) {
                return { docData: info.data(), docID: info.id }
            }))
        })
    }, [])

    function addTheTask() {
        navigate("/add");
    }

    return (
        <div>
            <div style={{display: "flex", justifyContent: "space-between", padding: "10px 0px", marginLeft: "5px"}}>
                <button onClick={addTheTask} className="btn btn-success">ADD TASK <i class="fa-solid fa-plus"></i></button>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Task Name</th>
                        <th scope="col">Current Status</th>
                        <th scope="col">Change Status</th>
                        <th scope='col'>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todoData.map(function (info) {
                            return <TodoItem task={info.docData.todoTask} status={info.docData.todoStatus} docID={info.docID} />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TodoList