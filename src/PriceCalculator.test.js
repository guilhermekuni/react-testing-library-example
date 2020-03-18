import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import PriceCalculator from './PriceCalculator';

describe('price calculator test', () => {
  it('renders correctly', () => {
    const { queryByTestId } = render(<PriceCalculator />);

    expect(queryByTestId('amount')).toBeTruthy();
    expect(queryByTestId('coupomAmount')).toBeTruthy();
    expect(queryByTestId('price')).toBeTruthy();
  });

  it('calculate price input value', () => {
    const { queryByTestId } = render(<PriceCalculator />);

    const amountInput = queryByTestId('amount');
    const priceInput = queryByTestId('price');

    fireEvent.change(amountInput, { target: { value: 12 } });

    expect(amountInput.value).toBe('12');
    expect(priceInput.value).toBe('120');
  });

  it('calculate price input value with coupom', () => {
    const { queryByTestId } = render(<PriceCalculator />);

    const amountInput = queryByTestId('amount');
    const coupomAmountInput = queryByTestId('coupomAmount');
    const priceInput = queryByTestId('price');

    fireEvent.change(amountInput, { target: { value: 7 } });
    fireEvent.change(coupomAmountInput, { target: { value: 3 } });

    expect(amountInput.value).toBe('7');
    expect(coupomAmountInput.value).toBe('3');
    expect(priceInput.value).toBe('55');
  });

  it('calculate price input with coupom value > total value', () => {
    const { queryByTestId } = render(<PriceCalculator />);

    const amountInput = queryByTestId('amount');
    const coupomAmountInput = queryByTestId('coupomAmount');
    const priceInput = queryByTestId('price');

    fireEvent.change(amountInput, { target: { value: 1 } });
    fireEvent.change(coupomAmountInput, { target: { value: 3 } });

    expect(amountInput.value).toBe('1');
    expect(coupomAmountInput.value).toBe('3');
    expect(priceInput.value).toBe('0');
  });
});
