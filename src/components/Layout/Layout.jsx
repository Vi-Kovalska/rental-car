import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import s from './Layout.module.css'
const Layout = () => {
  return (
      <div className={s.layoutWrapper}>
          <Header />
          <Outlet className={s.outlet} />
    </div>
  )
}

export default Layout