import React, { useEffect } from 'react';

export default function B7() {
  useEffect(() => {
    const myFirstPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Success!");
      }, 1000);
    });

    myFirstPromise.then((message) => {
      console.log("Result!", message);
    });
  }, []);

  return (
    <div>
      
    </div>
  );
}
