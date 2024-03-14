import { Link } from 'react-router-dom';
import '../styles/todolist.css'

const Items = (props) => {
    const title = props.title;
    const id = props.id;
    const url = props.to;

    return (
        <div className='list'>
            <div className='left-side'>
                <Link to={url} >{title}</Link>
                <button className='button-list'>X</button>
            </div>
        </div>
    );
};

export default Items;
