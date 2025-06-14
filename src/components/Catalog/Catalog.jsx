import React from 'react'
import s from './Catalog.module.css'
import FilterForm from '../FilterForm/FilterForm';
import { useSelector } from 'react-redux';
import { selectCars } from '../../redux/cars/selectors';
import CarCard from '../CarCard/CarCard';
const Catalog = () => {
    const arr = useSelector(selectCars);
    return (
        <>
      <ul className={s.cardList}>
          {arr.map((item) => <li key={item.id} className={s.cardItem}><CarCard {...item} /></li>)}
            </ul>
            <button>Load more</button>
            </>
  )
}

export default Catalog