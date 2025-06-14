import React from 'react'
import { RingLoader } from 'react-spinners'
import s from './Loader.module.css'
const Loader = () => {
  return (
    <div className={s.loaderWrapper}>
      <RingLoader className={s.loader} />
      </div>
  )
}

export default Loader