import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <ul>
                <li><Link to="/home"> Home </Link></li>
                <li><Link to="/login"> Log In </Link></li>
                {/* <li><Link to="/shoppingcart"><img id="nav-icon" src={cart} alt="cart"></img></Link> </li> */}
            </ul>
        </nav>
    )
}

export default NavBar