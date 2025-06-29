import React from 'react'
import FilterForm from '../components/FilterForm/FilterForm'
import Catalog from '../components/Catalog/Catalog'

const CatalogPage = () => {
  return (
    <main className='container'>
      <h1 className='titleCatalogPage'>Find your perfect rental car</h1>
      <FilterForm />
      <Catalog/>
    </main>
  )
}

export default CatalogPage