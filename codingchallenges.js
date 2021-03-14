const dogAges = [5, 2, 4, 1, 15, 8, 3];
const dogAges2 = [16, 6, 10, 5, 6, 1, 4];

const toHumanAge = function(dogAge) {
    if (dogAge <= 2) {
        return (humanAge = dogAge * 2);
    } else if (dogAge > 2) {
        return (humanAge = 16 + dogAge * 4);
    }
};

const calcAverageHuman = function(dogAges) {
    const humanAges = dogAges.map(toHumanAge);
    console.log(humanAges);
    const adultHumanAges = humanAges.filter(function(humanAge) {
        return humanAge >= 18;
    });
    console.log(adultHumanAges);
    const average = adultHumanAges.reduce(
        (acc, adultHumanAge) => acc + adultHumanAge,
        0
    );
    console.log(average / adultHumanAges.length);
};
calcAverageHuman(dogAges);
calcAverageHuman(dogAges2);