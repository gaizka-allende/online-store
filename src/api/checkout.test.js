import Checkout, {calculate} from './checkout';
import rules from './rules';

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


xtest('calculate', () => {
  expect(calculate(products, {}, items)).toEqual(24.34);
});

xtest('calculate with rules', () => {
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

test('scan', () => {
  const co = new Checkout(rules);
  co.scan('GR1');
  co.scan('GR1');
  expect(co.total).toEqual(3.11);
});
