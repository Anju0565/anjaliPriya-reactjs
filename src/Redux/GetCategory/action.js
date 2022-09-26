import axios from "axios";
import * as types from "./actionTypes";

export const getCategoryRequest = (payload)=>{
    return{
        type: types.GET_CATEGORY_REQUEST,
        payload
    }
}

export const getCategorySuccess = (payload)=>{
    return{
        type: types.GET_CATEGORY_SUCCESS,
        payload
    }
}

export const getCategoryFailure = (payload)=>{
    return{
        type: types.GET_CATEGORY_FAILURE,
        payload
    }
}

export const getCategory = ()=>{
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuamFsaXByaXlhMDU2NUBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vQW5qdTA1NjUiLCJpYXQiOjE2NjM5OTQ3NTMsImV4cCI6MTY2NDQyNjc1M30.g2WLqTdeDzPTJe-IzzwWUgPSatXHLZj6ilsRMn1J50c`;
    return(dispatch)=>{
        dispatch(getCategoryRequest())
        axios.get("/categories" , 
        { headers: {"Authorization" : `Bearer ${token}`}
        })
    .then(r=>dispatch(getCategorySuccess(r.data)))
    .catch(err=>dispatch(getCategoryFailure(err.data)))
    }
}
