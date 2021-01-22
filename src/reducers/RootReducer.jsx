import {combineReducers} from 'redux'
import CartoonListReducer from './CartoonListReducer'
import CartoonMultipleReducer from './CartoonMultipleReducer'


const RootReducer = combineReducers({
    CartoonList:CartoonListReducer,
    Cartoon:CartoonMultipleReducer
})

export default RootReducer

