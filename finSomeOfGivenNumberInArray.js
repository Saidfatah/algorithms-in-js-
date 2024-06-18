const arr = [0, -1, 2, -3, 1]
const x= -2


const findSumOfTwoEqualGivenX=(arr,x)=>{
  if(arr.length <= 1) return false;
  
  let i= 0
  let k= arr.length -1
  
  let sum=arr[i] + arr[i+1]
  
  if(sum === x) return true
  

  
  while(sum !== x){
    console.log("iteration:",i)
    if(k>0 && i<arr.length){
      const sum1=arr[i]+arr[i+1]
      const sum2=arr[i]+arr[k]
      if(sum1 === x)return true
      if(sum2 === x)return true
      k--;
      i++; 
    }
  }
}




const findSumOfTwoEqualGivenXUsingSortedArray = (arr, x) => {
    if (arr.length <= 1) return false;

    const sortedArray = [...arr].sort((a, b) => a - b)

    let leftPointer = 0
    let rightPointer = arr.length - 1

    let sum = sortedArray[leftPointer] + sortedArray[rightPointer]

    console.log("intial sum:", sum)

    if (sum === x) return true

    const checkForSumAndAdjustPointers = () => {
        if (sum > x) rightPointer--
        if (sum < x) leftPointer++
    }

    checkForSumAndAdjustPointers(); // since we calculated the intial some 

    while (sum !== x) {
        console.log("iteration:", leftPointer)
        if (rightPointer > 0 && leftPointer < sortedArray.length) {
            const sum = sortedArray[leftPointer] + sortedArray[rightPointer]

            if (sum === x) return true

            checkForSumAndAdjustPointers()
        }
    }
}

 

const res=findSumOfTwoEqualGivenXUsingSortedArray(arr,x)
console.log(res)
