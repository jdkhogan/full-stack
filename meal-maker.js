const menu = {
    _meal: '', // 2
    _price: 0, // 3 
    set meal(mealToCheck) {
        // 5 + 6
        if (typeof mealToCheck === 'string') {
            this._meal = mealToCheck; 
            return this._meal;
        }
    },
    set price(priceToCheck) {
        // 7
        if (typeof priceToCheck === 'number') {
            this._price = priceToCheck; 
            return this._price;
        }
    },
    get todaysSpecial() {
        if (this._meal && this._price) {
            return `Today's Special is ${this._meal} for $${this._price}`
        } else {
            return "Meal or price was not set correctly!";
        }
    },
};
console.log(menu);

// 4
// menu._meal = 12;
// menu._price = 'whaaat';
// console.log(menu);

// 8
console.log(menu.todaysSpecial);

menu.meal = 12;
// console.log(menu);

menu.meal = 'STEAKS';
// console.log(menu);

console.log(menu.todaysSpecial);

menu.price = 'nope';
// console.log(menu);

menu.price = 100;
// console.log(menu);

console.log(menu.todaysSpecial);