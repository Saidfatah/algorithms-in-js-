const arrayOfDuplicatedNumbers =[1,2,3,4,4,7,8,9,3,1,2,0]


const getArrayOfUnduplicatedNumbers = (arr)=>{
  const unduplicatedNumbers ={}
  
  for(let i=0;i<arr.length;i++){
    if(!unduplicatedNumbers[arr[i]])unduplicatedNumbers[arr[i]] =arr[i]
  }
  
  return Object.values(unduplicatedNumbers)
  
}

console.log(getArrayOfUnduplicatedNumbers(arrayOfDuplicatedNumbers))
