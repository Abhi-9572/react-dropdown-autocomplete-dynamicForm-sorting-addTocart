import React, { useState } from 'react'
import list from '../data.js'
import Card from './Card.js'

const Amazon = ({addToCart}) => {
   
  return (
    
    list.map((val,index)=>
    {
        return <Card val={val} addToCart={addToCart}/>
    })
    
  )
}

export default Amazon