import * as types from "./actionTypes";


const initialState = {
  products: [],
  currentProduct:{},
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState,{type,payload}) => {
  switch(type){
    case types.GET_PRODUCT_REQUEST:
    return{
      ...state,
      isLoading:true,
      isError:false
    }
    case types.GET_PRODUCT_SUCCESS:
      return{
        ...state,
        products: payload,
        isLoading: false,
        isError: false
      }
    case types.GET_PRODUCT_FAILURE:
      return{
          ...state,
          isLoading: false,
          isError: true
      }
      case types.ADD_PRODUCT_REQUEST:
        return{
          ...state,
          isLoading:true,
          isError:false
        }
        case types.ADD_PRODUCT_SUCCESS:
          return{
            ...state,
            products: payload,
            isLoading: false,
            isError: false
          }
        case types.ADD_PRODUCT_FAILURE:
          return{
              ...state,
              isLoading: false,
              isError: true
          }
      default: return state
  }
};