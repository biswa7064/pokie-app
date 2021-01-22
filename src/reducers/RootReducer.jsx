import {combineReducers} from 'redux'
import CartoonListReducer from './CartoonListReducer'



const RootReducer = combineReducers({
    CartoonList:CartoonListReducer
})

export default RootReducer

