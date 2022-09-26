import * as types from "./actionTypes";


const initialState = {
  categories: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState,{type,payload}) => {
  switch(type){
    case types.GET_CATEGORY_REQUEST:
    return{
      ...state,
      isLoading:true,
      isError:false
    }
    case types.GET_CATEGORY_SUCCESS:
      return{
        ...state,
        categories: payload,
        isLoading: false,
        isError: false
      }
    case types.GET_CATEGORY_FAILURE:
      return{
          ...state,
          isLoading: false,
          isError: true
      }
      default: return state
  }
};