function f(num) {
    var result=0;
    var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    if (typeof num!='number') 
    throw new Error('Error: parameter type is not a Number');
    else if (num<1 || num>7) 
    throw new Error('Error: parameter should be in the range of 1 to 7');
    else { 
    result=days[num-1];
    console.log(result);   
    return result;}
  }
  


f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Numbe
//console.log(result);