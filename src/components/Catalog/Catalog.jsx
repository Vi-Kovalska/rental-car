import React from 'react'
import s from './Catalog.module.css'
import FilterForm from '../FilterForm/FilterForm';
const Catalog = () => {
    const arr = [];
    return (
        <>
            <FilterForm/>
      <ul className={s.cardList}>
          {arr.map((item) => <li key={item.id}><CarCard {...item} /></li>)}
            </ul>
            <button>Load more</button>
            </>
  )
}

export default Catalog