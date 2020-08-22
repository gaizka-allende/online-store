import products from './products';
import { getApplicableRuleIds } from './rules';

class Checkout {
  constructor(rules) {
    this.price = 0;
    this.items = {};
    this.rules = rules;
  }
  get total() {
    return this.price;
  }
  set total(newTotal) {
    this.price = newTotal;
  }
  scan(itemId) {
    this.items = {
      ...this.items,
      [itemId]: {
        ...this.items[itemId]
          ? { quantity: this.items[itemId].quantity + 1}
          : { quantity: 1 }
        ,
        name: products[itemId].name
      }
    };
    this.total = Checkout.calculate(products, this.rules, this.items);
  }
  static calculate(products, rules, items) {
    let total = Object.entries(items).reduce(
      (total, item) => total + (products[item[0]].price * item[1].quantity),
      0,
    );
    const applicableRuleIds = getApplicableRuleIds(rules, items);
    applicableRuleIds.forEach(
      ruleId => total = total - rules[ruleId].apply(total, products, items)
    );
    return total;
  };
}

export default Checkout;
