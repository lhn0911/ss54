import React, { useEffect, useState } from 'react';

function countDown(n:any) {
  return new Promise((resolve) => {
    let counter = n;
    const intervalId = setInterval(() => {
      console.log(counter);
      counter--;
      if (counter < 0) {
        clearInterval(intervalId);
        resolve("Hoàn thành quá trình đếm");
      }
    }, 1000);
  });
}

export default function B8() {
  useEffect(() => {
    countDown(5).then((message) => {
      console.log(message);
    });
  }, []);

  return (
    <div>
      
    </div>
  );
}
