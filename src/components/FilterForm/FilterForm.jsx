import { Form, Formik, Field, ErrorMessage } from 'formik';
import React, { useEffect, useId} from 'react'
import *as Yup from 'yup'
import s from './FilterForm.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectBrands } from '../../redux/cars/selectors';
import { getBrands } from '../../redux/cars/operations';
import { setFilters} from '../../redux/filters/slice';
import CustomSelect from '../CustomSelect/CustomSelect';
import clsx from 'clsx';

const FilterForm = () => {
  const brandFieldId = useId();
  const priceFieldId = useId();
  const mileageFromFieldId = useId();

  const brands = useSelector(selectBrands);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  const initialValues = {
    brand: '',
    rentalPrice: '',
    minMileage: '',
    maxMileage: ''
  };

  const FeedbackSchema = Yup.object().shape({
    minMileage: Yup.number()
    .min(0, 'Must be 0 or more')
    .nullable(),
  maxMileage: Yup.number()
    .when('minMileage', (minMileage, schema) => 
      schema.min(minMileage || 0, 'To must be greater than From')
    )
    .nullable(),
  });


  const handleSubmit = (values, actions) => {
    dispatch(setFilters(values));
    actions.resetForm();
    
  };

 

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>

          <Form className={clsx(s.form, s.container)}>
            <div className={s.fieldWrapper}>
              <div className={s.labelInputWrapper}>
                <label htmlFor={brandFieldId}>Car brand</label>
                <CustomSelect
  name="brand"
  placeholder="Choose a brand"
  options={brands.map((b) => ({ label: b, value: b }))}
/>
                <ErrorMessage name="brand" component="p" className={s.error} />
              </div>

              <div className={s.labelInputWrapper}>
                <label htmlFor={priceFieldId}>Price/ 1 hour</label>
                <CustomSelect
  name="rentalPrice"
  placeholder="Choose a price"
  options={[30, 40, 50, 60, 70, 80].map(p => ({ label: `$${p}`, value: p }))}
/>
                <ErrorMessage name="rentalPrice" component="p" className={s.error} />
              </div>

              <div className={s.labelInputWrapper}>
                <label htmlFor={mileageFromFieldId}>Car mileage / km</label>
                <div className={s.mileageInputsContainer}>
                  <div className={s.mileageLabelInputWrapper}>
                    <span htmlFor={mileageFromFieldId} className={`${s.mileageLabelParent} ${s.customLabelFrom}`}>From</span>
                    <Field
                      id={mileageFromFieldId}
                      name="minMileage"
                      type="number"
                    className={`${s.input} ${s.inputFrom}`}
                
                    />
                    <ErrorMessage name="minMileage" component="p" className={s.error} />
                  </div>
                  <div className={s.mileageLabelInputWrapper}>
                    <span htmlFor="mileageTo" className={`${s.mileageLabelParent} ${s.customLabelTo}`}>To</span>
                    <Field
                      id="mileageTo"
                      name="maxMileage"
                      type="number"
                      className={`${s.input} ${s.inputTo}`}
                
                    />
                    <ErrorMessage name="maxMileage" component="p" className={s.error} />
                  </div>
                </div>
              </div>
            </div>

            <button type="submit" className={s.btnSub}>Search</button>
          </Form>
      </Formik>
    </>
  );
};

export default FilterForm;
