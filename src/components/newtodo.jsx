import { useEffect, useState } from "react";
import '../styles/newtodo.css'

const New = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [creation, setCreation] = useState("");
    const [todos, setTodos] = useState([]);


    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const newTodo = { title, description, creation };
        const updatedTodos = [...todos, newTodo];
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    
        setTitle("");
        setDescription("");
        setCreation("");

        setTodos(updatedTodos);

    };

    return (
        <div className="container">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <label>Description</label>
                    <textarea 
                        rows="12" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    <label>Creation Date</label>
                    <input type="date" value={creation} onChange={(e) => setCreation(e.target.value)} />
                    <button className="button" type="submit">SEND</button>
                </form>
            </div>
        </div>
    )
}

export default New;
