// Starting Data

const dogAges = [5, 2, 4, 1, 15, 8, 3];
const dogAges2 = [16, 6, 10, 5, 6, 1, 4];

// Helpfull Function

const toHumanAge = function(dogAge) {
    if (dogAge <= 2) {
        return (humanAge = dogAge * 2);
    } else if (dogAge > 2) {
        return (humanAge = 16 + dogAge * 4);
    }
};

//  Final Function

const calcAverageHuman = function(dogAges) {
    const humanAges = dogAges.map(toHumanAge);

    const adultHumanAges = humanAges.filter(function(humanAge) {
        return humanAge >= 18;
    });

    const average = adultHumanAges.reduce(
        (acc, adultHumanAge) => acc + adultHumanAge,
        0
    );
    console.log(average / adultHumanAges.length);
};
calcAverageHuman(dogAges);
calcAverageHuman(dogAges2);

// Same function with using Chain and Arrow Function

const calcAverageChain = (dogAges) =>
    dogAges
    .map((dogAge) => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter((dogAge) => dogAge > 18)
    .reduce(
        (acc, adultHumanAge, i, arr) => acc + adultHumanAge / arr.length,
        0
    );

const avg1 = calcAverageChain(dogAges);
const avg2 = calcAverageChain(dogAges2);

console.log(avg1, avg2);
