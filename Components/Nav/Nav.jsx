import { Link } from 'react-router-dom'
import './Nav.css'
import { useState } from 'react'

const Nav = ()=>{
    const [menuOpen, setMenuOpen] = useState(false)
    return(
        <div className="nav-cont">
            <h1 id="logo-name">FlowVest</h1>
            <div className='quick-links'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/features'>Features</Link>
                <Link to='/how-it-works'>How it works</Link>
            </div>
            <div className='sign-in-cont'>
                <Link to="/signup">Sign up</Link>
                <Link to="/login">Login</Link>
            </div>

            {/* for mobile menu */}
            <div className='menu-bar'>
                <i className='fa-solid fa-bars' onClick={()=>setMenuOpen(true)}></i>
            </div>
            <div className= {menuOpen ? 'harmbugger-menu' : 'harmbugger-menu closed'}>
                <i className='fa-solid fa-close' onClick={()=>setMenuOpen(false)}></i>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/features'>Features</Link>
                <Link to='/how-it-works'>How it works</Link>
                <Link to="/signup" id="sign-up">Sign up</Link>
                <Link to="/login" id="login">Login</Link>
            </div>
        </div>
    )
}

export default Nav