<h1 align="center">Frontend JS Challenge</h1>
<div align="center">
  <div>
    <a style="margin-right: 8px;" href="https://github.com/kelkoo-services/kelisto-frontend-js-challenge/pulls"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" /></a>
  </div>
  </br>
</div>

Thanks for applying to Kelisto! Welcome to our coding challenge, this is a space for you to share with us how you work and reason about the problem presented, what things you care about when doing coding work, and how you approach problem solving. As such, through this challenge we are not expecting to check if you know the finest algorithms, have all the right answers to a given situation or if you are the best coder in the world. We believe there are no right or wrong answers, so please make yourself comfortable and focus on what you know best.

**Please submit your ideas to us in 1 week (max)**. This will give us enough time to review your challenge with the rest of the team before the next interview. During this interview we will take some time to explore together your coding challenge submission, and will ask you any clarifying questions we might have.

Based on previous candidate experiences, we believe **it will take you between 8 and 10 hours to complete the challenge.**

It is important for us that you include in a separate file (in Markdown/Plain Text) an **explanation of the solution.**

## ✨ Purpose

One’s ability to **analyze, design, code, document and test a solution** by guiding oneself with object oriented design and good coding principles. This consists of solving the following:

  - [Challenge 1. Modeling business rules](#%EF%B8%8F-challenge-1---modeling-business-rules).
  - [Challenge 2. Layout and React usage](#%EF%B8%8F-challenge-2---layout-and-react-usage).

## ⌨️ Challenge 1 - Modeling business rules

### Description

Kelisto's quest for world domination has prompted us to open a convenience store - we sell only three products:

| Product code | Name | Price |
|:---:|---|---:|
| GR1 | Green tea | £3.11 |
| SR1 | Strawberries | £5.00 |
| CF1 | Coffee | £11.23 |

#### Rules

- The CEO is a big fan of `buy-one-get-one-free` offers and of green tea. He wants us to add a rule to do this.
- The COO, though, likes low prices and wants people buying strawberries to get a price discount for bulk purchases. If you buy 3 or more strawberries, the price should drop to £4.50.
- Our check-out can scan items in any order, and because the CEO and COO change their minds often, it needs to be flexible regarding our pricing rules.

#### Usage

- The interface to our checkout looks like this:

```js
const co = new Checkout(pricing_rules)

co.scan(item)
co.scan(item)

const price = co.total
```

#### Test data

```
Basket: GR1,SR1,GR1,GR1,CF1
Total price expected: £22.45

Basket: GR1,GR1
Total price expected: £3.11

Basket: SR1,SR1,GR1,SR1
Total price expected: £16.61
```

### What needs to be done

- Implement a checkout system that fulfills these requirements.
- We expect only **plain classes and objects** to solve this part of the challenge.
- It could be nice for us to include tests for this part of the system.

## ⌨️ Challenge 2 - Layout and React usage

### Description

This is a React project. It provides the following functionality:

- Use the business rules implemented in the previous challenge.
- Show a list of products on the left-hand side of the screen (block Products).
  - Show the name of the product, the price and the product code.
  - Allow the user to add products to the cart.
    - When the user clicks on "Add to the cart" link, it increments the quantity of items added to the cart.
- Show a list of products added to the cart on the right-hand side of the screen (block Cart)
  - Show the name of the product and the quantity of them added to the cart.
  - Show the total price of the cart based on business rules.

### Design

Designs are stored in Figma. You should create an account to be able to see them.

  - [Figma – Checkout view](https://www.figma.com/file/2DMt9AtGoYL0Ew70c7RmX4/frontend-js?node-id=0%3A1)
  - Font: [Roboto](https://fonts.google.com/specimen/Roboto?sidebar.open=true&selection.family=Roboto:wght@400;700)

### What needs to be done

- Use the React library to demonstrate component-oriented architecture.
- You can use `create-react-app` or other framework for the bootstrapping.
- Style your components, use an approach that you see fit.
- Take care of mobile devices and make sure that your project works on smaller resolution screens.
- Work closely with the design, try to implement it as accurately as possible.
- Test your components if needed.

## 🚀 Project submitting

To send us your code, you can:

- Make a fork of this repository, and send us a pull-request;
- or give access to your repository in Github/Bitbucket.

## 🤘 What’s next?

Once you submit your solution, our team will review your code challenge, taking your experience level into account. The sample code provided by you should be in a state considered as a "production" ready - where each requested element is prepared and potentially ready to review with your colleagues.

Good luck!

**“The Challenge” has been created with the sole intention of being used as a guiding document for the current recruitment process. This means we won't be using it (all or parts of it) within our projects.**
