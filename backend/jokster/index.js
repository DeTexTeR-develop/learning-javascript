//adding and requiring packages


const jokes = require('give-me-a-joke');
const colours = require('colors');
// console.log(colours);
// console.log(jokes)
jokes.getRandomCNJoke(function(joke){
    console.log(joke.rainbow);
})
jokes.getRandomDadJoke((joke) => {
    console.log(joke.rainbow)
})



//global packages

/*
earlier i added packages but i cannot use those packages outside the jokster directory so we use global packages
global packages can be required from outside of jokster packages    
to install something globally we add -g flag when installing
we cannot just access global packages through requiring we need to first link that package to the dir

in terminal
npm link cowsay

in code'

const variableName = require('packageName');
*/