const arr=[10,4,5,7,9,10]
 
const _mergeArrays = (leftChunkArray, rightChunkArray) => {
  const tempSortedArray = []

  while (leftChunkArray.length && rightChunkArray.length) {
    tempSortedArray.push(leftChunkArray[0] > rightChunkArray[0] ? rightChunkArray.shift() : leftChunkArray.shift())
  }

  //if we still have values, let's add them at the end of `c`
  while (leftChunkArray.length) {
    tempSortedArray.push(leftChunkArray.shift())
  }
  while (rightChunkArray.length) {
    tempSortedArray.push(rightChunkArray.shift())
  }

  return tempSortedArray
} 
const mergeSortRecursion = (arr)=>{
    if (arr.length < 2) return arr
  
    const middle = Math.floor(arr.length / 2)
    
    const leftChunkArray = arr.slice(0, middle)
    const rightChunkArray = arr.slice(middle, arr.length)
    
    const sortedLeftChunkArray = mergeSortRecursion(leftChunkArray)
    const sortedRightChunkArray = mergeSortRecursion(rightChunkArray)

    return _mergeArrays(sortedLeftChunkArray,sortedRightChunkArray)
}


console.log(mergeSortRecursion(arr))
 
