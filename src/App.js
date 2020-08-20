import React, { useReducer } from 'react';

import initialState from './initialState';
import { convenienceStoreReducer } from './reducers';
import { addToCart } from './actions';

import List from './components/List';
import Cart from './components/Cart';

function App() {
  const [state, dispatch] = useReducer(convenienceStoreReducer, initialState);
  return (
    <>
      <div className="container">
        <List
          items={state.products}
          onAdd={
            productId => dispatch({
              type: addToCart,
              payload: {
                productId
              },
            })
          }
        />
        <Cart
          items={state.cart.items}
          total={state.cart.total}
        />
      </div>
      <style jsx>
        {`
          .container {
            margin: 100px auto 0 auto;
            width: 1138px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 24px;
            background-color: #F8FAFF;
            padding: 50px 64px;
          }
          @media only screen and (max-width: 1200px) {
            .container {
              margin: 0 auto;
              display: block;
              width: 800px;
            }
          }
          @media only screen and (max-width: 375px) {
            .container {
              display: block;
              width: 95%;
              margin: 0 auto;
            }
          }

        `}
      </style>
    </>
  );
}

export default App;
