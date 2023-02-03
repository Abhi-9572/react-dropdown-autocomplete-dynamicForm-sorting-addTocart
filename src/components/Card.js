import React from 'react'

const Card = ({val,addToCart}) => {
    const{img,title,author,price}=val;
  return (
    <div>
        <div className="cards">
        <div className="image_box">
            <img src={img} alt="Image" />
        </div>
        <div className="details">
            <p>{title}</p>
            <p>{author}</p>
            <p>Price - {price}Rs</p>
            <button  onClick={()=>addToCart(val)}>Add to Cart</button>
        </div>
    </div>
    </div>
  )
}

export default Card