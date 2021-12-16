const { on } = require('events');
const fs = require('fs');

const lines = fs
    .readFileSync("input.txt", { encoding: "utf-8" })
    .split("\n")
    .filter((x) => Boolean(x));


//part 1
//power consumption = gamma rate * epsilon rate
//gamma rate = most common bit in each position
//epsilon rate = least common bit in each position
//convert each rate from binary to decimal, then multiply to find power consumption

const length = lines[0].length;

//get the bits separated, count the bits
function getCount(lines) {
    const zeros = Array(length).fill(0);
    const ones = Array(length).fill(0);

    for (const line of lines) {
        const bits = [...line];
        bits.forEach((bit, index) => {
            if (bit === "0") {
                zeros[index]++;
            } else {
                ones[index]++;
            }
        })
    }
    return { zeros, ones };
}


//find gamma rate and epsilon rate

function findRates() {
    const { zeros, ones } = getCount(lines);
    let gamma = '';
    let epsilon = '';

    for (let i = 0; i < length; i++) {
        let bit = 0;
        if (ones[i] > zeros[i]) {
            bit = 1;
        }
        gamma += bit;
        epsilon += bit == 1 ? 0 : 1;
    }

    console.log(parseInt(gamma, 2) * parseInt(epsilon, 2));
}
findRates();



//part 2

//life support rating = oxygen generator rating * CO2 scrubber rating
//oxygen generator rating = most common bit of the relevant bit
//CO2 scrubber rating = least common

function getOxygenRating(lines, index = 0) {
    const { zeros, ones } = getCount(lines);
    let mostCommonBit = "1";
    if (zeros[index] > ones[index]) {
        mostCommonBit = "0";
    }

    const filtered = lines.filter((line) => line[index] == mostCommonBit);
    if (filtered.length == 1) {
        return filtered[0];
    }

    return getOxygenRating(filtered, index + 1);
}

function getCO2Rating(lines, index = 0) {
    const { zeros, ones } = getCount(lines);
    let leastCommonBit = "0";
    if (zeros[index] > ones[index]) {
        leastCommonBit = "1";
    }
    const filtered = lines.filter((line) => line[index] == leastCommonBit);
    if (filtered.length == 1) {
        return filtered[0];
    }

    return getCO2Rating(filtered, index + 1);
}

function findLifeSupportRating() {
    const oxygenRating = getOxygenRating(lines);
    const CO2Rating = getCO2Rating(lines);

    console.log(parseInt(oxygenRating, 2) * parseInt(CO2Rating, 2));
}
findLifeSupportRating();