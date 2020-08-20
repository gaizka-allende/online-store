import { convenienceStoreReducer } from './reducers';
import initialState from './initialState';
import { addToCart } from './actions';

test('add first time', () => {
  expect(
    convenienceStoreReducer(
      initialState,
      {
        type: addToCart,
        payload: {
          productId: 'CF1',
        },
      },
    ).cart.items,
  ).toEqual({
    ...initialState.cart.items,
    'CF1': {
      name: initialState.products['CF1'].name,
      quantity: 1,
    },
  });
});

test('add same product', () => {
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
    ).cart.items,
  ).toEqual({
    ...initialState.cart.items,
    'CF1': {
      name: initialState.products['CF1'].name,
      quantity: 2,
    }
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
    ).cart.items,
  ).toEqual({
    ...initialState.cart.items,
    'CF1': {
      name: initialState.products['CF1'].name,
      quantity: 1,
    },
    'GR1': {
      name: initialState.products['GR1'].name,
      quantity: 1,
    },
  });
});

test('total after first add', () => {
  expect(
    convenienceStoreReducer(
      initialState,
      {
        type: addToCart,
        payload: {
          productId: 'CF1',
        },
      },
    ).cart.total,
  ).toEqual(11.23);
});

test('total after add same product', () => {
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
    ).cart.total,
  ).toEqual(22.46);
});

test('total after add another product', () => {
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
    ).cart.total,
  ).toEqual(14.34);
});


