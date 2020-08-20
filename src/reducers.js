import { addToCart } from './actions';
import { calculate } from './api/checkout';

export function convenienceStoreReducer(state, action) {
  const { type, payload} = action;
  const { products, cart } = state;
  switch (type) {
    case addToCart: {
      const {productId} = payload;
      const items = {
        ...cart.items,
        [productId]: {
          ...cart.items[productId]
            ? { quantity: cart.items[productId].quantity + 1}
            : { quantity: 1 }
          ,
          name: products[productId].name
        }
      };
      return {
        ...state,
        cart: {
          ...cart,
          items,
          total: calculate(products, items),
        },
      };
    }
    default: {
      return state;
    }
  }

}
