import {calculate} from './checkout';

const products = {
  GR1: { name: 'Green tea', price: 3.11 },
  SR1: { name: 'Strawberries', price: 5 },
  CF1: { name: 'Coffee', price: 11.23 }
};

const rules = {
  'buy-one-get-one-free': {
    products: ['GR1', 'SR1', 'CF1'],
    apply: (total, products) => {
      console.log('applying buy-one-get-one-free');
      return total;
    },
  }
};

const items = {
  GR1: {name: 'Green tea', quantity: 1},
  SR1: {name: 'Strawberries', quantity: 2},
  CF1: {name: 'Coffee', quantity: 1}
};


xtest('calculate', () => {
  expect(calculate(products, {}, items)).toEqual(24.34);
});

test('calculate with rules', () => {
  const apply = jest.fn();
  calculate(
    {
      GR1: { price: 5 },
    },
    {
      'buy-one-get-one-free': {
        products: ['GR1'],
        apply,
      }
    },
    {
      GR1: { quantity: 2},
    },
  );
  expect(apply).toHaveBeenCalled();
});
