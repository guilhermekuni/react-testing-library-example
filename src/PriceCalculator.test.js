import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import PriceCalculator from './PriceCalculator';

const { queryByTestId } = render(<PriceCalculator />);

const amountInput = queryByTestId('amount');
const priceInput = queryByTestId('price');

it('renders correctly', () => {
  expect(amountInput).toBeTruthy();
  expect(priceInput).toBeTruthy();
});

describe('Price input value', () => {
  fireEvent.change(amountInput, { target: { value: 7 } });

  expect(amountInput.value).toBe('7');
  expect(priceInput.value).toBe('70');
});
