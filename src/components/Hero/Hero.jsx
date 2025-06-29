import React from 'react'
import s from './Hero.module.css'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx';
const Hero = () => {
  const navigate = useNavigate();
  return (
      <div className={clsx(s.wrapper, s.container)}>
          <div className={s.contentWrapper}>
          <h1 className={s.title}>Find your perfect rental car</h1>
          <p className={s.paragraphHero}>Reliable and budget-friendly rentals for any journey</p>
              <button onClick={() =>   navigate(`/catalog`)}>View Catalog</button>
              </div>
    </div>
  )
}

export default Hero