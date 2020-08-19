import React from 'react';

import CartItem from './CartItem';

export default function Cart({
  items,
  onCheckout,
}) {
  const cartItems = Object.entries(items);
  return (
    <div className="cart">
      <div className="cartItems">
        {
          cartItems.map(
            (cartItem, index) => {
              const name = cartItem[1].name;
              const quantity = cartItem[1].quantity;
              return (
                <div className="cartItem" key={index}>
                  <CartItem name={name} quantity={quantity} />
                </div>
              );
            }
          )
        }
      </div>
      <div className="total">Total</div>
      <style jsx>
        {`
          .cart {
            background-color: orange;
          }
          .cartItems {
            display: grid;
            grid-template-rows: repeat(${cartItems.length}, 1fr);
          }
        `}
      </style>
    </div>
  );
}
