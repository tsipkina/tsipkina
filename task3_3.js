var Begin =new Array(1,2,3);
function Fun(arr){ 
    var Result=true;
    for(i=0;i<arr.length;i++) {
    if (arr[i]<2) {Result=false;break;}
    }
    console.log(Result);
}

function myEvery(arr,Fun){
if (!Array.isArray(arr))
   throw new Error('Error:  1 parameter type should be an array');
if((typeof Fun !== "function"))
    throw new Error('Error:  2 parameter type should be a function');
Fun(arr); 
}

myEvery(Begin,Fun);