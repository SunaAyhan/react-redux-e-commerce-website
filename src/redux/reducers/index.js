import {combineReducers} from "redux"
import changeCategoryReducer from "./changeCategoryReducer"
import categoryListReducer from "./categoryListReducer"
import productListReducer from "./productListReducer"
import cartReducer from "./cartReducer"
import savedProductReducer from "./saveProductReducers"

const rootReducer = combineReducers({
 changeCategoryReducer,
 categoryListReducer,
 productListReducer,
 cartReducer,
 savedProductReducer
})


export default rootReducer;