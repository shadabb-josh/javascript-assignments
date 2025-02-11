// Create a memoised function that returns the cached value when the same arguments are passed.

function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log("Returning from cache");
      return cache.get(key);
    }
    console.log("Computing result");
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

const add = (a, b) => a + b;
const memoizedAdd = memoize(add);

console.log(memoizedAdd(2, 3)); // Computes and returns 5
console.log(memoizedAdd(2, 3)); // Returns cached value 5
