import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react';
import './App.css'
import Layout from './components/Layout/Layout'
const CarDetailsPage = lazy(() => import ('./pages/CarDetailsPage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
import HomePage from './pages/HomePage';
import { Toaster } from 'react-hot-toast';
import Loader from './components/Loader/Loader';
import { useDispatch } from 'react-redux';
import { getCars } from './redux/cars/operations';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();
    dispatch(getCars({ signal: abortController.signal }));
                               return () => { abortController.abort() }
  }, [dispatch]);
  return (
    <>
      <Toaster position='top-right' reverseOrder={false} />
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage/>} />
          <Route path='/catalog' element={<CatalogPage/>} />
            <Route path='/catalog/:id' element={<CarDetailsPage />} />
            <Route path='*' element={<NotFoundPage/>} />
        </Route>
        </Routes>
        </Suspense>
    </>
  )
}

export default App
