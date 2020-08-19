import React from 'react';

import ListItem from './ListItem';

export default function List({
  items,
  onAdd,
}) {
  return (
    <div className="container">
      <div className="header">List of products</div>
      <div className="list">
        {
          items.map(
            ({pid, pname, price}, index) => (
              <div className="listItem" key={index}>
                <ListItem
                  pid={pid}
                  pname={pname}
                  price={price}
                  onAdd={onAdd}
                />
              </div>
            )
          )
        }
      </div>
      <style jsx>
        {`
          .container {
            background-color: lime;
          }
          .list {
            display: grid;
            grid-template-rows: repeat(${items.length}, 1fr);
          }
        `}
      </style>
    </div>
  );
}
