let sleepHours = {
    'monday': 7.5,
    'tuesday': 6.5,
    'wednesday': 8,
    'thursday': 7,
    'friday': 8.5,
    'saturday': 5.5,
    'sunday': 9.5,
};

const getSleepHours = day => sleepHours[day.toLowerCase()];

// testing above function
// console.log(getSleepHours('monday'));
// console.log(getSleepHours('sunday'));
// console.log(getSleepHours('Saturday'));


const getActualSleepHours = () => Object.values(sleepHours).reduce( (acc, cur) => acc + cur, 0);

const getIdealSleepHours = (idealHours = 8) => 7 * idealHours;


// testing above 2 functions
// console.log(getActualSleepHours());
// console.log(getIdealSleepHours());

function calculateSleepDebt() {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(7);
    if (actualSleepHours === idealSleepHours) return "You got the perfect amount of sleep!"
    return (actualSleepHours > idealSleepHours) 
        ? `You got more sleep than you need this week (over by ${actualSleepHours - idealSleepHours} hours).`
        : `You got too little sleep this week (under by ${idealSleepHours - actualSleepHours} hours).`;
}

console.log( calculateSleepDebt() );