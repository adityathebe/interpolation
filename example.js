let Interpolation = require('./interpolation');

// Given the following points (x, y), estimate the value of fx
// at x = 1

let x = [3, 4, 5, 6, 7, 8, 9];
let fx = [13, 21, 31, 43, 57, 73, 91];
let nf = new Interpolation(x, fx);
let result = nf.newtonForward(1);
console.log(result.toFixed(3)); // 3.000

// Display Difference Table
let d_table = nf.dTable();
console.log(d_table);

// Display Divided Difference Table
let dd_table = nf.ddTable();
console.log(dd_table);