
  var Begin =new Array(1,2,3);
  const Acc = 0;

  function Fun(arr){ 
    var Result=Acc;
    for(i=0;i<arr.length;i++) {
        Result+=arr[i];
    }
    console.log(Result);
}

  function myReduce(arr,Fun,acc){
    if (!Array.isArray(arr))
       throw new Error('Error:  1 parameter type should be an array');
    if((typeof Fun !== "function"))
        throw new Error('Error:  2 parameter type should be a function');
    if((typeof acc !== "number") )
    throw new Error('Error:  3 parameter type should be a number');
    Fun(arr); 
}

myReduce(Begin,Fun,Acc);