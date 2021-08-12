import { Link } from 'react-router-dom';

const Books = ({ title, id }) => {

    return (
    <div className='Books-single' >
                <h4>{name}</h4>
                <p>{description}</p>
                <img src={imageUrl} />
            </div>

    )
}

export default Books;