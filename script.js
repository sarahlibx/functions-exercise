var shoutIt = function (name) {
  var shout = `Hello, ${name}, nice to meet you!`.toUpperCase();
  return shout;
};

console.log(shoutIt("sarah"));

var multiply = function (num1, num2) {
  if (typeof num1 !== "number") return "Please provide 2 numbers.";
  else if (typeof num2 !== "number") return "Please provide two numbers.";
  else return num1 * num2;
};

console.log(multiply(3, 11));
console.log(multiply("Eric", 9));
console.log(multiply(6.6, 7));
