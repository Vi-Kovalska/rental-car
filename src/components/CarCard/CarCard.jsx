import React from 'react'
import s from './CarCard.module.css'
const CarCard = ({ id, img, description,  brand, model, year, rentalPrice, address, rentalCompany, type, mileage}) => {
    const arrayAdress = address.split(',');
    const city = arrayAdress[1];
    const country = arrayAdress[2];

    const arrayNumbers = String(mileage).split('');
    const firstNum = arrayNumbers.shift();
    const mileageUI = `${firstNum} ${otherNums.join('')} km`;

  return (
      <div className={s.wrapperCard}>
          <div className={s.wrapperImg}>
              <img src={img} alt={description} />
              <button className={s.btnFavorite}><svg className={s.iconFavorite} width='16' height='16'><use href='/icons.svg#favorite'/></svg></button>
          </div>
          <div className={s.wrapperSecondTitleAndPrice}><h2 className={s.titleSecond}>{brand} <span className={s.customModel}>{`${model},`}</span> {year}</h2> <p className={s.titleSecond}>{`$${rentalPrice}`}</p></div>
          <p className={s.textCard}>{`${city} | ${country} | ${rentalCompany} | `}</p>
          <p className={s.textCard}>{`${type} | ${mileageUI}`}</p>
          <button>Read more</button>
      </div>
  )
}

export default CarCard