<h1 align="center">Frontend JS Challenge</h1>

Run 'yarn start' and browse localhost:3000 and 'yarn test' for unit tests

### Discount rules 

They are applied on the add event by the reducer

The rules are located in src/api/rules.js and are created in the format: 

{
  'rule-id': 
    products: [ids of applicable products],
    apply: function with the logic,
}
