import { Form, Formik, Field, ErrorMessage } from 'formik';
import React, { useEffect, useId } from 'react'
import *as Yup from 'yup'
import s from './FilterForm.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectBrands, selectCars } from '../../redux/cars/selectors';
import { getBrands } from '../../redux/cars/operations';

const FilterForm = () => {
  const brandFieldId = useId();
  const priceFieldId = useId();
  const mileageFromFieldId = useId();
  
  const brands = useSelector(selectBrands);
  const cars = useSelector(selectCars);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  const initialValues = {
    brand: '',
    price: '',
    mileageFrom: '',
    mileageTo: ''
  };
  const handleSubmit = () => { };
  const FeedbackSchema = Yup.object().shape({
  });
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
        <Form className={s.form}>
          <div className={s.fieldWrapper}>
            <div className={s.labelInputWrapper}>
        <label htmlFor={brandFieldId}>Car brand</label>
            <Field id={brandFieldId} as='select' name='brand' type='text' className={s.input}>
            <option value="" disabled>Choose a brand</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
          </Field>
              <ErrorMessage name='brand' component='p' className={s.error} />
            </div>
            <div className={s.labelInputWrapper}>
          <label htmlFor={priceFieldId}>Price/ 1 hour</label>
            <Field id={priceFieldId} as='select' name='price' type='text' className={s.input}>
            <option value="" disabled>Choose a price</option>
            {cars.map((car) => (
              <option key={car.id} value={car.rentalPrice}>{car.rentalPrice}</option>
            ))}
          </Field>
              <ErrorMessage name='price' component='p' className={s.error} />
            </div>
            <div className={s.labelInputWrapper}>
            <label htmlFor={mileageFromFieldId}>Car mileage / km</label>
              <div className={s.mileageInputsContainer}>
                <div className={s.mileageLabelInputWrapper}>
              <span htmlFor={mileageFromFieldId} className={`${s.mileageLabelParent} ${s.customLabelFrom}`}>From</span>
            <Field id={mileageFromFieldId} name='mileageFrom' type='text' className={`${s.input} ${s.inputFrom}`}/>
                  <ErrorMessage name='mileageFrom' component='p' className={s.error} />
                  </div>
                <div className={s.mileageLabelInputWrapper}>
            <span htmlFor='mileageTo' className={`${s.mileageLabelParent} ${s.customLabelTo}`}>To</span>
            <Field id='mileageTo' name='mileageTo' type='text' className={`${s.input} ${s.inputTo}`}/>
                <ErrorMessage name='mileageTo' component='p' className={s.error} />
                </div>
              </div>
              </div>
          </div>
        <button type='submit' className={s.btnSub}>Search</button>
        </Form>
    </Formik>

    </>
  )
}

export default FilterForm