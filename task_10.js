var arr = [6,5,4,3,2,1];
console.log(arr); 
var n = arr.length;
var t = 0;
for (var i = 0; i < n ; i++) {
  for (var j = 0; j < n ; j++) {
    if (arr[j + 1] < arr[j]) 
    {
      t = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = t;}
    }
}


console.log(arr);


