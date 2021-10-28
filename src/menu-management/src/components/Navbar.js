import React from 'react'
import { Link } from 'react-router-dom'
import home from '../images/home.png';
import login from '../images/login.png';
const NavBar = () => {
    return (
        <nav className="nav-bar">
            <ul>
                <li><Link to="/home"> <img id="icon" src={home} alt="home"></img></Link></li>
                <li><Link to="/login"><img id="icon" src={login} alt="login"></img></Link></li>
            </ul>
        </nav>
    )
}

export default NavBar