let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;
let runnerAge = 99;

if (runnerAge >= 18 && registeredEarly) raceNumber += 1000;

ageloop:
if (runnerAge >= 18) {
    if (runnerAge >= 100) {
        console.log(`You're ${runnerAge}. You sure?`);
        break ageloop;
    }
    let output = `Runner ${raceNumber}, you will start at `;
    if (registeredEarly) { // adult early registrants
        output += '9:30am, since you registered early.';
    } else { // adult regular registrants
        output += '11:00am.';
    }
    console.log(output);
} else { //all youth registrants
    console.log(`Runner ${raceNumber}, all youth registrants run at 12:30 pm (regardless of registration date).`);
}