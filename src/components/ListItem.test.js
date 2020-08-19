import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import ListItem from './ListItem';

test('renders a list item', () => {
  const { getByText } = render(
    <ListItem
      pid="GR1"
      pname="Green tea"
      price={3.11}
    />
  );
  const idElement = getByText(/Green tea/i);
  expect(idElement).toBeInTheDocument();

  const nameElement = getByText(/GR1/);
  expect(nameElement).toBeInTheDocument();

  const priceElement = getByText(/3.11/);
  expect(priceElement).toBeInTheDocument();
});

test('click on add to cart', () => {
  const mockedAddToCart = jest.fn();
  const { getByText } = render(
    <ListItem
      pid="GR1"
      pname="Green tea"
      price={3.11}
      onAdd={mockedAddToCart}
    />
  );

  const addToCartElement = getByText(/Add to cart/);
  expect(addToCartElement).toBeInTheDocument();

  fireEvent.click(addToCartElement);

  expect(mockedAddToCart).toHaveBeenCalledWith('GR1');
});
