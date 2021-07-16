// STATUS: INCOMPLETE

// // You are given an integer array matchsticks where
// // matchsticks[i] is the length of the ith matchstick.
// // You want to use all the matchsticks to make one square.
// // You should not break any stick, but you can link them up,
// // and each matchstick must be used exactly one time.

// // Return true if you can make this square and false otherwise.

var arraySum = (arr) => {
  var sum = 0;
  arr.forEach(n => {
    sum += n;
  });
  return sum;
};

var makesquare1 = function (matchsticks) {
  var sum = arraySum(matchsticks);
  var sortedArray = matchsticks.slice().sort((b, a) => a - b);
  var sides = [
    [], // limit sum
    [],
    [],
    [],
  ];
  for (var i = 0; i < sortedArray.length; i++) {
    // array
    var found = false;
    for (var j = 0; j < 4; j++) {
      if (arraySum(sides[j]) + sortedArray[i] <= sum / 4) {
        sides[j].push(sortedArray[i]);
        found = true;
        break;
      }
    }
    console.log(sides);
    console.log(sortedArray[i]);
    if (!found) return false;
  }
  console.log(sides);
  return true;

};

var makesquare = function (matchsticks) {
  var sides = 0;
  var sum = 0;
  matchsticks.forEach(n => {
    sum += n;
  });
  if (sum % 4 !== 0) {
    return false;
  } else {
    var sideLength = sum / 4;
    var sorted = matchsticks.sort(function (a, b) {
      return a - b;
    });
    for (var i = sorted.length - 1; i >= 0; i--) {
      var currMatch = sorted[i];
      if (currMatch > sideLength) {
        return false;
      } else if (currMatch === sideLength) {
        sides++;
        sorted.pop();
      } else if (sorted.includes(sideLength - currMatch)) {
        sides++;
        sorted.pop();
        sorted.splice(sorted.indexOf(sideLength - currMatch), 1);
      } else if (sides === 3) {
        var leftVal = sorted.reduce((acc, curr) => {
          return acc + curr;
        }, 0)
        if (sideLength === leftVal) {
          sorted = [];
          return true;
        }
      }
    }
  }
  return false;
};


console.log(makesquare([3, 3, 3, 3, 4])); // false
console.log(makesquare([1, 1, 2, 2, 2])); // true
console.log(makesquare([1, 2, 3, 2, 2, 1, 4, 5])); // true
console.log(makesquare([5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3])); // true // 12 ea, 48 total

//console.log(makesquare1([3, 3, 3, 3, 4])); / / false
//console.log(makesquare1([1, 1, 2, 2, 2])); // true
//console.log(makesquare1([1, 2, 3, 2, 2, 1, 4, 5])); // true
console.log(makesquare1([5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3])); // true // 12 ea, 48 total
// YOU GUYS GOT THIS!!!!!!!
//5 4 3
//5 4 3
//5 4 3
//5 4 3