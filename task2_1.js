function f(num)
{ 
    var result;
    if (typeof num==='number')
result= num**3;
else 
{throw new Error('Error:parameter type is not a Number');}
console.log(result);
return result;
}
f(2); 
f('Content');
