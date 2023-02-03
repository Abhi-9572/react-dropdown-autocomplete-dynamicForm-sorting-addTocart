import React, { useEffect, useState } from 'react'

const Cart = ({setCart, cart ,handleChange}) => {
    const [price, setPrice] = useState(0);

    const handleprice = () => {
        let ans = 0;
        cart.map((item) => (
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }

    useEffect(() => {
        handleprice();
    })

    const handleRemove = (id) => {
        const arr = cart.filter((item) => {
            return item.id !== id
        })
setCart(arr)
        
    }

    return (
        <div>
            {
                cart.map((item) => {
                    return (
                        <div className="cart_img">
                            <img src={item.img} />
                            <p>{item.title}</p>
                            <p>{item.price}Rs</p>
                            <div>
                                <button onClick={()=>handleChange(item.amount,1)}>+</button>
                                <span>{item.amount}</span>
                                <button onClick={()=>handleChange(item.amount,-1)}>-</button>
                            </div>
                            <div>
                                <span>{item.price}</span>
                                <button onClick={() => handleRemove(item.id)}>Remove</button>
                            </div>
                        </div>


                    )
                })
            }
            <div>Total Price:{price}</div>
        </div>
    )
}

export default Cart