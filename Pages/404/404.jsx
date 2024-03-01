import './404.css'
import ErrorImage from '../../src/assets/something-lost.png'
import { Link } from 'react-router-dom'

const ErrorPage = ()=>{
    return(
        <div className="wrapper-404">
            <img src={ErrorImage} alt="404-image" />
            <Link to='/'>Go back to home</Link>
        </div>
    )
}

export default ErrorPage