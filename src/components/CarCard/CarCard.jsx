import React from 'react'
import s from './CarCard.module.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cityConverting, countryConverting, mileageUIConverting } from '../../utilits/convertingCarsValues';
const CarCard = ({ id, img, description, brand, model, year, rentalPrice, address, rentalCompany, type, mileage }) => {
    
    const city = cityConverting(address);
    const country = countryConverting(address);
    const mileageUI = mileageUIConverting(mileage);

    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
      <div className={s.wrapperCard}>
          <div className={s.wrapperImg}>
              <img src={img} alt={description} />
              <button className={s.btnFavorite}><svg className={s.iconFavorite} width='16' height='16'><use href='/icons.svg#favorite'/></svg></button>
          </div>
          <div className={s.wrapperSecondTitleAndPrice}><h2 className={s.titleSecond}>{brand} <span className={s.customModel}>{`${model},`}</span> {year}</h2> <p className={s.titleSecond}>{`$${rentalPrice}`}</p></div>
          <p className={s.textCard}>{`${city} | ${country} | ${rentalCompany} | `}</p>
          <p className={s.textCard}>{`${type} | ${mileageUI}`}</p>
          <button onClick={() =>   navigate(`/catalog/${id}`)}>Read more</button>
      </div>
  )
}

export default CarCard