import React, { useState } from 'react'
import s from './CarCard.module.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cityConverting, countryConverting, mileageUIConverting } from '../../utilits/convertingCarsValues';
import clsx from 'clsx';
import { toggleFavorite } from '../../redux/favorites/slice';
import { selectFavorites } from '../../redux/favorites/selectors';
const CarCard = ({ id, img, description, brand, model, year, rentalPrice, address, rentalCompany, type, mileage }) => {
    
    const city = cityConverting(address);
    const country = countryConverting(address);
    const mileageUI = mileageUIConverting(mileage);

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const favorites = useSelector(selectFavorites);
    const liked = favorites.includes(id);

  const handleLike = () => {
    dispatch(toggleFavorite(id));
  };
  return (
      <div className={s.wrapperCard}>
          <div className={s.wrapperImg}>
              <img src={img} alt={description} />
              <div className={s.btnFavorite} onClick={handleLike}><svg className={clsx(s.iconFavorite, { [s.liked]: liked })} width='16' height='16'><use href='/icons.svg#favorite'/></svg></div>
          </div>
          <div className={s.wrapperSecondTitleAndPrice}><h2 className={s.titleSecond}>{brand} <span className={s.customModel}>{`${model},`}</span> {year}</h2> <p className={s.titleSecond}>{`$${rentalPrice}`}</p></div>
          <p className={s.textCard}>{`${city} | ${country} | ${rentalCompany} | `}</p>
          <p className={s.textCard}>{`${type} | ${mileageUI}`}</p>
          <button onClick={() =>   navigate(`/catalog/${id}`)}>Read more</button>
      </div>
  )
}

export default CarCard