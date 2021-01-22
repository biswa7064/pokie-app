const initialState = {
    isLoading:false,
    data:[],
    errmsg:'',
    count:0
}

const CartoonListReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'CARTOON_LIST_LOADING':
            return{
                ...state,
                isLoading:true
            }
        case 'CARTOON_LIST_SUCCESS':
                return{
                    ...state,
                    isLoading:false,
                    data:action.payload.results,
                    errmsg:'',
                    count:action.payload.count
                }
        case 'CARTOON_LIST_FAIL':
            return{
                ...state,
                isLoading:false,
                data:[],
                errormsg:'unable to get !!'
            }
        default:return state
    }
}

export default CartoonListReducer