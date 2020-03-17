import React, { useState, useMemo } from 'react';

const input = {
  margin: 15,
  height: 20,
  width: 120,
  fontSize: 18,
};

const UNIT_VALUE = 10;

export default function PriceCalculator() {
  const [amount, setAmount] = useState(0);
  
  const price = useMemo(() => amount * UNIT_VALUE, [amount]);

  return (
    <div>
      <input style={input} type="number" value={amount} onChange={e => setAmount(e.target.value)} />
      <br/>
      <input style={input} type="number" value={price} disabled />
    </div>
  );
}
