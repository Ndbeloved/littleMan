import { Link } from 'react-router-dom'
import {FaCoins, FaEuroSign, FaGlobe, FaUser, FaHive, FaRightFromBracket} from 'react-icons/fa6'
import './SideBar.css'
import { useEffect, useState } from 'react'

const SideBar = ({active}) => {
  const [activeElement, setActiveElement] = useState(0)

  //to avoid infinite re-renders
  useEffect(()=>{
    setActiveElement(active)
  }, [])

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
            <Link to='/dashboard' className={(activeElement==0) ? 'active' : ''}><FaHive/> Dashboard</Link>
        </div>

        <div className='sidenav-link'>
            <Link to='/dashboard/withdraw' className={(activeElement==1) ? 'active' : ''}><FaCoins /> Withdraw</Link>
        </div>

        <div className='sidenav-link'>
            <Link to='/dashboard/history' className={(activeElement==2) ? 'active' : ''}><FaGlobe/> History</Link>
        </div>

        <div className='sidenav-link'>
            <Link to='/dashboard/profile' className={(activeElement==3) ? 'active' : ''}><FaUser/> Profile</Link>
        </div>

        <div className='sidenav-link'>
            <Link to='/dashboard/logout' className='danger'><FaRightFromBracket/> Logout</Link>
        </div>
    </div>
  )
}

export default SideBar