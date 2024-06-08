import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { createContext } from "react";

const statusList = ["To do", "In Progress", "Completed"];

export const myBasket = createContext();

function App() {
  return (
    <div>
      <myBasket.Provider value={{ statusList: statusList }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TodoList />}></Route>
            <Route path="/add" element={<AddTodo />}></Route>
          </Routes>
        </BrowserRouter>
      </myBasket.Provider>
    </div>
  );
}

export default App;
