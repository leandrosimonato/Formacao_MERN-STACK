import React from 'react'
import './Header.css'

function Header(props) {
  return (
    <div className="Header">
      <div className='header__logo'> 
        <h2>Logo</h2>
      </div>
      <div className="header__menu">
        <a href="/">Home</a>
        <a href="/">Sobre</a>
        <a href="/">Contato</a>
        <a href="/">Fórum</a>
      </div>
    </div>
  )
}

export default Header
