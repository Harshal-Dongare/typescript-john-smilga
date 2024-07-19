// // interface userModel {
// //     name: string;
// //     age: number;
// //     gender: string;
// //     isMarried: boolean;
// // }

// const user1: {
//     name: string;
//     age: number;
//     gender: string;
//     isMarried: boolean;
// } = { name: "Harshal", age: 28, gender: "Male", isMarried: false };

// // console.log(user1);

// const bookTitle: string = "The Hobbit";
// let rollNo: number = 25;
// let isLicense: boolean = true;

// // console.log(bookTitle, rollNo, isLicense);

// // union type
// let someVariable: string | number = 23;

// // literal value type
// let orderStatus: "shipped" | "processing" | "delivered" | "cancelled";
// orderStatus = "processing";

// // not recommended
// let radomValue: any = 45;

// // array in TS
// const books: string[] = ["The Hobbit", "Hold My Hand", "The Art Of Deal"];
// console.log(books);

// const singer: (string | number)[] = ["Sonu Nigam", "Lata MangeshKar", 45];

// const book = { title: "book", cost: 20 };
// const pen = { title: "pen", cost: 10 };
// const notebook = { title: "notebook" };

// const items: { title: string; cost?: number }[] = [book, pen, notebook];
// console.log(items);

// const someObj = {};

//----------------------------------------------------------------------------

// let bike: { brand: string; year: number } = { brand: "yamaha", year: 2010 };
// // bike.year = "old"

// let laptop: { brand: string; year: number } = { brand: "Dell", year: 2020 };
// // let laptop2: { brand: string; year: number } = { brand: "Dell" };

// let product1 = { title: "shirt", price: 20 };
// let product2 = { title: "pants" };

// const products: { title: string; price?: number }[] = [product1, product2];
// products.push({ title: "shoes" });

//----------------------------------------------------------------------------

//* FUNCTION
function sayHi(name: string) {
    console.log(`Hello, ${name.toUpperCase()}`);
}

sayHi("Harshal");
// sayHi(3);

//* FUNCTION RETURNS TYPE
function calculateDiscount(price: number): number {
    return price * 0.9;
}

const finalPrice = calculateDiscount(200);

//* TRY TO AVOID USING ANY TYPE ANNOTATION IN THE PARAMETERS
function addThree(number: any) {
    const anotherNumber: number = 2;
    return number + anotherNumber;
}

const result = addThree(3);

//-------------------------------------------------------------------

//* CHECK WHETHER THE NAME IS PRESENT IN THE ARRAY AND RETURNS BOOLEAN
const nameList: string[] = ["Harshal", "John", "Peter"];

function isNamePresent(name: string): boolean {
    return nameList.includes(name);
}

let nameToCheck = "Harshal";

if (isNamePresent(nameToCheck)) {
    console.log(`${nameToCheck} is present`);
} else {
    console.log(`${nameToCheck} is not present`);
}

//* OPTIONAL PARAMETERS IN THE FUNCTION
function calculatePrice(price: number, discount?: number): number {
    return price - (discount || 0);
}
let priceAfterDiscount = calculatePrice(100, 20);

//* DEFAULT PARAMETERS IN THE FUNCTION
function calculateScore(
    initialScore: number,
    penaltyPoints: number = 0
): number {
    return initialScore - penaltyPoints;
}
let scoreWithPenalty = calculateScore(200, 20);
let scoreWithoutPenalty = calculateScore(200);

//* REST PARAMETERS IN THE FUNCTION
function sum(message: string, ...numbers: number[]): string {
    // let sum = 0;
    // for (let digit of numbers) {
    //     sum += digit;
    // }
    // return `${message} ${sum}`;

    const sum = numbers.reduce((accumulator: number, currentVal: number) => {
        return accumulator + currentVal;
    }, 0);
    return `${message} ${sum}`;
}

let result3 = sum("The sum is: ", 1, 2, 3, 4, 5);
console.log(result3);

//* VOID return type if you don't return anything
function logMessage(message: string): void {
    console.log(message);
}
logMessage("Hello, Typescript");

//* Using UNION TYPES AS FUNCTION PARAMETERS
function processInput(input: string | number): void {
    if (typeof input === "number") console.log(input * 2);
    if (typeof input === "string") console.log(input.toUpperCase());
}
processInput(3);
processInput("Harshal");

//* Type annotation while destructing an object in the function parameter
function createEmployee({ id }: { id: number }): {
    id: number;
    isActive: boolean;
} {
    return { id, isActive: id % 2 === 0 };
}

console.log(createEmployee({ id: 5 }));

//* PROBLEM STATEMENT
function processData(
    input: string | number,
    config: { reverse: boolean } = { reverse: false }
): number | string {
    if (typeof input == "number") return input * input;
    else {
        return config.reverse
            ? input.toUpperCase().split("").reverse().join("")
            : input.toUpperCase();
    }
}

console.log(processData(10));
console.log(processData("Hello"));
console.log(processData("Hello", { reverse: true }));
