const initialState = {
  products: [
    {
      pid: 'GR1',
      pname: 'Green tea',
      price: 3.11,
    },
    {
      pid: 'SR1',
      pname: 'Strawberries',
      price: 5,
    },
    {
      pid: 'CF1',
      pname: 'Coffee',
      price: 11.23,
    },
  ],
  cart: {
    items: {},
  }
}

export default initialState;
