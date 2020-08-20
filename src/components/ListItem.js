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
        <div className="price">£{parseFloat(price).toFixed(2)}</div>
        <div
          className="add"
          onClick={() => onAdd(pid)}
        >Add to cart</div>
      </div>
      <style jsx>
        {`
          .container {

          }
          .name {
            display: inline-block;
            line-height: 21px;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
          }
          .id {
            display: inline-block;
            background: rgba(196, 196, 196, 0.17);
            border-radius: 4px;
            margin-left: 16px;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 10px;
            line-height: 12px;
            color: #000000;
            padding: 4px 16px;
          }
          .price {
            float: right;
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            line-height: 21px;
            color: #000000;
          }
          .add {
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 14px;
            color: #009CF5;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
}
