# Unhandled Errors in Express.js Asynchronous Operations

This repository demonstrates a common error in Express.js applications: unhandled errors in asynchronous operations.  When an asynchronous function throws an error, and that error isn't properly caught and handled, it can lead to server crashes. This example shows how to properly handle these scenarios to prevent such crashes.

## Bug

The `bug.js` file contains an Express.js server with an asynchronous route handler.  The `someAsyncOperation` function simulates an operation that might fail. If it fails, an error is thrown, but there is no robust error handling to prevent a crash. 

## Solution

The `bugSolution.js` file provides a corrected version. It demonstrates proper error handling using a `try...catch` block within the asynchronous operation and provides a proper response to the client in case of an error.