import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h1>PowerWash</h1>
            <ul className='nav-links'>
                <Link to='/'>Home</Link>
                <Link to='about-us'>About Us</Link>
                <Link to='demos'>Demos</Link>
                <Link to='request'>Request Estimate</Link>
            </ul>
        </header>
    )
}

export default Header