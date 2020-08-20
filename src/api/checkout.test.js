import {calculate} from './checkout';

const products = {
  GR1: { name: 'Green tea', price: 3.11 },
  SR1: { name: 'Strawberries', price: 5 },
  CF1: { name: 'Coffee', price: 11.23 }
};

const items = {
  GR1: {name: 'Green tea', quantity: 1},
  SR1: {name: 'Strawberries', quantity: 2},
  CF1: {name: 'Coffee', quantity: 1}
};


test('calculate', () => {
  expect(calculate(products, items)).toEqual(24.34);
});
