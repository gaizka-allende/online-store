import React from 'react';

import CartItem from './CartItem';

export default function Cart({
  items,
  total,
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
      <div className="total">
        <div className="label">Total</div>
        <div className="value">£{parseFloat(total).toFixed(2)}</div>
      </div>
      <style jsx>
        {`
          .cart {
            height: 227px;
            width: 272px;
            background-color: #FFFFFF;
            padding: 24px;
          }
          @media only screen and (max-width: 1200px) {
            .cart {
              width: initial;
            }
          }
          .cartItems {
            display: grid;
            grid-template-rows: repeat(${cartItems.length}, 25px);
            border-bottom: 1px solid black;
          }
          .total {
            padding-top: 24px;
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 12px;
            line-height: 14px;
            color: #000000;
          }
          .label {
            display: inline-block;
          }
          .value {
            display: inline-block;
            float: right;
          }
        `}
      </style>
    </div>
  );
}
