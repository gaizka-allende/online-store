import products from './api/products';

const initialState = {
  products,
  cart: {
    items: {},
    total: "0.00",
  }
}

export default initialState;
