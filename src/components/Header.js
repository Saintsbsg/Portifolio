import React from 'react'
import {NavLink} from  'react-router-dom';
import "./Header.css"
const Header = () => {
  return (
    <header className='main-header'>
        <nav className='nav'>
            <h2><i class="fa-solid fa-code icon"></i>Gabriel <span className='name-color'>Santos</span></h2>
            <ul className='nav-list'>
                <NavLink to='/' className='nav-link'>
                  <li>Início</li>
                  </NavLink>
                <NavLink to='/about' className='nav-link'>
                <li>Sobre</li>
                </NavLink>
                <NavLink to='projects' className='nav-link'>
                <li>Projetos</li>
                </NavLink>
            </ul>
        </nav>
    </header>
  )
}

export default Header