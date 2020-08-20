import React from 'react';
import { render } from '@testing-library/react';

import initialState from '../initialState';
import Cart from './Cart';

test('renders a cart', () => {
  const { container, getByText } = render(
    <Cart
      items={
        {
          'GR1': { quantity: 1, },
          'SR1': { quantity: 1, },
        }
      }
      total="0.00"
    />
  );

  expect(container.querySelectorAll('.cartItems')).toHaveLength(1);

  expect(container.querySelectorAll('.cartItem')).toHaveLength(2);

  const headerElement = getByText(/0.00/i);
  expect(headerElement).toBeInTheDocument();

});
