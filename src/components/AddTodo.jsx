import { useState, useContext } from 'react'
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { myBasket } from '../App';

const AddTodo = () => {
    const navigate = useNavigate();

    const { statusList } = useContext(myBasket);

    const [taskName, setTaskName] = useState("")
    const [taskStatus, setTaskStatus] = useState(statusList[0]);

    function collectTheTask(event) {
        setTaskName(event.target.value);
    }

    function collectTheStatus(event) {
        setTaskStatus(event.target.value);
    }

    function submitTheTask() {
        if (taskName !== "") {
            db.collection("todo-collection").add({
                todoTask: taskName,
                todoStatus: taskStatus
            })

            navigate("/");
        } else {
            alert("Please enter the task!");
        }
    }

    function cancelSubmission() {
        navigate("/");
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", width: "30rem", color: "white", marginTop: "10px", marginLeft: "10px" }}>
            <input type="text" style={{ marginBottom: "10px" }} placeholder="Enter task here..." onChange={collectTheTask} className="form-control" />
            <div style={{ display: "flex", marginBottom: "10px" }}>
                <label style={{ fontFamily: "Arial, sans-serif", fontSize: "16px", color: "#555" }}>Select status: </label>
                <select style={{ padding: "2px 2px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "4px", backgroundColor: "#f9f9f9", color: "#333", outline: "none" }} onChange={collectTheStatus}>
                    {
                        statusList.map(function (status) {
                            return <option style={{ padding: "2px" }} value={status}>{status}</option>
                        })
                    }
                </select>
            </div>
            <div>
                <button type="button" className="btn btn-success" style={{ width: "5rem" }} onClick={submitTheTask}>Submit</button>
                <button type="button" className="btn btn-danger" style={{ width: "5rem", margin: "0px 5px" }} onClick={cancelSubmission}>Cancel</button>
            </div>
        </div>
    )
}

export default AddTodo