import React from 'react';

export default function ListItem({
  pid,
  pname,
  price,
  onAdd,
}) {
  return (
    <>
      <div className="container">
        <div className="name">{pname}</div>
        <div className="id">{pid}</div>
        <div className="price">{price}</div>
        <div
          className="onAdd"
          onClick={() => onAdd(pid)}
        >Add to cart</div>
      </div>
      <style jsx>
        {`
          .container {
            border-bottom: 1px solid black;
          }
        `}
      </style>
    </>
  );
}
