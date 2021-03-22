// find method

const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 2222,
};

const account2 = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: "Steven Thomas Williams",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: "Sarah Smith",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find((acc) => acc.owner === "Jessica Davis");

console.log(account);

// some and every

console.log(movements);

// Equality
const theDeposit = movements.includes(-130);
// Condition
const anyDeposits = movements.some((mov) => mov > 5000);

console.log(anyDeposits);

// Every

console.log(movements.every((mov) => mov > 0));

// flat and flatmap

const arr = [
    [1, 2, 3],
    [4, 5, 6], 7, 8, 9
];

console.log(arr.flat());

const arrDeeper = [
    [1, [2, 3]],
    [4, [5, 6]], 7, 8, 9
];

console.log(arrDeeper.flat());
//  flat method goes only one level deep (like above) but we can use argument to define the level
console.log(arrDeeper.flat(2));

// sort method works by default on strings

const owners = ["jonas", "alex", "martha", "zach"];

console.log(owners.sort());

const movements2 = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];

// Ascendig
movements2.sort((a, b) => a - b);

// Descending
movements2.sort((a, b) => b - a);
console.log(movements2);

// Fill method

const x = new Array(7);

x.fill(1, 3, 5);

console.log(x);

const arr2 = [1, 2, 3, 4, 5, 6, 7];

arr2.fill(23, 4, 6);
console.log(arr2);

// From function

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (curr, i) => i + 1);
console.log(z);

const diceRoll = Array.from({ length: 100 },
    (curr, i) => Math.floor(Math.random() * 6) + 1
);

console.log(diceRoll);

const movementsUI = Array.from(document.querySelectorAll(".movements__value"));
console.log(movementsUI);

// Practise Array Methods

const totals = accounts
    .map((tot) => (tot = tot.movements))
    .flat()
    .filter((tot2) => tot2 > 0)
    .reduce((curr, tot3) => curr + tot3, 0);
console.log(totals);

const totals2 = accounts
    .map((tot) => (tot = tot.movements))
    .flat()
    .filter((tot2) => tot2 > 1000);
console.log(totals2.length);

const totals3 = accounts
    .flatMap((acc) => acc.movements)
    .reduce(
        (sums, curr) => {
            curr > 0 ? (sums.deposits += curr) : (sums.withdrawals += curr);
            return sums;
        }, { deposits: 0, withdrawals: 0 }
    );

console.log(totals3);

const convertTittleCase = function(title) {
    const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
    const expections = ["a", "an", "the", "but", "or", "on", "in", "with"];
    const titleCase = title
        .toLowerCase()
        .split(" ")
        .map((word) =>
            expections.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join(" ");

    return capitalize(titleCase);
};

console.log(convertTittleCase("a NICE A SEE WITH YOU"));

const dogs = [
    { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
    { weight: 8, curFood: 200, owners: ["Matilda"] },
    { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
    { weight: 32, curFood: 340, owners: ["Michael"] },
];

dogs.forEach(function(dog) {
    dog.reccommendedFood = dog.weight ** 0.75 * 28;
    console.log(dog);
});

console.log(dogs);

dogs.find(function(dog) {
    if (dog.owners.includes("Sarah")) {
        dog.reccommendedFood > dog.curFood ?
            console.log("Sarah's dog eats too little") :
            console.log("Sarah dogs eats too much");
    }
});

const ownerEatTooMuch1 = [];
const ownerEatTooLittle1 = [];

dogs.map((dog) => {
    if (dog.curFood > dog.reccommendedFood) {
        ownerEatTooMuch1.push(dog.owners);
        ownerEatTooMuch1.flat();
    } else if (dog.curFood < dog.reccommendedFood) {
        ownerEatTooLittle1.push(dog.owners);
        ownerEatTooLittle1.flat();
    }
});

const ownerEatTooMuch = ownerEatTooMuch1.flat();
const ownerEatTooLittle = ownerEatTooLittle1.flat();

console.log(ownerEatTooMuch, ownerEatTooLittle);

console.log(
    `${ownerEatTooLittle[0]} and ${ownerEatTooLittle[1]} and ${ownerEatTooLittle[2]}'s dogs eat too little`
);

console.log(
    `${ownerEatTooMuch[0]} and ${ownerEatTooMuch[1]} and ${ownerEatTooMuch[2]}'s dogs eat too much`
);

console.log(dogs.some((dog) => dog.curFood === dog.reccommendedFood));

dogs.forEach((dog) => {
    if (
        dog.curFood > dog.reccommendedFood * 0.9 &&
        dog.curFood < dog.reccommendedFood * 1.1
    ) {
        console.log("true");
    } else {
        console.log("false");
    }
});

const okayDogs = [];

dogs.map((dog) => {
    if (
        dog.curFood > dog.reccommendedFood * 0.9 &&
        dog.curFood < dog.reccommendedFood * 1.1
    ) {
        okayDogs.push(dog);
    }
});

console.log(okayDogs);

console.log(23 === 23.0);

console.log(+"23");

console.log(Number.parseInt("3.10px", 10));
console.log(Number.parseFloat("3.10px", 10));

// Checking if value is a number
console.log(Number.isNaN(+"23X"));
console.log(Number.isFinite(20));

console.log(Math.sqrt(25));
console.log(Math.max(23, 12, 15, 53));
console.log(Math.min(23, 12, 15, 53));
console.log(Math.PI * Number.parseFloat("10px") ** 2);
console.log(Math.trunc(Math.random() * 10) + 1);

// Rounding inteegtes

console.log(Math.trunc(23.3));
console.log(Math.round(23.6));
console.log(Math.trunc(23.3));
console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));
console.log(Math.floor(23.3));
console.log(Math.floor(23.9));

// Rounding decimals

console.log(+(2.345).toFixed(2));

// Reminder operator

console.log(5 % 2);
console.log(8 % 3);

console.log(7 % 2);

const EvenOrOdd = function(number) {
    number % 2 === 0 ? console.log("Its even") : console.log("Its odd");
};

EvenOrOdd(3);

// labelBalance.addEventListener("click", function() {
//     [...document.querySelectorAll(".movements__row")].forEach((mov, i) => {
//         if (i % 2 === 0) mov.style.backgroundColor = "orangered";
//     });
// });

console.log(BigInt(4213312421421412341241));

console.log(1000);

// Create a Date

// const now = new Date();
// console.log(now);
// console.log(new Date("aug 02 2020 18:04"));
// console.log(new Date(account1.movementsDates[0]));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(214222509099));