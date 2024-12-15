import React from "react";
import style from "./product.module.css"
const Cart = ({ cartItems }) => {
  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>No products in the cart.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div id={style.cart}key={index}>
              <img id={style.cartImage} src={item.image} alt={item.name}></img>
              <h2> {item.title}</h2>  
              <p>${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
