import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navigation.module.css'
import clsx from 'clsx'
const Navigation = () => {
  return (
    <nav >
      <ul className={s.navContainer}>
        <li>
      <NavLink to='/' className={({isActive}) => clsx(s.link, isActive && s.activeLink)}>Home</NavLink>
      </li>
        <li>
        <NavLink to='/catalog' className={({isActive}) => clsx(s.link, isActive && s.activeLink)}>Catalog</NavLink>
      </li>
      </ul>
    </nav>
  )
}

export default Navigation