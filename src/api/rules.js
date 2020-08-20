export default {
  'buy-one-get-one-free': {
    products: ['GR1', 'SR1', 'CF1'],
    apply: function (total, products, cartItems) {
      let discount = 0;
      Object.entries(cartItems).forEach(
        item => {
          if(item[1].quantity >= 2) {
            discount = discount + products[item[0]].price * Math.floor(item[1].quantity/2);
          }
        }
      );
      return discount;
    },
  },
  'strawberries-bulk-purchase': {
    products: ['SR1'],
    apply: function (total, products, cartItems) {
      let discount = 0;
      if(cartItems['SR1'].quantity >= 3) {
        discount = cartItems['SR1'].quantity * 0.5;
      }
      return discount;
    },
  },
};

export function getApplicableRuleIds(rules, cartItems) {
  const cartItemsIds = Object.entries(cartItems).reduce((ids, item) => [...ids, item[0]], []);
  return Object.entries(rules).reduce(
    (applicableRules, rule) => {
      if (rule[1].products.some(productId => cartItemsIds.includes(productId))) {
        return [...applicableRules, rule[0]];
      }
      return applicableRules;
    },
    [],
  );
};

