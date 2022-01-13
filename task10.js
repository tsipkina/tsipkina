var arr = [6,5,4,3,2,1];
var arr_new=[];
var min= arr[0];
for( i = 0; i < arr.length; i++)
 {  
     if (min>arr[i] ) 
        min=arr[i];
}
var min_last=max;
var max= arr[0];
for( i = 0; i < arr.length; i++)
 {  
     if (max<arr[i] ) 
        max=arr[i];
}


var j = 0;
for( j = 0; j < arr.length; j++) {
  for( i = 0; i < arr.length; i++)
 {  
     if (min>arr[i] && arr[i]>min_last)
          min=arr[i];
 }
min_last=min;
arr_new[j]=min;
min= max;
};
console.log(arr_new);

