const fs = require('fs')

const lines = fs
    .readFileSync("input.txt", { encoding: "utf-8" })
    .split("\n")
    .filter((x) => Boolean(x));

console.log(lines);


//  for (i = 0; i > lines.length; i++) {
//     let direction = [i];

//  }

