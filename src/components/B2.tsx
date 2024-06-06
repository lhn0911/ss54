import React, { useState } from 'react';

export default function B2() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const divideNumbers = (a:any, b:any) => {
    try {

      a = parseFloat(a);
      b = parseFloat(b);

      if (isNaN(a) || isNaN(b)) {
        throw new Error('Phải nhập vào hai số');
      }
      if (b === 0) {
        throw new Error('Không thể chia cho 0');
      }
      return a / b;
    } catch (error) {
      return `Lỗi: ${error.message}`;
    } finally {
      console.log('Kết thúc hàm divideNumbers');
    }
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    const divisionResult = divideNumbers(num1, num2);
    setResult(divisionResult);
  };

  return (
    <div>
      <h2>Divide Numbers</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Số thứ nhất:
            <input
              type="text"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Số thứ hai:
            <input
              type="text"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Divide</button>
      </form>
      {result && <p>{result}</p>}
    </div>
  );
}
