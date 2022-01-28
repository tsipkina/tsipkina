function f(arr){
    test1=arr;
    //console.log(arr);
    if (!Array.isArray(arr))
    throw new Error('Error: parameter type should be an array');
    if (!Array.isArray(arr[0]) && typeof arr[0] !== 'number') 
    throw new Error('Error: parameter type should be an array or number');
    if (Array.isArray(arr[0] ))//(typeof arr[0] !== 'number')  
    {   
        arr=arr.flat();
        f(arr);
    }
        else return test1;
 }

function f2(arr1){
f(arr1) ;
sum=0;
for(i=0;i<test1.length;i++) {
       sum+=test1[i];
}
console.log(sum);
}

const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
f2(arr); // 12
const arr2 = [[[[[1,2]]]]];
f2(arr2); // 3
const arr3 = [[[[[1,2]]],2],1];
f2(arr3); // 6
const arr5 = [[[[[],3]]]];
f2(arr5); // 3
const arr4 = [[[[[]]]]];
f2(arr4); // 0

