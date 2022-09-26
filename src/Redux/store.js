import{legacy_createStore as createStore,combineReducers,applyMiddleware,compose} from "redux"
import thunk from "redux-thunk";
import {reducer as GetProduct} from "../Redux/GetProducts/reducer"
import { reducer as GetCategory } from "../Redux/GetCategory/reducer"
const rootreducer = combineReducers({
    products: GetProduct,
    categories: GetCategory
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose
export const store=createStore(
    rootreducer,
    composeEnhancer(applyMiddleware(thunk))
);