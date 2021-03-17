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

dogs.find((dog) => {
    dog.owners.includes("Sarah");
});