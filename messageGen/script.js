const weatherEmojis = {
    'hot': {
        'emoji': {
            '🌞':"Sun with face",
            '🌤️':"White sun with small cloud",
            '⛅':"Sun behind cloud",
        },
        'accessory': {
            'a towel': ""
        }   
    },
    'rainy': {
        'emoji': {
            '🌦️':"White sun behind cloud with rain",
            '🌧️':"Cloud with rain",
            '⚡':"High voltage sign",
        },
        'accessory': {
            '☂️':"an umbrella",
        }
    },
    'cold': {
        'emoji': {
            '🌨️':"Cloud with snow",
            '⛄':"Snowman without snow",
            '🌬️':"Wind blowing face",
        },
        'accessory': {
            '🧣':"a scarf",
            '🧤':"your gloves",
        }
    },
    'apocalyptic': {
        'emoji': {
            '🌪️':"Cloud with tornado",
            '🌊':"Water wave",
        },
        'accessory': {
            'a towel': ""
        }
    }
};

const randTemp = Math.floor(Math.random() * 130);

temp = 'cold';
if (randTemp > 30) {
    temp = 'rainy';
}
if (randTemp > 90) {
    temp = 'hot';
}
if (randTemp > 110) {
    temp = 'apocalyptic';
}

const emojiKeys = Object.keys(weatherEmojis[temp]['emoji']);
const tempEmoji = emojiKeys[Math.floor(Math.random() * emojiKeys.length)];

const accessoryKeys = Object.keys(weatherEmojis[temp]['accessory']);
const accessoryEmoji = accessoryKeys[Math.floor(Math.random() * accessoryKeys.length)];
const accessory = weatherEmojis[temp]['accessory'][accessoryEmoji];
// console.log(`${tempEmoji}`);
// console.log(`${accessoryEmoji} ${accessory}`);


const output = `Today's temp is ${randTemp}F.
It's ${temp} out there ${tempEmoji}
Better pack ${accessory}${accessoryEmoji}!`

console.log(output);
