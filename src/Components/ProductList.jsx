import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useSearchParams } from 'react-router-dom';
import { deleteProducts, getProduct } from '../Redux/GetProducts/action';
import ProductCard from './ProductCard';

const ProductList = () => {
    const products = useSelector((state)=>state.products.products);
    const dispatch = useDispatch();
    const removeProduct = (id) =>{
      console.log(id);
      dispatch(deleteProducts(id))
    }
  
    const [searchParams] = useSearchParams()
    const location = useLocation()
    useEffect(() => {
        if(products?.length===0||location.search){
          let getTodoParams = {
            params:{
              category: searchParams.getAll("category")
            }
        }
        dispatch(getProduct(getTodoParams))
        }
    }, [dispatch,products?.length,location.search,searchParams])
  // console.log(products);
  return (
    <div>
        <div class='grid grid-cols-3 gap-6'>
        {products?.products?.map((e)=>(
            <ProductCard key={e._id} id={e._id} name={e.name} avatar={e.avatar} price={e.price} removeProduct={removeProduct} />
        ))}
      </div>
    </div>
  )
}

export default ProductList