import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderLay() {
  return (
    <header className='container-floid bg-warning '>
        <nav className='container'>
            <ul className='nav p-2'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/market">Market</Link></li>
                <li><Link to="/login">Login</Link></li>
                {/* <li><Link to="/loginGoogle">login in google</Link></li> */}
                <li><Link to="/register">Sign up</Link></li>
            </ul>
        </nav>
        
    </header>
  )
}
