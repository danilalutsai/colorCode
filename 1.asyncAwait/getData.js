function getData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(46);
    }, 1000)
  });
}

async function start() {
  // It waits for the promise to resolve or reject and returns the value
  const result = await getData();
  console.log(result);
}

start();

function start2() {
  getData()
    .then(result => {
      console.log(result);
    });
}

start2();
