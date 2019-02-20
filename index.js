'use strict';
function max(numbers){
  let largestNumber = numbers[0];
  let count = 0;
  while(count <= numbers.length){
    if(largestNumber < numbers[count]){
      largestNumber = numbers[count];
    }
    count ++;
  }
}