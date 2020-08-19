import React from 'react';
import { render } from '@testing-library/react';

import CartItem from './CartItem';

test('renders a cart item', () => {
  const { container, getByText } = render(
    <CartItem
      name="GR1"
    />
  );

  expect(container.querySelectorAll('.cartItem')).toHaveLength(1);

  expect(getByText(/GR1/i)).toBeInTheDocument();

})
