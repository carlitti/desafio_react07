// Pages/Cart.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext"; 
import "./Cart.css";

const Cart = () => {
  const { cartItems, addToCart, decreaseQuantity, calculateTotal } = useContext(CartContext);
  const { token } = useContext(UserContext); 
  return (
    <div className="container">
      <h2>Tu Carrito</h2>
      {cartItems.length === 0 ? (
        <p>No hay pizzas en el carrito</p>
      ) : (
        <div className="cart-container">
          <ul>
            {cartItems.map((pizza) => (
              <li key={pizza.id} className="cart-item">
                <img src={pizza.img} alt={pizza.name} className="cart-item-img" />
                <div className="cart-item-info">
                  <span className="cart-item-name">
                    {pizza.name} (x{pizza.quantity})
                  </span>
                  <span className="cart-item-price">
                    {pizza.price * pizza.quantity} CLP
                  </span>
                  <div className="cart-item-controls">
                    <button className="quantity-control" onClick={() => decreaseQuantity(pizza.id)}>
                      -
                    </button>
                    <button className="quantity-control" onClick={() => addToCart(pizza)}>
                      +
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: {calculateTotal()} CLP</h3>
          <button className="checkout-button" disabled={!token}>Pagar</button> 
        </div>
      )}
    </div>
  );
};

export default Cart;


