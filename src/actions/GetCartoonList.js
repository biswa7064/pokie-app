import axios from 'axios'


export const GetCartoonList = (page)=>async dispatch=>{
    try{
        dispatch({
            type:'CARTOON_LIST_LOADING'
        })

        const perpage = 15
        const offSet = (page*perpage)-perpage

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit = ${perpage} & offset=${offSet}`)

        dispatch({
            type:'CARTOON_LIST_SUCCESS',
            payload:res.data
        })
    }catch(e){
        dispatch({
            type:'CARTOON_LIST_FAIL'
        })
    }
}

export const GetCartoon = (cartoon)=>async dispatch=>{
    try{
        dispatch({
            type:'CARTOON_MULTIPLE_LOADING'
        })     

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${cartoon}`)

        dispatch({
            type:'CARTOON_MULTIPLE_SUCCESS',
            payload:res.data,
            cartoonName:cartoon
        })
    }catch(e){
        dispatch({
            type:'CARTOON_MULTIPLE_FAIL'
        })
    }
}