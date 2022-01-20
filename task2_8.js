function f(arr) {
    if (!Array.isArray(arr))
    throw new Error('Error:  parameter type should be an array');
    else if (arr.length==0) 
    throw new Error('Error: parameter can\'t be an empty');
    else { 
    console.log(arr[0]);
    arr.splice(0, 1);
   	if (arr.length != 0) {
		f(arr);} 
	     }
                }

f([1,2,3]);
// 1
// 2
// 3
f(1,2,3) // Error: parameter type should be an array
f('Content') // Error: parameter type should be an array
f([]) // Error: parameter can't be an empty