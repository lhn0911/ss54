import React, { useState } from 'react';

export default function B10() {
  const [result, setResult] = useState('');

  const findElement = (arr, target) => {
    return new Promise((resolve, reject) => {
      const index = arr.indexOf(target);
      if (index !== -1) {
        resolve(`Phần tử ${target} tìm thấy ở vị trí thứ ${index + 1}.`);
      } else {
        reject(`Không tìm thấy phần tử ${target}`);
      }
    });
  };

  const handleSearch = (arr, target) => {
    findElement(arr, target)
      .then((message) => setResult(message))
      .catch((error) => setResult(error));
  };

  return (
    <div>
      <button onClick={() => handleSearch([1, 2, 3, 4, 5], 3)}>Tìm 3</button>
      <button onClick={() => handleSearch([1, 2, 3, 4, 5], 6)}>Tìm 6</button>
      <div>Kết quả: {result}</div>
    </div>
  );
}
