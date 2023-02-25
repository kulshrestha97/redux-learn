import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
//useSelector and useDispatch are the two hooks provided by the react-redux library using them, we can use that particular slice, dispatch an event,
// and even get subscribed to the store updates

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleInputChange = (ev) => {
    if (ev.key === "Enter") {
      const value = ev.target.value.trim();
      dispatch({
        type: "todos/addTodo",
        payload: { completed: false, text: value },
      });
    }
  };
  const removeHandler = (todoId) => {
    dispatch({ type: "todos/removeTodo", payload: { id: todoId } });
  };
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} onClick={(event) => removeHandler(todo.id)}>
              {todo.text}
            </li>
          ))}
        </ul>
        <input
          type={"text"}
          onKeyDown={(event) => handleInputChange(event)}
          placeholder="Add a todo..."
        />
      </header>
    </div>
  );
}

export default App;
