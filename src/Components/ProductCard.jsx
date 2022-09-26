import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const ProductCard = ({id,name,avatar,price,removeProduct}) => {
  return (
    <div key={id}  class=' h-[440px] w-[300px] mt-12 ml-7' style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
        <div class='flex gap-2 justify-center'>
        <Link to={`./product/${id}`}>
          <img src={avatar} alt={"ProductImage"} class='h-[240px] w-[200px] mt-9 cursor-pointer'/>
          </Link>
          <AiOutlineHeart onClick={()=>{
          }} class='mt-6 h-[25px] w-[25px]' />
        </div>
        <div class='text-left ml-8'>
            <div class='mt-4 text-lg font-light'>{name}</div>
            <div class='inline bg-black'>
            <img src='https://upayments.com/en/wp-content/uploads/sites/4/2020/07/upay-logo-1.png' alt='company-logo' class=' h-[25px] w-[150px] mt-3 mb-3 bg-black'/>
            </div>
            <div class='font-bold text-xl'>₹{price}</div>
            <button onClick={()=>removeProduct(id)}>Remove Product</button>
        </div>
        
    </div>
  )
}

export default ProductCard