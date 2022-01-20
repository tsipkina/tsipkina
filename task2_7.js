function getDivisors(num)
{ if (typeof num!='number')
throw new Error('Error:  parameter type is not a Number');
else if (num ===0) 
throw new Error('Error: parameter can\'t be a 0');
else 
{
    var arr_new=[];
    for(var i = 1; i <= num; i++)
    { if (num % i==0) 
        arr_new.push(i);   
    } 
    result= arr_new  
}
console.log(result);
return result;
}

getDivisors(12); // [1, 2, 3, 4, 6, 12]
getDivisors('Content'); // Error: parameter type is not a Number
getDivisors(0); // Error: parameter can't be a 0