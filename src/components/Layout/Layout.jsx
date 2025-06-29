import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import s from './Layout.module.css'
import Footer from '../Footer/Footer'
const Layout = () => {
  return (
      <div className={s.layoutWrapper}>
          <Header />
      <Outlet className={s.outlet} />
      <Footer/>
    </div>
  )
}

export default Layout