function reverseArray(arr) {
    let revArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        revArr.push(arr[i]);
    }
    return revArr;
}

// test case 1
const sentence = ['sense.','make', 'all', 'will', 'This'];
// reverseArray(sentence); 
// Should return ['This', 'will', 'all', 'make', 'sense.'];

// console.log(reverseArray(sentence));



const greetAliens = arr => {
    for (let name of arr) {
        console.log(`Oh powerful ${name}, we humans offer our unconditional surrender!`);
    }
}

// test case 2
// const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
//  greetAliens(aliens);
// Should print:
// Oh powerful Blorgous, we humans offer our unconditional surrender! 
// Oh powerful Glamyx, we humans offer our unconditional surrender! 
// Oh powerful Wegord, we humans offer our unconditional surrender! 
// Oh powerful SpaceKing, we humans offer our unconditional surrender! 


// test case 3
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
 
const convertToBaby = arr => {
    const output = [];
    for (let animal of arr) {
        output.push('baby ' + animal);
    }
    return output;
}

// const babyAnimals = convertToBaby(animals); 
// console.log(babyAnimals);
// Should return ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human'];


// test case 4
const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      const results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let num of arr) {
            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            powerOfTwo = 1;
            while (powerOfTwo < num) {
                powerOfTwo *= 2;
            }
            results.push(powerOfTwo);
      }
      return results;
}

// console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]


// test case 5
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:
const declineEverything = arr => arr.forEach(politelyDecline);

// declineEverything(veggies);

const acceptEverything = arr => arr.forEach( veg => 
    console.log(`Ok, I guess I will eat some ${veg}.`)
);

acceptEverything(veggies);