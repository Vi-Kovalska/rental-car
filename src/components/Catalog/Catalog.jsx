import React, { useEffect } from 'react'
import s from './Catalog.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectCars, selectHasMore, selectLoading, selectError } from '../../redux/cars/selectors';
import CarCard from '../CarCard/CarCard';
import { selectFilters, selectPage } from '../../redux/filters/selectors';
import { getCars } from '../../redux/cars/operations';
import { incrementPage } from '../../redux/filters/slice';
import Loader from '../Loader/Loader';


const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const filters = useSelector(selectFilters);
  const page = useSelector(selectPage);
  const hasMore = useSelector(selectHasMore);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError)

  useEffect(() => {
    dispatch(getCars({ page: 1, limit: 8, filters, append: false }));
  }, [dispatch, page, filters]);

  const handleLoadMore = () => {
    dispatch(incrementPage());
    dispatch(getCars({ page, limit: 8, filters, append: false }));

  };
    return (
        <div className={s.wrapperFilter}>
        <ul className={s.cardList}>
          {cars.length <= 0 && !error && <h1>There are no matches for your request. Try again!</h1>}
          {cars.map((item) => <li key={item.id} className={s.cardItem}><CarCard {...item} /></li>)}
            </ul>
            {hasMore && !isLoading && !error && (
          <button className={s.btnLoadMore} onClick={handleLoadMore} disabled={isLoading}>Load more</button>
        )}
        {isLoading && <Loader />}
        
        {error && <h1>{ `Sorry! ${error}. Try again later.`}</h1>}
            </div>
  )
}

export default Catalog