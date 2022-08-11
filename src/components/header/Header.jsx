import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header>
        <div className='header' id='header'> 
            <a href="#default" className='logo'>LILY PHAM</a>
            <div className="header-right">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    </header>
  ) 
}

export default Header
