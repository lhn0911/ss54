import React, { useEffect } from 'react';

function sortArrayWithPromise(array) {
  return new Promise((resolve, reject) => {
    if (Array.isArray(array) && array.every(item => typeof item === 'number')) {
      const sortedArray = array.sort((a, b) => a - b);
      resolve(sortedArray);
    } else {
      reject("Input must be an array of numbers");
    }
  });
}

export default function B9() {
  useEffect(() => {
    sortArrayWithPromise([1, 7, 2, 5, 9, 5])
      .then(sortedArray => {
        console.log("Sorted array:", sortedArray);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      
    </div>
  );
}
