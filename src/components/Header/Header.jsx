import React from 'react'
import Navigation from '../Navigation/Navigation'
import s from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <header className={s.wrapperHeader}>
      <Link to="/" aria-label='Main page'>
        <svg width='104' height='16'><use href='/icons.svg#logo' /></svg>
      </Link> 
          <Navigation/>
    </header>
  )
}

export default Header