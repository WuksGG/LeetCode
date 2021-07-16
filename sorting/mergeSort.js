var mergeSort = function(array) {
  if (array.length < 2) {
    return array;
  }
  var result = [];

  var midpoint = Math.ceil(array.length/2);
  var leftArray = mergeSort(array.slice(0, midpoint));
  var rightArray = mergeSort(array.slice(midpoint));

  var leftIndex = 0, rightIndex = 0;
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] >= rightArray[rightIndex]) {
      result.push(rightArray[rightIndex++]);
    } else {
      result.push(leftArray[leftIndex++]);
    }
  }

  if (leftIndex === leftArray.length) {
    result = result.concat(rightArray.slice(rightIndex));
  } else {
    result = result.concat(leftArray.slice(leftIndex));
  }

  return result;
};