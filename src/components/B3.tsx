import React, { useState } from 'react';

const sumWithPromise = (numbers:any) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(numbers)) {
      return reject('Input must be an array');
    }

    const sum = numbers.reduce((acc, curr) => {
      if (typeof curr !== 'number') {
        return reject('All elements must be numbers');
      }
      return acc + curr;
    }, 0);

    resolve(sum);
  });
};

export default function B3() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    setError('');
    setResult('');

    try {
      const numbers = JSON.parse(input);
      if (!Array.isArray(numbers)) {
        throw new Error('Input must be an array');
      }
      const sum = await sumWithPromise(numbers);
      setResult(`Sum: ${sum}`);
    } catch (err) {
      setError(`Error: ${err.message || err}`);
    }
  };

  return (
    <div>
      <h2>Sum Array with Promise</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Calculate Sum</button>
      </form>
      {result && <p>{result}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
    </div>
  );
}
