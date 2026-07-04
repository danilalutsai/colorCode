async function getData() {
  const data = await fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast');
  const result = await data.json();
  console.log(result.title);
}

// Two function representing same result with async await and regular promise
function getData2() {
  fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
    .then(data => data.json())
    .then(result => {
      console.log(result.title)
    });
}

getData();
getData2();

// Async await rules
// 1. Async await need to use together in one function
// Except it can be used without async in JS Modules & Chrome Dev Tools
// 2. Async await only affects the Promise receiver not creator
// 3. You can await any function that returns the Promise
// 4. Any function can be converted to an async one
// 5. All async functions return a Promise
// 6. Error handling with try catch

function getData3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Something went wrong.');
    }, 1000);
  });
}

async function start() {
  try {
    const result = await getData3();
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

// This two function are representing the same output
function start2() {
  const result = getData3()
    .catch(error => {
      console.log(`Error: ${error}`);
    })
}

start(); // Error: Something went wrong.
start2(); // Error: Something went wrong.
