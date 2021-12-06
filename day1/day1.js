const fs = require('fs');

const lines = fs
    .readFileSync("input.txt", { encoding: "utf-8" })
    .split("\n")
    .filter((x) => Boolean(x))
    .map((x) => parseInt(x));

let increase = 0;

//part 1
for (let i = 1; i < lines.length; i++) {
    const previous = lines[i - 1];
    const current = lines[i];
    if (current > previous) {
        increase++;
    }
}

//console.log(increase);

//part 2

let increase2 = 0;

for (let i = 3; i < lines.length; i++) {
    const previous = lines[i - 3];
    const current = lines[i];
    if (current > previous) {
        increase2++;
    }
}
console.log(increase2);