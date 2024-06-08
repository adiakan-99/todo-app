import { db } from '../firebase'
import { useContext } from 'react';
import { myBasket } from '../App';


function TodoItem(props) {
    const { statusList } = useContext(myBasket);

    function deleteTheTask() {
        db.collection("todo-collection").doc(props.docID).delete();
    }

    function changeTheStatus(event) {
        db.collection("todo-collection").doc(props.docID).update({
            todoStatus: event.target.value
        })
    }

    return (
        <tr>
            <td>{props.task}</td>
            <td>{props.status}</td>
            <td>
                <select style={{ padding: "2px 2px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "4px", backgroundColor: "#f9f9f9", color: "#333", outline: "none" }} onChange={changeTheStatus}>
                    {
                        statusList.map(function (status) {
                            return (status === props.status) ?
                                (<option style={{ padding: "2px" }} value={status} selected>{status}</option>) :
                                (<option style={{ padding: "2px" }} value={status}>{status}</option>)
                        })
                    }
                </select>
            </td>
            <td><button onClick={deleteTheTask} className="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
        </tr>
    )
}

export default TodoItem