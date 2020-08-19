import React from 'react';

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
             cartItem => (
              <div className="cartItem">
                List item
              </div>
            )
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
