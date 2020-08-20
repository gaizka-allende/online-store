import rules, {getApplicableRuleIds} from './rules';

const items = {
  GR1: {name: 'Green tea', quantity: 1},
  SR1: {name: 'Strawberries', quantity: 2},
  CF1: {name: 'Coffee', quantity: 1}
};

test('get applicate rules', () => {
  expect(
    getApplicableRuleIds(
      {
        'buy-one-get-one-free': { products: ['GR1', 'SR1', 'CF1'] },
        'strawberries-bulk': { products: ['SR1'] }
      },
      {
        GR1: {quantity: 1},
        SR1: {quantity: 2},
        CF1: {quantity: 1}
      },
    )
  ).toEqual(['buy-one-get-one-free', 'strawberries-bulk']);
  expect(
    getApplicableRuleIds(
      {
        'buy-one-get-one-free': { products: ['GR1', 'SR1', 'CF1'] },
        'strawberries-bulk': { products: ['SR1'] }
      },
      {
        GR1: {quantity: 1},
        CF1: {quantity: 1}
      },
    )
  ).toEqual(['buy-one-get-one-free']);
});

test('buy-one-get-one-free not applied to just one', () => {
  expect(
    rules['buy-one-get-one-free'].apply(
      5,
      { 'SR1': { price: 5 } },
      { 'SR1': {quantity: 1} },
    ),
  ).toEqual(0);
});

test('buy-one-get-one-free applied for two', () => {
  expect(
    rules['buy-one-get-one-free'].apply(
      10,
      { 'SR1': { price: 5 } },
      { 'SR1': {quantity: 2} },
    ),
  ).toEqual(5);
});

test('buy-one-get-one-free applied for three', () => {
  expect(
    rules['buy-one-get-one-free'].apply(
      15,
      { 'SR1': { price: 5 } },
      { 'SR1': {quantity: 3} },
    ),
  ).toEqual(5);
});

test('buy-one-get-one-free multiple products', () => {
  expect(
    rules['buy-one-get-one-free'].apply(
      58.69,
      { 'CF1': { price: 11.23 }, 'SR1': { price: 5 } },
      { 'SR1': {quantity: 5}, 'CF1': {quantity: 3} },
    ),
  ).toEqual(21.23);
});
