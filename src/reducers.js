import { addToCart } from './actions';

export function convenienceStoreReducer(state, action) {
  const { type, payload} = action;
  const { products, cart } = state;
  switch (type) {
    case addToCart: {
      const {productId} = payload;
      let cartItem;
      if (state.cart.items[productId]) {
        cartItem = {
          quantity: state.cart.items[productId].quantity + 1,
        };
      } else {
        cartItem = {
          quantity: 1,
        };
      }
      return {
        ...state,
        cart: {
          ...state.cart,
          items: {
            ...state.cart.items,
            [productId]: {
              ...cartItem,
              name: products[productId].name
            }
          }
        },
      };
    }
    default: {
      return state;
    }
  }

}
