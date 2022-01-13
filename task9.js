var arr = [1,2,3,4,5,6];
var arr_new=[];
var min= arr[0];
for( i = 0; i < arr.length; i++)
 {  
     if (min>arr[i] ) 
        min=arr[i];
}
var max= arr[0];
for( i = 0; i < arr.length; i++)
 {  
     if (max<arr[i] ) 
        max=arr[i];
}
var max_last=max;

var j = 0;
for( j = 0; j < arr.length; j++) {
  for( i = 0; i < arr.length; i++)
 {  
     if (max<arr[i] && arr[i]<max_last)
          max=arr[i];
 }
max_last=max;
arr_new[j]=max;
max= min;
};
console.log(arr_new);

