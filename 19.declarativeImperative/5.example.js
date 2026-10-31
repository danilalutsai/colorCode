const fs = require("fs")
const files = fs.readdirSync("./directory")
for (const file of files) {
  console.log(file)
}

// -------------------
ls ./directory......
