import React, { useEffect, useState } from 'react'
import s from './Catalog.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectCars, selectHasMore, selectLoading, selectError } from '../../redux/cars/selectors';
import CarCard from '../CarCard/CarCard';
import { selectFilters} from '../../redux/filters/selectors';
import { getCars } from '../../redux/cars/operations';
import Loader from '../Loader/Loader';


const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const filters = useSelector(selectFilters);
  const hasMore = useSelector(selectHasMore);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError)
  const [page, setPage] = useState(1);
  useEffect(() => {
    setPage(1);
    dispatch(getCars({ page: 1, limit: 8, filters, append: false }));
  }, [dispatch, filters]);

  useEffect(() => {
    if (page === 1) return; 
    dispatch(getCars({ page, limit: 8, filters, append: true }));
  }, [page, dispatch, filters]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };
    return (
        <div className={s.wrapperFilter}>
        <ul className={s.cardList}>
          {cars.length <= 0 && !error && <div><h1>There are no matches for your request. Try again!</h1></div>}
          {cars.map((item) => <li key={item.id} className={s.cardItem}><CarCard {...item} /></li>)}
            </ul>
            {hasMore && !isLoading && !error && cars.length >= 8 && (
          <button className={s.btnLoadMore} onClick={handleLoadMore} disabled={isLoading}>Load more</button>
        )}
        {isLoading && <Loader />}
        
        {error && <h1>{ `Sorry! ${error}. Try again later.`}</h1>}
            </div>
  )
}

export default Catalog