const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Clock {
  constructor(){
    const startTime = new Date();
    this.hours = startTime.getHours();
    this.minutes = startTime.getMinutes();
    this.seconds = startTime.getSeconds();

    this.printTime();

    setInterval(this._tick.bind(this), 1000);
  }

  printTime(){
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick(){
    this.seconds++;

    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes++;
    }
    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours++;
    }
    if (this.hours === 24) {
      this.hours = 0;
    }

    this.printTime();
  }
}

// const clock = new Clock();

function addNumbers(sum, numsLeft, completionCallback) { //sum = 1, numsLeft = 2
  if (numsLeft === 0) {
    completionCallback(sum);
  }

  if (numsLeft > 0) { //numsLeft = 2
    reader.question('Gimme a number! ', function (number) {
      let num = parseInt(number); //number = 2
      sum += num; //3
      numsLeft--; //1
      console.log(sum); // \n 3

      addNumbers(sum, numsLeft, completionCallback);
    });
  }
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
function askIfGreaterThan(el1, el2, callback) { // 1, 4, cb
  reader.question(`Is ${el1} > ${el2}? Type 'yes' or 'no': `, function(input) {
    if (input === 'yes') {
      callback(true);
    } else {
      callback(false);
    }
  });
}

// askIfGreaterThan(1, 2, function(boolean) {
//   console.log(boolean);
// });

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], function(isGreaterThan) {

      if (isGreaterThan === true) {
        let x = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = x;
        madeAnySwaps = true;
      }
    });
    i++;
    innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
  } else if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

innerBubbleSortLoop([1,4,3,2], 0, false, function(madeAnySwaps) {
  console.log("In outer bubble sort.");
});

function absurdBubbleSort(arr, sortCompletionCallback) {

}
