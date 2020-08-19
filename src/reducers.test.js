import { convenienceStoreReducer } from './reducers';
import initialState from './initialState';
import { addToCart } from './actions';

test('addToCart first time', () => {
  expect(
    convenienceStoreReducer(
      initialState,
      {
        type: addToCart,
        payload: {
          productId: 'CR1',
        },
      },
    )
  ).toEqual({
    ...initialState,
    cart: {
      ...initialState.cart,
      items: {
        ...initialState.cart.items,
        'CR1': 1,
      },
    },
  });
});

test('addToCart same product', () => {
  expect(
    convenienceStoreReducer(
      {
        ...initialState,
        cart: {
          ...initialState.cart,
          items: {
            ...initialState.cart.items,
            'CR1': 1,
          },
        },
      },
      {
        type: addToCart,
        payload: {
          productId: 'CR1',
        },
      },
    )
  ).toEqual({
    ...initialState,
    cart: {
      ...initialState.cart,
      items: {
        ...initialState.cart.items,
        'CR1': 2,
      },
    },
  });
});

test('another product', () => {
  expect(
    convenienceStoreReducer(
      {
        ...initialState,
        cart: {
          ...initialState.cart,
          items: {
            ...initialState.cart.items,
            'CR1': 1,
          },
        },
      },
      {
        type: addToCart,
        payload: {
          productId: 'GR1',
        },
      },
    )
  ).toEqual({
    ...initialState,
    cart: {
      ...initialState.cart,
      items: {
        ...initialState.cart.items,
        'CR1': 1,
        'GR1': 1,
      },
    },
  });
});
