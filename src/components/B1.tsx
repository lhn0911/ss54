import React, { useState } from 'react';
export default function B1() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState('');

  const calculateBMI = (weight, height) => {
    try {
      weight = parseFloat(weight);
      height = parseFloat(height);

      if (isNaN(weight) || weight <= 0) {
        return "Cân nặng không hợp lệ";
      }
      if (isNaN(height) || height <= 0) {
        return "Chiều cao không hợp lệ";
      }
      const bmi = weight / (height * height);
      return `BMI của bạn là ${bmi.toFixed(2)}`;
    } catch (error) {
      return "Đã xảy ra lỗi";
    }
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    const bmiResult = calculateBMI(weight, height);
    setResult(bmiResult);
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Cân nặng (kg):
            <input
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Chiều cao (m):
            <input
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Calculate BMI</button>
      </form>
      {result && <p>{result}</p>}
    </div>
  );
}
