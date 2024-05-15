const array = require('./array');

// let validNames = [];

// for (let i = 0 ; i < array.length ; i ++) {
//     if (array[i].name.startsWith('Ma') && array[i].price <= 10) {
//         console.log(array[i]);
//     }
// };
// console.log(validNames);
function searchCandies (string, cap) {


let list = array.filter(i => 
    i.name.toLowerCase().startsWith(string.toLowerCase()) && (i.price <= cap));


let list2 = list.map((i) => i.name);
return list2
};


// const searchCandies = (string, num) => {
//     const filteredCandies = array.filter(validNames(string));
//     return console.log(filteredCandies)
// };

module.exports = searchCandies;