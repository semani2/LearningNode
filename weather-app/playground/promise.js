var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      }
      else {
        reject('Arguments must be numbers');
      }
    }, 2000);
  });
};

// Promise chaining with a single error handler for all the promises in the chain.
asyncAdd(10,2).then((result) => {
    console.log(`Result: ${result}`);
    return asyncAdd(result, '33');
  }).then((result) => {
    console.log(`Result: ${result}`);
  }).catch((errorMessage) => {
    console.log(errorMessage);
  });
// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('Promise broken.');
//   }, 2500);
// });
//
// somePromise.then((message) => {
//   console.log('Success: ' + message);
// }, (errorMessage) => {
//   console.log('Error: ' + errorMessage);
// });
