import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetCartoon } from '../actions/GetCartoonList'
import _ from 'lodash'
import { Link } from 'react-router-dom'


const Cartoon = ({match}) => {

    const cartoonName = match.params.cartoon
    const dispatch = useDispatch()
    const cartoonState = useSelector(state=>state.Cartoon)

    console.log('pokemon:',cartoonName)

    useEffect(()=>{
        dispatch(GetCartoon(cartoonName))
    },[])

    const showData = ()=>{
        if(!_.isEmpty(cartoonState.data[cartoonName])){
            let cartoonData = cartoonState.data[cartoonName]
            return (
                <>

            <div className='list-wrapper'>
                <h1 style = {{color:'green',fontSize:'50px',fontWeight:'bold'}}>{cartoonName.toUpperCase()}</h1>
                <h1>Sprites</h1>
                <img src = {cartoonData.sprites.front_default} />
                <img src = {cartoonData.sprites.back_default} />
                <img src = {cartoonData.sprites.front_shiny} />
                <img src = {cartoonData.sprites.back_shiny} />
            </div>
            <div className='list-wrapper'>
            <h1>Stats</h1>
            {cartoonData.stats.map(el=>{
                return <p>{el.stat.name} {el.base_stat}</p>
            })}
            </div>
            <div className='list-wrapper'>
            <h1>Abilities</h1>
            {cartoonData.abilities.map(el=>{
                return <p>{el.ability.name}</p>
            })}
            </div>
            </>
            )
        }
        if(cartoonState.isLoading){
            return <p>Loading...</p>
        }
        if(cartoonState.errmsg !==''){
            return <p>{cartoonState.errmsg}</p>
        }

        return <p>unable to get</p>
    }

    return (
        <div>
          {showData()}
        </div>
    )
}

export default Cartoon
