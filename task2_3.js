function f() { 
    var result = 0;
    if (typeof arguments[0]==='number' &&
        typeof arguments[1]==='number' &&
        typeof arguments[2]==='number')
        result =(arguments[0]-arguments[1])/arguments[2];
    else
    {throw new Error('Error: all parameters type should be a Number');}
  console.log(result);
    return result;
    }
   
    f(9,3,2); // 3
    f('s',9,3) // Error: all parameters type should be a Number