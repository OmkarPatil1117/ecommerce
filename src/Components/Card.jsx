import React, { useContext, useState } from 'react'
import { MainArr } from '../App'
import "./Card.css"

const Card = (props) => {
    const [pro, setpro ] = useState(props.value)
    const contextObj = useContext(MainArr)
    const [data, setData ] = useState(contextObj)
    console.log(pro);
  return (
    <>
    <div className='flex'>
     {pro && data.map( (item, index)=> {
        if( item.catagory === pro) {
            console.log(index);
        return ( 
        <div className='card' key={item.id}>
            <img src={item.image} alt="img" className='cardimg' />
            <span>{item.name}</span> <br />
            <img src={item.ratting} className='cardRating' alt="" /> <br />
            <span>${item.price}</span> <span className='lineThrough'>{item.oPrice}</span>
        </div> 
        )
        }
    })}
      </div>
    </>
  )
}

export default Card