import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import PriceCalculator from './PriceCalculator';

it('renders correctly', () => {
  const { queryByTestId } = render(<PriceCalculator />);

  expect(queryByTestId('amount')).toBeTruthy();
  expect(queryByTestId('price')).toBeTruthy();
});