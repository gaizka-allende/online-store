import React from 'react';

export default function CartItem({
  name,
  quantity,
}) {
  return (
    <div className="container">
      <div className="name">{name}</div>
      <div className="quantity">{quantity}</div>
      <style jsx>
        {`
          .container {
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 19px;
          }
          .name {
            display: inline-block;
          }
          .quantity {
            display: inline-block;
            float: right;
          }
        `}
      </style>
    </div>
  );
}
