import { getApplicableRuleIds } from './rules';

export function calculate(products, rules, items) {
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
