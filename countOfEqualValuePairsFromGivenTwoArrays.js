// problem : https://www.geeksforgeeks.org/count-of-equal-value-pairs-from-given-two-arrays-such-that-ai-equals-bj/?ref=lbp

const a =[1, 1, 3, 3, 3, 5,5,8, 8,8];
const b=[1, 3, 3, 4, 5, 5, 5]


const countOfEqualValuePairsFromGivenTwoArrays = (arr1,arr2,arr1Length,arr2Length) => {
  let i=0,j=0;
  let sumOfPairs=0;
  
  while(i < arr1Length && j < arr2Length){
    if(arr1[i] === arr2[j]){
       const target = arr1[i];
      
       let occurancesoftargetInArr1=0
       let occurancesoftargetInArr2=0

       while(i < arr1Length && arr1[i] === target ){
         occurancesoftargetInArr1++;
         i++;
       }
      
       while(j < arr2Length && arr2[j] === target ){
         occurancesoftargetInArr2++;
         j++;
       }
      
      // reason behind this is every occurance of the target value in arr1 can be paired 
      // with all occurances of the same value in arr2
      sumOfPairs += occurancesoftargetInArr1 * occurancesoftargetInArr2;
    }else if(arr1[i] > arr2[j]){
      j++; 
    }else{
      i++;
    }
  }
  
  return sumOfPairs;
}


const sumOfPairs= countOfEqualValuePairsFromGivenTwoArrays(a , b, a.length, b.length);

console.log(sumOfPairs)
