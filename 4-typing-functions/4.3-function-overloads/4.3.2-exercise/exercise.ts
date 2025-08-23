// Exercise 1: Create function overloads for a function named `getLength`
// that can take either a string or an array and return their length.
function getLength(type: string): number
function getLength(type: object): number

function getLength(type: any) {
  return type.length
}

// Test your implementation:
console.log(getLength('TypeScript'))
console.log(getLength([1, 2, 3, 4, 5]))
