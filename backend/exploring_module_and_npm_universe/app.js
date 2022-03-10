const {PI , square} = require('./math'); //if i only needed pi and square i can use this
const math = require('./math');
console.log(math);

//we get an empty object because in node all the data of one file doesnt get into other file we need to 
// export it to use it in this file it is not like server side js in which we get all the data just by
// including multiple script in html file

console.log(math.PI);
console.log(math.add(34,34));
console.log(math.square(4));


const allCats = require('./shelter');
console.log(allCats);



console.log(PI);