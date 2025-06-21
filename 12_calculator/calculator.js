const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(li) {
  ans=0
  for (x in li) {
    ans += li[x]
  }
	return ans
};

const multiply = function(li) {
  ans=1
  for (x in li) {
    ans *= li[x]
  }
	return ans
};

const power = function(a,b) {
	return a**b
};

const factorial = function(a) {
	if (a>0){
    return a*factorial(--a)
  }
  else if(a==0){
    return 1
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
