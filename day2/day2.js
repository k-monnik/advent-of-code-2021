const fs = require('fs')

const lines = fs
    .readFileSync("input.txt", { encoding: "utf-8" })
    .split("\n")
    .filter((x) => Boolean(x))
    .map((x) => {
        const [direction, n] = x.split(" "); //splits each line on the space
        return {
            direction,
            n: parseInt(n)
        };
    });

const submarine = {
    position: 0,
    depth: 0
};

for (const line of lines) {
    switch (line.direction) {
        case "forward":
            submarine.position += line.n; //to add n to "forward" total
            break;
        case "up":
            submarine.depth -= line.n;
            break;
        case "down":
            submarine.depth += line.n;
            break;
    }
}

console.log(submarine.position * submarine.depth);

//part 2
let sub = {
    position: 0,
    depth: 0,
    aim: 0
};

for (const line of lines) {
    switch (line.direction) {
        case "forward":
            sub.position += line.n; //to add n to "forward" total
            sub.depth += sub.aim * line.n;
            break;
        case "up":
            sub.aim -= line.n;
            break;
        case "down":
            sub.aim += line.n;
            break;
    }
}

console.log(sub.position * sub.depth);






