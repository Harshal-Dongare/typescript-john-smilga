//* TUPLES

let person: [string, number] = ["Prajakta", 25];

let date: readonly [number, number, number] = [12, 15, 2001];

// date.push(5) -> TS will result in an error because of read only

function getPerson(): [string, number] {
    return ["Harshal", 26];
}

let randomPerson = getPerson();
console.log(randomPerson[0]);
console.log(randomPerson[1]);

// Optional Tuples
const susan: [string, number?] = ["susan"];

const susan = "susan";
