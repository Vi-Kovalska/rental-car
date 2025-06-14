import React from 'react'
import FilterForm from '../components/FilterForm/FilterForm'
import Catalog from '../components/Catalog/Catalog'

const CatalogPage = () => {
  return (
    <div className='container'>
      <FilterForm />
      <Catalog/>
    </div>
  )
}

export default CatalogPage