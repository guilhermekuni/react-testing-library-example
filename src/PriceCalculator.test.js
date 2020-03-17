import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import PriceCalculator from './PriceCalculator';

const { queryByTestId } = render(<PriceCalculator />);

const amountInput = queryByTestId('amount');
const coupomAmountInput = queryByTestId('coupomAmount');
const priceInput = queryByTestId('price');

it('renders correctly', () => {
  expect(amountInput).toBeTruthy();
  expect(priceInput).toBeTruthy();
});

describe('price input value', () => {
  fireEvent.change(amountInput, { target: { value: 12 } });

  expect(amountInput.value).toBe('12');
  expect(priceInput.value).toBe('120');
});

describe('price input value with coupom', () => {
  fireEvent.change(amountInput, { target: { value: 7 } });
  fireEvent.change(coupomAmountInput, { target: { value: 3 } });

  expect(amountInput.value).toBe('7');
  expect(coupomAmountInput.value).toBe('3');
  expect(priceInput.value).toBe('55');
});

describe('price input with coupom value > total value', () => {
  fireEvent.change(amountInput, { target: { value: 1 } });
  fireEvent.change(coupomAmountInput, { target: { value: 3 } });

  expect(amountInput.value).toBe('1');
  expect(coupomAmountInput.value).toBe('3');
  expect(priceInput.value).toBe('0');
});
