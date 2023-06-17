console.log("this is my first javascript file"); //first script
console.log("mastering console object")  //second script with console

// first counter function 
let counter = 0;

function incrementCounter() {
  console.log(counter);
  counter++;

  if (counter <= 10) {
    setTimeout(incrementCounter, 1000); // Change the interval duration as needed (in milliseconds)
  }
}

incrementCounter();
