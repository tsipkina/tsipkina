var arr = [1,2,3,4];
var sum = 0;
var len=arr.length;
for(var i = 0; i < len; i++)
{ if (arr[i] % 2==0 && arr[i]>3) {sum += arr[i];} } 
console.log(sum)
