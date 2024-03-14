import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import '../styles/todolist.css'


const Details = () => {
  const { id } = useParams();
  const [todos, setTodos] = useState([]);
  const [todoSelected, setTodoSelected] = useState(null);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      const parsedTodos = JSON.parse(storedTodos);
      setTodos(parsedTodos);

      const selectedIndex = parseInt(id) - 1;
      const selectedTodo = parsedTodos[selectedIndex];
      setTodoSelected(selectedTodo);
    }
  }, [id]);

  const back = () => {
    window.location.href = "/";
  }


  return (
    <div className="container">
      {todoSelected ? (
        <div className="form-container">
          <form >
            <h1 className="todo-details">Titulo: {todoSelected.title}</h1>
            <p className="todo-details">Description: {todoSelected.description}</p>
            <p className="todo-details">Creation date: {todoSelected.creation}</p>
            <button onClick={back}>BACK TO LIST</button>
          </form>
        </div>
      ) : (
        <p>Item not found</p>
      )}
    </div>
  );
}


export default Details;

