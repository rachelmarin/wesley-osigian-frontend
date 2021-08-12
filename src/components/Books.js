import { Link } from 'react-router-dom';

const Books = ({ title, id }) => {

    render() {
        const {description, imageUrl, name} = this.props

    return (
    <div className='Books-single' >
                <h4>{name}</h4>
                <p>{description}</p>
                <img src={imageUrl} />
            </div>

    )
}

export default Books;