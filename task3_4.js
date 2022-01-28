var Begin =new Array(1,2,3);
function Fun(arr){ 
    var Result=false;
    for(i=0;i<arr.length;i++) {
    if (arr[i]<2) {Result=true;break;}
    }
    console.log(Result);
}

function mySome(arr,Fun){
if (!Array.isArray(arr))
   throw new Error('Error:  1 parameter type should be an array');
if((typeof Fun !== "function"))
    throw new Error('Error:  2 parameter type should be a function');
Fun(arr); 
}

mySome(Begin,Fun);