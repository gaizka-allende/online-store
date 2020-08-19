import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import List from './List';

test('renders a list', () => {
  const { container, getByText} = render(
    <List
      items={[
        {
          pid: 'GR1',
          pname: 'Green tea',
          price: 3.11,
        },
        {
          pid: 'SR1',
          pname: 'Strawberries',
          price: 5,
        },
        {
          pid: 'CF1',
          pname: 'Coffee',
          price: 11.23,
        },
      ]}
    />
  );
  const headerElement = getByText(/List of products/i);
  expect(headerElement).toBeInTheDocument();

  expect(container.querySelectorAll('.listItem')).toHaveLength(3);

});

