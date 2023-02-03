import React from 'react'
import '../style/navbar.css'

const NavBar = ({setShow,size}) => {
  return (
    <nav>
        <div className="nav_box">
            <span className="my_shop"  onClick={()=>setShow(true)}>
                My Shopping
            </span>
            <div className="cart" >
                <span>
                    <i className="fas fa-cart-plus" onClick={()=>setShow(false)}></i>
                    <span>{size}</span>
                </span>
               
            </div>
        </div>
    </nav>
  )
}

export default NavBar