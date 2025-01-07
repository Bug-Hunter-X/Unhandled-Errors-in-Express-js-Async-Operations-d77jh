const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(error => {
    // Error handling is crucial, but if the error isn't handled properly it may cause the server to crash
    console.error('Error:', error);
    // Missing a proper response to the client here!
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  const success = Math.random() < 0.8; // 80% chance of success
  if (!success) {
    throw new Error('Something went wrong!');
  }
}