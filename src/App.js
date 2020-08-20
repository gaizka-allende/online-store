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
            width: 640px;
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

        `}
      </style>
    </>
  );
}

export default App;
