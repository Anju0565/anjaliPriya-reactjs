import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Favorites from '../Pages/Favorites'
import Home from '../Pages/Home'
import NewProduct from '../Pages/NewProduct'
import SinglePage from '../Pages/SinglePage'


const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />}></Route>
        <Route path='/product/:id' element={<SinglePage />}></Route>
        <Route path='/new-product' element={<NewProduct />}></Route>
        <Route path='*' element={<div>Not found</div>}></Route>
    </Routes>
  )
}

export default MainRoutes