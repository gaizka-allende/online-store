import React from 'react';
import { render } from '@testing-library/react';

import CartItem from './CartItem';

test('renders a cart item', () => {
  const { container, getByText } = render(
    <CartItem
      name="Coffee"
      quantity={3}
    />
  );

  expect(container.querySelectorAll('.container')).toHaveLength(1);

  expect(getByText(/Coffee/i)).toBeInTheDocument();

  expect(getByText(/3/i)).toBeInTheDocument();

})
