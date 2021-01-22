const initialState = {
    isLoading:false,
    data:{},
    errmsg:''
}

const CartoonMultipleReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'CARTOON_MULTIPLE_LOADING':
            return{
                ...state,
                isLoading:true
            }
        case 'CARTOON_MULTIPLE_SUCCESS':
                return{
                    ...state,
                    isLoading:false,
                    data:{
                        ...state.data,
                        [action.cartoonName]:action.payload
                    },
                    errmsg:'',
                   
                }
        case 'CARTOON_MULTIPLE_FAIL':
            return{
                ...state,
                isLoading:false,
                data:{},
                errormsg:'unable to get !!'
            }
        default:return state
    }
}

export default CartoonMultipleReducer