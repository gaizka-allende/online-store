import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import initialState from '../initialState';
import List from './List';

test('renders a list', () => {
  const { container, getByText} = render(
    <List items={{
      'GR1': {...initialState.products['GR1']},
      'SR1': {...initialState.products['SR1']},
      'CF1': {...initialState.products['CF1']},
    }} />
  );
  const headerElement = getByText(/List of products/i);
  expect(headerElement).toBeInTheDocument();

  expect(container.querySelectorAll('.listItem')).toHaveLength(3);

});

