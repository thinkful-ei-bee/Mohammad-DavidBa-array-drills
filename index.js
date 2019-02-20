'use strict';
// function max(numbers) {  
//   let largestNumber = numbers[0];
//   let count = 0;
//   while(count <= numbers.length){
//     if(largestNumber < numbers[count]){
//       largestNumber = numbers[count];
//     }
//     count ++;
//   }
//   return largestNumber;
// }
  
// function min(numbers) {
//   // your code here
//   let smallestNumber = numbers[0];
//   let count = 0;
//   while(count <= numbers.length){
//     if(smallestNumber > numbers[count]){
//       smallestNumber = numbers[count];
//     }
//     count ++;
//   }
//   return smallestNumber;
// }

// function average(numbers){
//   let total = 0;
//   numbers.array.forEach(number => {
//     total += number;
//   });
//   return total/numbers.length;
// }

// function repeat(fn, n){
//   for(let i = 0; i < n; i++){
//     fn(); 
//   }  
// }
// function hello(){
//   console.log('Hello world');
// }
// function goodbye(){
//   console.log('Goodbye world');
// }
// repeat(hello, 5);
// repeat(goodbye, 5);


function filter(arr, fn) {
  let newArray = [];
  for(let i = 0; i < arr.length; i++){
    if(fn(arr[i])){
      newArray.push(arr[i]);
    }    
  }
  return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === '';
});

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES
