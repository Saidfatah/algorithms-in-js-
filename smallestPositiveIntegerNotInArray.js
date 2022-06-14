

function findSmallestPositiveInteger(A) {


    // sort array from smallest to largest number
     A.sort((a, b) => a - b)
     
    // remove duplicates because they just would take memory
    const noDups =Array.from(new Set(A).keys())
    
    let smallestPositiveInteger=1
    
    let previous = noDups[0]
    if(previous <= smallestPositiveInteger && previous>0)
            smallestPositiveInteger++
    
    for(let i =1;i<noDups.length;i++){
      const v = noDups[i]
      if(previous > 0){
         const diffWithPrevious = v - previous
         // the logic for this early return is that we might not need to traverse
         // the whole array for example imagine this example 
         // [1,2,5,6,8,...n]
         // its clear that there is a gap between 5 and 2 so we can just 
         // conclude that 2+1 is the smallest postive integer not in our array 
         if(diffWithPrevious > 1) return previous +1;      
      }
      
      // check if smallest positive integer in array is not 1
      // if so return 1 
      if(previous == 0 && v > 1 ) return 1
      
      if(v <= smallestPositiveInteger && v>0)
         smallestPositiveInteger++
       previous = v
    }

    return smallestPositiveInteger
}


const arr =[-1,-2,1,3,10,9,3,2,3,3,10,2,7,99,100,10000,500,50,60,70,33]

console.log(findSmallestPositiveInteger(arr))
