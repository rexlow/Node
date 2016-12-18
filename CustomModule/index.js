var date = require('date');

console.log('TEST 1: ' + date.getDay(0)); //TEST 1: Monday
console.log('TEST 2: ' + date.getDay(6)); //TEST 2: Sunday

console.log('TEST 3: ' + date.getMonth(0)); //TEST 3: January
console.log('TEST 4: ' + date.getMonth(11)); //TEST 4: December

console.log('TEST 5: ' + date.getDays()); //TEST 5: All seven days

console.log('TEST 6: ' + date.getMonths()); //TEST 6: All 12 months
