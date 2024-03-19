import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/todolist.css';

const Items = (props) => {
    const [isDeleted, setIsDeleted] = useState(false);

    const handleDelete = () => {
        // Aquí puedes implementar la lógica para eliminar el elemento de la lista.
        // Por ejemplo, puedes llamar a una función de eliminación pasada por props.
        // Suponiendo que tienes una función handleDeleteItem definida en el componente padre.

        // props.handleDeleteItem(props.id);

        // O puedes simplemente actualizar el estado para marcar el elemento como eliminado.
        setIsDeleted(true);
    };

    if (isDeleted) {
        return null;
    }

    const title = props.title;
    const url = props.to;

    return (
        <div className='list'>
            <div className='left-side'>
                <Link to={url}>{title}</Link>
                <button className='button-list' onClick={handleDelete}>X</button>
            </div>
        </div>
    );
};

export default Items;
