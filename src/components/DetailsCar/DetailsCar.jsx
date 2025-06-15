import React, { useEffect } from 'react'
import s from './DetailsCar.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectCarById } from '../../redux/cars/selectors';
import { getCarById } from '../../redux/cars/operations';
import { cityConverting, countryConverting, mileageUIConverting } from '../../utilits/convertingCarsValues';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';
import BookingForm from '../BookingForm/BookingForm';



const DetailsCar = () => {
    const idByCar = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        if (idByCar) {
          dispatch(getCarById(idByCar));
        }
      }, [dispatch, idByCar]);
    const car = useSelector(selectCarById);
    if (!car || !car.id) {
        return <Loader/>
      }
    
    const { img, brand, model, year, id, address, mileage, rentalPrice, description, rentalConditions, type, fuelConsumption, engineSize, accessories} = car;
      const city = cityConverting(address);
        const country = countryConverting(address);
        const mileageUI = mileageUIConverting(mileage);
    return (
        <div className={s.wrapperDet}>
            <div>
            <div className={s.imgCar}><img src={img} alt={description} /></div>

                      <BookingForm />
            </div>
            <div className={s.detailsContainer}>
          <h1 className={s.mainTitle}>{brand} {model}, {year} <span className={s.idSpan}>id: {id}</span></h1>
          <p className={`${s.paragraph} ${s.locationMileageWrapper}`}><span className={s.adressWrapper}><svg width='16' height='16'><use href='/icons.svg#location' /></svg>{`${city}, ${country}`}</span><span> Mileage:{mileageUI}</span></p>
          <p className={s.price}>${rentalPrice}</p>
          <p className={s.description}>{description}</p>
          <h2 className={s.secondTitle}>Rental Conditions:</h2>
          <ul className={s.conditionsList}>
            <li className={s.conditionItem}>
                <svg width='16' height='16'>
                    <use href='/icons.svg#check-circle'/>
                </svg> Minimum age: {rentalConditions[0].split(",").pop()}
            </li>
            <li className={s.conditionItem}>
                <svg width='16' height='16'>
                    <use href='/icons.svg#check-circle'/>
                </svg> {rentalConditions[1]}
              </li>
              <li className={s.conditionItem}>
                <svg width='16' height='16'>
                    <use href='/icons.svg#check-circle'/>
                </svg> {rentalConditions[2]}
            </li>
          </ul>
          <h2 className={s.secondTitle}>Car Specifications:</h2>
          <ul className={s.conditionsList}>
            <li className={s.conditionItem}>
                <svg width='16' height='16'>
                    <use href='/icons.svg#calendar'/>
                </svg> Year: {year}
            </li>
            <li className={s.conditionItem}>
                <svg width='16' height='16'>
                    <use href='/icons.svg#car'/>
                </svg> Type: {type}
              </li>
              <li className={s.conditionItem}>
                <svg width='16' height='16'>
                    <use href='/icons.svg#fuel-pump'/>
                </svg> Fuel Consumption: {fuelConsumption}
              </li>
              <li className={s.conditionItem}>
                <svg width='16' height='16'>
                    <use href='/icons.svg#gear'/>
                </svg> Engine Size: {engineSize}
            </li>
          </ul>
          <h2 className={s.secondTitle}>Accessories and functionalities:</h2>
          <ul className={s.conditionsList}>
                  {accessories.map((item) => <li key={crypto.randomUUID()} className={s.conditionItem}><svg width='16' height='16'>
                    <use href='/icons.svg#check-circle'/>
                </svg> {item}</li>)};
          </ul>
    </div>
      </div>
      
        
     
  )
}

export default DetailsCar