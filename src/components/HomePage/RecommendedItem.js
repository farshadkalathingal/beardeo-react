import { Link } from 'react-router-dom'
import '../../App.css'

function RecommendedItem(props) {
    return (
        <>
            <Link to={props.link} className='list-group-item list-group-item-action'>{props.title}</Link>
        </>
    )
}

export default RecommendedItem
