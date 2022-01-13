var arr = [1,2,3,4,5,6];;
console.log(arr); 
var n = arr.length;
var t = 0;
for (var i = 0; i < n ; i++) {
  for (var j = 0; j < n ; j++) {
    if (arr[j + 1] > arr[j]) 
    {
      t = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = t;}
    }
}


console.log(arr);


