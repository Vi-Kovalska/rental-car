import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navigation.module.css'
import clsx from 'clsx'
const Navigation = () => {
  return (
      <nav className={s.navContainer}>
          <NavLink to='/' className={({isActive}) => clsx(s.link, isActive && s.activeLink)}>Home</NavLink>
          <NavLink to='/catalog' className={({isActive}) => clsx(s.link, isActive && s.activeLink)}>Catalog</NavLink>
    </nav>
  )
}

export default Navigation