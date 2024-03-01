import { Link } from 'react-router-dom'
import {FaCoins, FaEuroSign, FaGlobe, FaUser, FaHive, FaRightFromBracket} from 'react-icons/fa6'
import './SideBar.css'

const SideBar = () => {
  return (
    <div className="sidebar-wrapper">
        <div className='user-details-wrapper'>
            <div className='user-avatar-wrapper'></div>
            <div className='user-main'>
                <h3>Dev Cisco</h3>
                <p>devcisco@gmail.com</p>
            </div>
        </div>

        <div className='sidenav-link'>
            <Link to='/dashboard' className='active'><FaHive/> Dashboard</Link>
        </div>

        <div className='sidenav-link'>
            <Link to='/dashboard/withdraw'><FaCoins /> Withdraw</Link>
        </div>

        <div className='sidenav-link'>
            <Link to='/dashboard/history'><FaGlobe/> History</Link>
        </div>

        <div className='sidenav-link'>
            <Link to='/dashboard/profile'><FaUser/> Profile</Link>
        </div>

        <div className='sidenav-link'>
            <Link to='/dashboard/logout' className='danger'><FaRightFromBracket/> Logout</Link>
        </div>
    </div>
  )
}

export default SideBar