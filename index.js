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
  

//========================================================================================================
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

//==========================================================================================================

function average(numbers){
  let total = 0;
  numbers.array.forEach(number => {
    total += number;
  });
  return total/numbers.length;
}

//===========================================================================================================
function repeat(fn, n){
  for(let i = 0; i < n; i++){
    fn(); 
  }  
}
function hello(){
  console.log('Hello world');
}
function goodbye(){
  console.log('Goodbye world');
}
repeat(hello, 5);
repeat(goodbye, 5);

//============================================================================================================
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

//====================================================================================================================================
function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;
  return function(location){
    warningCounter ++;
    let oneTime = 'time';
    let noOfTimes = 'times';
    if(warningCounter === 0 || warningCounter > 1){
      console.log (`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${noOfTimes} today!`);
    }
    else{
      console.log (`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${oneTime} today!`);
    }
    
  };
}
const rocksWarning = hazardWarningCreator('Rocks on the Road');
const potholesWarning = hazardWarningCreator('Potholes on the Road');
const deadAnimalsWarning = hazardWarningCreator('Dead Animals on the Road'); 

rocksWarning('Main St and Pacific Ave');
// => DANGER There is a Rocks on the Road hazard at Main St and Pacific Ave
// => The Rocks on the Road hazard has triggered 1 time(s) today!

rocksWarning('Centinela Ave and Olympic Blvd');
// => DANGER There is a Rocks on the Road hazard at Centinela Ave and Olympic Blvd
// => The Rocks on the Road hazard has triggered 2 time(s) today!

// Invoke the other hazard creators you instantiated, too
potholesWarning('Howard street and Ridge Blvd');
potholesWarning('California street and Howard Blvd');
deadAnimalsWarning('McCormick Blvd and oakton Street');
deadAnimalsWarning('Main street and Dodge Blvd');
//=================================================================================================================================

let turtleSteps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
function isRightSteps(turtleStep){
  console.log(turtleStep);
  if(turtleStep[0] < 0 || turtleStep[1] < 0){
    //console.log(`turtle step 0 is ${turtleStep[0]} and turtle step 1 is ${turtleStep[1]}`);
    return false;
  }
  else{
    return true;
  }
}
const newTurtleStepsArray = turtleSteps.filter(isRightSteps);
console.log('forward and right steps ' + newTurtleStepsArray);

function addSteps(step){
  console.log(`turtle move 1st is ${step[0]} and turtle move2nd is ${step[1]}`);
  return (Math.abs(step[0]+step[1]));
}
const totalMovementArray = turtleSteps.map(addSteps);
console.log(totalMovementArray);

totalMovementArray.forEach(step =>console.log(step));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
function decode(words){
  //convert words to array
  let wordsArray =  words.split(' ');
  return  wordsArray.reduce(function(accumulater, word){
    if(word.length === 3){
      accumulater += ' ';
    }
    else{
      accumulater += word[word.length-1].toUpperCase();
    }
    return accumulater;
  }, ' ');
}
console.log(decode(input));



