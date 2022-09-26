import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../Redux/GetCategory/action'
import { getProduct } from '../Redux/GetProducts/action'
const Filter = () => {
    const categories = useSelector((state)=>state.categories.categories);
    const dispatch = useDispatch();
    const [searchParamas, setSearchParams] = useSearchParams()
    const urlCategory = searchParamas.getAll('category');
    const [categoryValues,setCategoryValues] = useState(urlCategory || [])
    useEffect(() => {
        if(categories?.length===0){
        dispatch(getCategory())
        }
    }, [dispatch,categories?.length])
    const categoryHandler = (e) =>{
        const option = e.target.value;
        let newCategory = [...categoryValues];
        if(categoryValues.includes(option)){
            newCategory.splice(newCategory.indexOf(option),1)
        }
        else{
            newCategory.push(option);
        }
        setCategoryValues(newCategory);
    }
    useEffect(()=>{
        if(categoryValues){
            setSearchParams({categoryValues});
            dispatch(getProduct({params:{categoryValues}}))
            
        }
    },[categoryValues,dispatch,setSearchParams])
    console.log(categoryValues)
    return (
    <div class='w-[16%] text-left h-[500px]' style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
        <div class='ml-4 text-xl mt-8'>Filter By Category</div>
        <div class='text-left ml-7 mt-4'>
            {categories?.categories?.map((e)=>(
                <div key={e._id} >
                   <input class='mt-4 h-[15px] w-[22px]' type={"checkbox"} name={"category"} value={e.name} onChange={categoryHandler}  />
                   <label class='ml-3 text-xl'>{e.name}</label>
                </div>
            ))}
            
        </div>
        <div>
        </div>
    </div>
  )
}

export default Filter