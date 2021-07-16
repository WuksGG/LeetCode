
// prototypal or pseudoclassical
var context = {
  x: 1,
  y: 2,
  z: 3,
};

var func = function () {
  this.x = (this.x * 2);
  this.y = (this.y * 3);
  this.z = (this.z * 4);
  return this;
}

// func();

// bind

var binded = func.bind(context);
console.log(binded());
console.log(context);

///func.call(context2, 'yes', 'no'); // context2 is letters
//console.log(context2);

//func.apply(context, [0, 0, 0]); // context1 is 1 2 3
//console.log(context);
//binded();

//console.log(context);

// apply
//

// call
//func.call(context, 2, 4, 6);