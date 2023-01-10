import { useState } from 'react';
import {NavLink} from  'react-router-dom';
import "./Header.css"
import Logo from '../../assets/logo/png/gs-high-resolution-logo-black-on-transparent-background.png'



const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <header className='main-header'>
      <img className='logo-gs' src={Logo} alt="" /> 
        <nav className='nav'>
            <ul className={isMobile ? 'nav-list-mobile' : 'nav-list'} onClick={() => setIsMobile(false)}>
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
            <button className='mobile-menu-icon' onClick={() => setIsMobile(!isMobile)}>
              {isMobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
            </button>
        </nav>
    </header>
  )
}

export default Header