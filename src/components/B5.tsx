import React, { useState } from 'react';

function isPrimeWithPromise(number:any) {
  return new Promise((resolve) => {
    if (number <= 1) {
      resolve(false);
      return;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        resolve(false);
        return;
      }
    }

    resolve(true);
  });
}

export default function B5() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);

  const handleChange = (e:any) => {
    setNumber(e.target.value);
  };

  const handleCheckPrime = async () => {
    const num = parseInt(number, 10);
    const isPrime = await isPrimeWithPromise(num);
    setResult(isPrime);
  };

  return (
    <div>
      <h1>Check Prime Number</h1>
      <input
        type="number"
        value={number}
        onChange={handleChange}
        placeholder="Enter a number"
      />
      <button onClick={handleCheckPrime}>Check</button>
      {result !== null && (
        <p>{result ? 'true' : 'false'}</p>
      )}
    </div>
  );
}
