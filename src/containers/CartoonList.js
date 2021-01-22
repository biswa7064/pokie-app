import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash';
import { GetCartoonList } from '../actions/GetCartoonList';
import { Link } from 'react-router-dom';


const CartoonList = () => {
    const dispatch = useDispatch()
    const cartoonList = useSelector(state=>state.CartoonList)

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData =(page=1)=>{
        dispatch(GetCartoonList(page))
    }

    const showData = ()=>{
        if(!_.isEmpty(cartoonList.data)){
            return cartoonList.data.map((el)=>{
                return <>
                <p>{el.name}</p>
                <Link to={`/cartoon/${el.name}`}>View</Link>
                </>
            })
        }
        if(cartoonList.isLoading){
            return <p>Loading...</p>
        }
        if(cartoonList.errmsg !==''){
            return <p>{cartoonList.errmsg}</p>
        }

        return <p>unable to get</p>
    }
    return (
        <div>
            {showData()}
        </div>
    )
}

export default CartoonList
