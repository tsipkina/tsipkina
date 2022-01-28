var Begin =new Array(1,2,3);
var NewArr =new Array();
function Fun(arr){ 
    for(i=0;i<arr.length;i++){
    if (arr[i]>2) NewArr.push(arr[i]);
       }
}

function myFilter(arr,Fun){
if (!Array.isArray(arr))
   throw new Error('Error:  1 parameter type should be an array');
if((typeof Fun !== "function"))
    throw new Error('Error:  2 parameter type should be a function');
Fun(arr); 
}

myFilter(Begin,Fun); 
console.log(NewArr);