'use strict';
function max(numbers) {  
  let largestNumber = numbers[0];
  let count = 0;
  while(count <= numbers.length){
    if(largestNumber < numbers[count]){
      largestNumber = numbers[count];
    }
    count ++;
  }
  return largestNumber;
}
  
function min(numbers) {
  // your code here
  let smallestNumber = numbers[0];
  let count = 0;
  while(count <= numbers.length){
    if(smallestNumber > numbers[count]){
      smallestNumber = numbers[count];
    }
    count ++;
  }
  return smallestNumber;
}

