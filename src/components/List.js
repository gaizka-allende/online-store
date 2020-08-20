import React from 'react';

import ListItem from './ListItem';

export default function List({
  items,
  onAdd,
}) {
  const listItems = Object.entries(items);
  return (
    <div className="container">
      <div className="header">List of products</div>
      <div className="list">
        {
          listItems.map(
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
            height: 680px;
            display: grid;
            grid-template-rows: 42px 461px;
            grid-row-gap: 45px;
          }
          .header {
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 36px;
            line-height: 42px;
          }
          .list {
            background-color: #FFFFFF;
            display: grid;
            grid-template-rows: repeat(${listItems.length}, 60px);
            height: 461px;
            width: 728px;
            padding: 56px 34px;
          }
          @media only screen and (max-width: 375px) {
            .list {
              width: initial;
            }
          }
          .listItem {
            border-bottom: 1px solid black;
            display: flex;
            justify-content: center;
            flex-direction: column;
          }
        `}
      </style>
    </div>
  );
}
