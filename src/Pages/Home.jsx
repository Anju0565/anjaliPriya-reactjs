import React from 'react'
import Filter from '../Components/Filter'
import ProductList from '../Components/ProductList'

const Home = () => {
  return (
    <div class='flex justify-space'>
      <Filter />
      <ProductList />
      
    </div>
  )
}

export default Home