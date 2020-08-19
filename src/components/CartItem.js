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
          }
        `}
      </style>
    </div>
  );
}
