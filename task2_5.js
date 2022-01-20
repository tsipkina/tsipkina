function isPositive(num)
{ if (typeof num!='number')
//result='Error: parameter type is not a Number';
throw new Error('Error:  parameter type is not a Number');
else  if (num>0)  result=true;
      else result=false;
return result;
}
var arr=[1, 2, -4, 3, -9, -1, 7];
var arr_new=[];
var len=arr.length;
for(var i = 0; i < len; i++)
{ if (isPositive(arr[i])) 
    arr_new.push(arr[i]);   
} 
console.log(arr_new);