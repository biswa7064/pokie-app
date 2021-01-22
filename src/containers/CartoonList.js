import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash';
import { GetCartoonList } from '../actions/GetCartoonList';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';


const CartoonList = ({history}) => {

    const [search,setSearch] = useState('')
    const dispatch = useDispatch()
    const cartoonList = useSelector(state=>state.CartoonList)

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData =(page=1)=>{
        dispatch(GetCartoonList(page))
    }

    const showData = ()=>{
        if(cartoonList.isLoading){
            return <p>Loading...</p>
        }
        if(!_.isEmpty(cartoonList.data)){
            return <div className='list-wrapper'>
                {cartoonList.data.map((el)=>{
                return <div className='cartoon-wrapper'>
                <p>{el.name}</p>
                <Link to={`/cartoon/${el.name}`} style={{textDecoration:'none',fontWeight:'bold'}}>View</Link>
                </div>            
            })}
            </div>
        }
        
        if(cartoonList.errmsg !==''){
            return <p>{cartoonList.errmsg}</p>
        }

        return <p>unable to get</p>
    }
    return (
        <div>
            <div className='search-wrapper'>                
                <input type='text' onChange={ev=>setSearch(ev.target.value)}/>
                <button onClick={()=>history.push(`/cartoon/${search}`)}>Search</button>
            </div>
            {showData()}
           
        </div>
    )
}

export default CartoonList
