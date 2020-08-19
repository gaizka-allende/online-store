import { addToCart } from './actions';

export function convenienceStoreReducer(state, action) {
  const { type, payload } = action;
  const { cart } = state;
  switch (type) {
    case addToCart: {
      let productId;
      if (state.cart.items[payload.productId]) {
        productId = { [payload.productId]: state.cart.items[payload.productId] + 1 };
      } else {
        productId = { [payload.productId]: 1 };
      }
      return {
        ...state,
        cart: {
          ...state.cart,
          items: {
            ...state.cart.items,
            ...productId,
          }
        },
      };
    }
    default: {
      return state;
    }
  }

}
