import React, { useState, useMemo } from 'react';

const styles = {
  box: {
    padding: 10,
  },
  input: {
    marginTop: 15,
    height: 20,
    width: 120,
    fontSize: 18,
  }
};

const UNIT_VALUE = 10;
const COUPOM_VALUE = 5;

export default function PriceCalculator() {
  const [amount, setAmount] = useState(0);
  const [coupomAmount, setCoupomAmount] = useState(0);

  const totalValue = useMemo(() =>
    (amount * UNIT_VALUE) - (coupomAmount * COUPOM_VALUE),
    [amount, coupomAmount]);

  const price = useMemo(() => totalValue >= 0 ? totalValue : 0, [totalValue]);

  return (
    <div style={styles.box}>
      <h3>Preço Unitário: {UNIT_VALUE}</h3>
      <h3>Desconto Cupom: {COUPOM_VALUE}</h3>
      <label htmlFor="amount">QTD PRODUTOS: </label>
      <input
        id="amount"
        style={styles.input}
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        data-testid="amount"
      />
      <br />
      <label htmlFor="cupomAmount">QTD CUPONS: </label>
      <input
        id="cupomAmount"
        style={styles.input}
        type="number"
        value={coupomAmount}
        onChange={e => setCoupomAmount(e.target.value)}
        data-testid="coupomAmount"
      />
      <br />
      <label htmlFor="amount">PREÇO TOTAL: </label>
      <input
        id="price"
        style={styles.input}
        type="number"
        value={price}
        disabled
        data-testid="price"
      />
    </div>
  );
}
