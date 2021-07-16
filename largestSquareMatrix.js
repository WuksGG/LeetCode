// STATUS: COMPLETE

const checkAt = (arr, row, col, size) => {
  if (row + size - 1 >= arr.length || col + size - 1 >= arr[0].length) {
    // Out of bounds error 1
    return size - 1;
  }
  for (let i = 0; i < size; i++) {
    // Only have to check last row & last column
    // Check last row first.
    if (!arr[row + size - 1][col + i]) {
      return size - 1;
    }
    // Then check the last column.
    if (!arr[row + i][col + size - 1]) {
      // Only have to check last row & last column
      return size - 1;
    }
  }
  return checkAt(arr, row, col, size + 1);
};

const largestSize = (arr) => {
  let currentMax = 0;
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[0].length; col++) {
      if (arr[row][col]) {
        let result = checkAt(arr, row, col, 2);
        if (result > currentMax) {
          currentMax = result;
        }
      }
    }
  }
  return currentMax;
};

const testArr = [
  [Math.floor(Math.random() * 2), Math.floor(Math.random() * 2), Math.floor(Math.random() * 2), Math.floor(Math.random() * 2)],
  [Math.floor(Math.random() * 2), Math.floor(Math.random() * 2), Math.floor(Math.random() * 2), Math.floor(Math.random() * 2)],
  [Math.floor(Math.random() * 2), Math.floor(Math.random() * 2), Math.floor(Math.random() * 2), Math.floor(Math.random() * 2)],
  [Math.floor(Math.random() * 2), Math.floor(Math.random() * 2), Math.floor(Math.random() * 2), Math.floor(Math.random() * 2)]
];

testArr.forEach(row => {
  console.log(row);
});

console.log(largestSize(testArr2));