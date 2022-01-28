var arr = [];

function arrayFill(a,b) { 
    if (typeof b != 'number') throw new Error('Error type b')
    else 
    if ((typeof a === 'number') || (typeof a === 'string')
    || (typeof a === 'object') || (!Array.isArray(arr)))
    {for (let i =0; i <= b-1; i++) 
        {
        arr[i] = a;
    }    
    console.log(arr)
}
    else {throw new Error('Error type b');}
}
arrayFill('x',5);