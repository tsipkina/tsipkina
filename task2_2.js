function f() { 
var result = 0;
for(item of arguments)
{ 
    if (typeof item==='number')
    {result+= item; 
      }
else 
{throw new Error('Error: all parameters type should be a Number');}
}
console.log(result);
return result;
}
f(1,2,3); 
f(1,1,1,1,1,1,1,1); 
f(1,2,'s',4); 