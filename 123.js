/*let arr = [1, 2, 3, 4, 5, 6];

let result = arr.reduce(function(sum, elem) {
	return sum + elem;
}, 0);

console.log(result);*/
var test = [1, 1, 1, [1, 1, [1, [1, [ [1], [1] ]], 1], 1], 1];

function arrSum(array, i = 0) {
  if (isFinite(array))
    return Number(array);
  else if (typeof array == "object" && i < array.length) // верно только если array - массив (имеет свойство length)
    return arrSum(array[i]) + arrSum(array, i + 1);
  return 0;
}

console.log(arrSum(test));