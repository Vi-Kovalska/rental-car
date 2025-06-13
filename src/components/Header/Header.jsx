import React from 'react'
import Navigation from '../Navigation/Navigation'
import s from './Header.module.css'

const Header = () => {
  return (
      <div className={s.wrapperHeader}>
          <svg width='104' height='16'><use href='/icons.svg#logo' /></svg>
          <Navigation/>
    </div>
  )
}

export default Header