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
          Object.entries(items).map(
            (item) => (
              <div className="listItem" key={item[0]}>
                <ListItem
                  pid={item[0]}
                  pname={item[1].name}
                  price={item[1].price}
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
