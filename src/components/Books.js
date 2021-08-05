import { Link } from 'react-router-dom';

const Books = ({ title, id }) => {

    return (
    <div className='Books-single' >
        <br/><br/>
        <h4>Name: <Link to={`/Books/${id}`}>{ title }</Link> </h4>
        <br/>
     </div>
    )
}

export default Books;