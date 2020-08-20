export function calculate(products, items) {
  return Object.entries(items).reduce(
    (total, item) => total + (products[item[0]].price * item[1].quantity),
    0,
  )
};
