// BubbleSort
function bubbleSort(array) {
  let aux = 0;
  for (let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
      if(array[j] > array[j + 1]) {
        aux = array[j]
        array[j] = array[j + 1]
        array[j + 1] = aux;
      }
    } 
  }
  return array;
}

console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))