var Begin =new Array(1,2,3);
var New_arr =new Array();

  function myReverse(arr){
    if (!Array.isArray(arr))
       throw new Error('Error:  1 parameter type should be an array');
       for(i=2;i>=0;i--) {
        New_arr.push(arr[i]);
}
console.log(New_arr);
}

myReverse(Begin);