import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

const SinglePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const [prod,setProd] = useState("")
  
  useEffect(()=>{
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuamFsaXByaXlhMDU2NUBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vQW5qdTA1NjUiLCJpYXQiOjE2NjM5OTQ3NTMsImV4cCI6MTY2NDQyNjc1M30.g2WLqTdeDzPTJe-IzzwWUgPSatXHLZj6ilsRMn1J50c`;
    axios.get(`products/${id}` , 
      { headers: {"Authorization" : `Bearer ${token}`}
      })
  .then((r)=>setProd(r.data))
  .catch(err=>console.log(err.data))      
  },[id,dispatch])
  console.log(prod);
  return (
   <div class='flex justify-evenly'>
    <div class='h-[440px] w-[25%] mt-6' style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
      <img src={prod?.product?.avatar} alt={"productImage"} class='h-[300px] m-auto mt-14' />
    </div>
    
    <div class='mt-14 w-[60%] text-left ml-12 text-lg'>
      <p class='text-slate-500'>{prod?.product?.category}</p>
      <p class='text-4xl font-bold mt-2'>{prod?.product?.name}</p>
      <p class='mt-2 text-slate-500'>{prod?.product?.description}</p>
      <p class='mt-2 text-green-500'>Special Price</p>
      <p class='text-xl font-bold mt-1'>₹{prod?.product?.price}</p>
    </div>
   </div>

  )
}

export default SinglePage