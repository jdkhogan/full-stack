// The scope of `random` is too loose 

const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
    const events = ['Marathon', 'Triathlon', 'Pentathlon'];
    return events[random];
};

// The scope of `days` is too tight 
const getTrainingDays = event => {
    const dayArr = {
        'Marathon': 50,
        'Triathlon': 100,
        'Pentathlon': 200
    }

    return dayArr[event];
};

// The scope of `name` is too tight 
const logEvent = (name, event) => {
    console.log(`${name}'s event is: ${event}`);
};

const logTime = (name,days) => {
    console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 
const name = 'Nala';

logEvent(name, event);
logTime(name, days);


const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';
 
logEvent(name2, event2);
logTime(name2, days2);