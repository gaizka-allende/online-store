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
          productId: 'CF1',
        },
      },
    )
  ).toEqual({
    ...initialState,
    cart: {
      ...initialState.cart,
      items: {
        ...initialState.cart.items,
        'CF1': {
          name: initialState.products['CF1'].name,
          quantity: 1,
        },
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
            'CF1': {
              name: initialState.products['CF1'].name,
              quantity: 1,
            },
          },
        },
      },
      {
        type: addToCart,
        payload: {
          productId: 'CF1',
        },
      },
    )
  ).toEqual({
    ...initialState,
    cart: {
      ...initialState.cart,
      items: {
        ...initialState.cart.items,
        'CF1': {
          name: initialState.products['CF1'].name,
          quantity: 2,
        }
      },
    },
  });
});

test('add another product', () => {
  expect(
    convenienceStoreReducer(
      {
        ...initialState,
        cart: {
          ...initialState.cart,
          items: {
            ...initialState.cart.items,
            'CF1': {
              name: initialState.products['CF1'].name,
              quantity: 1,
            }
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
        'CF1': {
          name: initialState.products['CF1'].name,
          quantity: 1,
        },
        'GR1': {
          name: initialState.products['GR1'].name,
          quantity: 1,
        },
      },
    },
  });
});
