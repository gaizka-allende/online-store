<h1 align="center">Frontend JS Challenge</h1>

## Architecture 
A loosely coupled React architecture in which each component has little knowledge of the other components has been used to create this app. It’s an approach where which allows reusability of componetns as they are independent throughout the application. This approach focuses on code reusability, testability where components can be tested independently without much need integration testing and code collaboration where development can work independently to each other.

### PWA vs SSR
The app has been create as a PWA/SPA. This approache can be slow to start initially however the big benefit of the Single Page App approach is that once the application has started up, any route changes in the browser does not need any subsequent page loads. If there is need for SSO requests other that the root of the App, then Next.js is a good solution to make the app a SSR app.

### Directory structure
The layout components and their tests are all located in the same file directory, however, as the application scales, they should be placed in individual directories i.e. 

```
├── components
│   └── Cart
│       ├── Cart.js 
│       └── Cart.test.js
```
No more nested components should be used to avoid complexity. Also naming conventions should be clear and meaninful.

### State management
No components in the app hold state. A consistent global state (inside of the App component) contains the app state (the products added to the cart and the list of products) and a change to that state will automatically update all views. The Redux pattern is used to manage the application state using the useReducer hook instead of a store from Redux. This is the Single Source of Truth pattern. The useReducer hook allows for complex state logic that involves multiple sub-values or when the next state depends on the previous one. The dispatch function is passed down to the List and Cart components. This can scale very simply by just adding new actions and cases in the reducer (i.e remove, etc ...).  Redux could be added in the future without much refactoring as the useReducer hook uses the same pattern in order to avoid prop drilling nightmares (a more layers of components may be added).    

### UI 
The application UI is decomposed into presentation components. These presentation components (ie. List, ListItem, Cart, CartItem) represent what we see in the browser.

### Data fetching
This is just a simple solution with synchronous updates by dispatching an action. A more real application would mplement data fetching with redux-thunk, which would extend the async logic including complex synchronous logic or async logic like AJAX requests. Also GraphQL with Apollo client or react-query would be a good choice for asyn data fetching.

### Routing
No routing library is been used at the moment, however as more forms are added to the app, react-router should be added, which is a declarative way of routing as well as the components and it rates very well in accessibility.

### Styling
The styling and the code of the layout components are not separated. They are technically the same concern and can be are in the same file. This reduces complexity and specificity-related bugs. For this, the <a href="https://github.com/vercel/styled-jsx">styled-jsx</a> package is provides full CSS support in JSX as an style element. 

### Scalability
The loosely coupled approach is easily to maintain as the application grows. The application has been broken down into small, single-purpose components (List, ListItem, Cart, CartItem). This approach, in my opinion, the best starting point to build large-scale web applications.

#### Products
When a new product is added, a new member needs to be added to the default export in src/api/products.js in the format: 
```
{
  'GR1': {
    name: 'Green tea',
    price: 3.11,
  },
}
```
In a more real life scenario. the products should be fetched on application load in Json format and added to the context of the app during the initial load.  

#### Discount rules 
The rules are discounts applied to the total amount of the cart. 

When a new discount rule is created, a new member needs to be added to the default export in src/api/rules.js in the format: 
```
{
  'rule-id': 
    products: [ids of applicable products],
    apply: function with the logic,
}
```
In a more real life scenario. the rules should be fetched on application load in Json format and added to the context of the app during the initial load. The rules are first filtered depending on the items in the cart and applied after the add event within the reducer. 

### UI Library
Material UI could be used to create the UI elements; from Menus, Sidebars, to Buttons and Tooltips. 

### Localisation
If localisation is needed in the future, the library react-i18next should be installed as early as possible.

#### Common patterns and best practices
This app has been created using some of the most common React patterns such as Layout components, Container components, Higher-order components, State hoisting, Conditional rendering, etc ...

### Develpment
Run 'yarn start' and browse localhost:3000

### Testing 
Run 'yarn test' for unit tests

### Deployment 
A Continuous Deployment release process should be used which would use automated testing to validate the codebase with autonomous deployments to a UAT and production environments connected to the development and release branches of a Git repository.

