const { METHODS } = require("http");

const add = (a,b) => a+b;
const PI = 3.1231;
const square = x => x * x;

// i can also do

const math = {
    PI : PI,
    add: add,
    square: square
}

module.exports = math;

// i can also do add this properties to module.exports

module.exports.subtract = (x, y) => x-y;



// to export data from this file to other file we need to use module.exports() and data of module.exports will be available
// to other files which require and requested this file

// module.exports = "hello"
// we generally dont use this METHODS

module.exports.add = add;
module.exports.PI = PI;
module.exports.square = square;



/*
    we have a shorter syntax the exports
    the exports variable is available within a module file level scope and it assigns the value of 
    module.exports before the module is evaluated

    module.exports.f can be written as exports.f
    however when a value is assigned to exports, it is no longer bound to module.exports
*/

exports.PI= PI;
exports.add = add;


//requiring Directory


