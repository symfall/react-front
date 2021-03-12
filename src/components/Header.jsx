import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/images/logo.png'

export default function Header () {

    const links = [
        {href: '/', title: 'Home'},
        {href: '#', title: 'Chat'},
        {href: '#', title: 'Profile'},
        {href: '#', title: 'Settings'},
    ]

    return (
        <header className='appHeader'>
            <Link to='/' className='blockLogo'>
                <img src={logo} alt="logo" className='headerLogo'/>
            </Link>
            <nav className='headerNav'>
                <ul className='navList'>
                    {links.map(index => 
                        <li className='navItem'>
                            <Link className='navLink' to={index.href}>
                                {index.title}
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}