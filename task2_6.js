function isEven(num)
{ if (typeof num!='number')
throw new Error('Error:  parameter type is not a Number');
else if (num % 2==0) result=true;  else result=false;
console.log(result);
return result;
}

isEven(3); // false
isEven(4); // true
isEven('Content'); // Error: parameter type is not a Number