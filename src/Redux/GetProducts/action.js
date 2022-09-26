import axios from "axios";
import * as types from "./actionTypes";


export const getProductRequest = (payload)=>{
    return{
        type: types.GET_PRODUCT_REQUEST,
        payload
    }
}

export const getProductSuccess = (payload)=>{
    return{
        type: types.GET_PRODUCT_SUCCESS,
        payload
    }
}

export const getProductFailure = (payload)=>{
    return{
        type: types.GET_PRODUCT_REQUEST,
        payload
    }
}

export const addProductRequest = (payload)=>{
    return{
        type: types.GET_PRODUCT_REQUEST,
        payload
    }
}

export const addProductSuccess = (payload)=>{
    return{
        type: types.GET_PRODUCT_SUCCESS,
        payload
    }
}

export const addProductFailure = (payload)=>{
    return{
        type: types.GET_PRODUCT_REQUEST,
        payload
    }
}

export const deleteProductRequest = (payload)=>{
    return{
        type: types.DELETE_PRODUCT_REQUEST,
        payload
    }
}

export const deleteProductSuccess = (payload)=>{
    return{
        type: types.DELETE_PRODUCT_SUCCESS,
        payload
    }
}

export const deleteProductFailure = (payload)=>{
    return{
        type: types.DELETE_PRODUCT_REQUEST,
        payload
    }
}
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuamFsaXByaXlhMDU2NUBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vQW5qdTA1NjUiLCJpYXQiOjE2NjM5OTQ3NTMsImV4cCI6MTY2NDQyNjc1M30.g2WLqTdeDzPTJe-IzzwWUgPSatXHLZj6ilsRMn1J50c`;

const config = {
    headers: { Authorization: `Bearer ${token}` }
};

export const getProduct = (payload)=>{
    
    return(dispatch)=>{
        dispatch(getProductRequest())
        axios.get("/products" , config,{
            params:{
                ...payload
            }
    })
    .then(r=>dispatch(getProductSuccess(r.data)))
    .catch(err=>dispatch(getProductFailure(err.data)))
    }
}
export const deleteProducts=(id)=>dispatch=>{
    dispatch(deleteProductRequest())
    axios.delete(`/products/${id}`, 
    { headers: {"Authorization" : `Bearer ${token}`} },)
    .then((r)=>{dispatch(deleteProductSuccess(r.data))})
    .catch((e)=>dispatch(deleteProductFailure(e.data)))
}
