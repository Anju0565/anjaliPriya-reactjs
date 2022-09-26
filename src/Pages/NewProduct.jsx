import axios from 'axios'
import React, { useState } from 'react'

const NewProduct = () => {
  const [name,setName] = useState("")
  const [price,setPrice] = useState("")
  const [category,setcategory] = useState("")
  const [description,setDescription] = useState("")
  const [avatar,setAvatar] = useState("")
  const [developerEmail,setDeveloperEmail] = useState("")
  const date = new Date().toISOString()
  const addProduct = () =>{
    const data={
      avatar: avatar,
      category: category,
      createdAt: date,
      __v: 0,
      description: description,
      developerEmail: developerEmail,
      name: name,
      price:price,
    }
    if(avatar===""||category===""||description===""||developerEmail===""||name===""||price===""){
      alert("Please Fill All Details")
    }
    else{
      const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuamFsaXByaXlhMDU2NUBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vQW5qdTA1NjUiLCJpYXQiOjE2NjM5OTQ3NTMsImV4cCI6MTY2NDQyNjc1M30.g2WLqTdeDzPTJe-IzzwWUgPSatXHLZj6ilsRMn1J50c`;
      axios.post("/products",data, 
      { headers: {"Authorization" : `Bearer ${token}`} })
      alert("Added Successfully")
      window.location.href="/";
    }
    
  }
  
  console.log(date)
  return (
    <div class='ml-[35%] mt-6 text-lg'>
      <form class='text-left'>
        <p class='text-red-500 mb-6'>* All fields are mandatory</p>
        <label>Name: </label><br />
        <input class='h-[50px] w-[320px] mt-2 mb-6 border-[3px]' type={"text"} placeholder={"Name"} 
          onChange={(e)=>
            setName(e.target.value)
          }/><br />
        <label>Price: </label><br />
        <input class='h-[50px] w-[320px] mt-2 mb-6 border-[3px]' type={"number"} placeholder={"Price"} onChange={(e)=>
          setPrice(e.target.value)
        } /><br />
        <label>Select Category: </label><br />
        <select class='h-[50px] w-[320px] mt-2 mb-6 border-[3px]' onChange={(e)=>
          setcategory(e.target.value)
        }>
          <option value={"Clothing"}>Clothing</option>
          <option value={"Furniture"}>Furniture</option>
          <option value={"Electronics"}>Electronics</option>
          <option value={"Hobby"}>Hobby</option>
          <option value={"Accessories"}>Accessories</option>
        </select><br />
        <label>Add Description: </label><br />
        <input class='h-[50px] w-[320px] mt-2 mb-6 border-[3px]' type={"text"} placeholder={"Description"} onChange={(e)=>
          setDescription(e.target.value)
        } /><br />
        <label>Avatar Url: </label><br />
        <input class='h-[50px] w-[320px] mt-2 mb-6 border-[3px]' type={"url"} placeholder={"Avatar"}onChange={(e)=>
          setAvatar(e.target.value)
        } /><br />
        <label>Email Address: </label><br />
        <input class='h-[50px] w-[320px] mt-2 mb-6 border-[3px]' type={"email"} placeholder={"Developer Email"} onChange={(e)=>
          setDeveloperEmail(e.target.value)
        } /><br />
        <input onClick={addProduct} class='h-[30px] w-[120px] bg-blue-500 border-none rounded-[5px] mb-[6%]' type={"submit"} />
      </form>
    </div>
  )
}

export default NewProduct