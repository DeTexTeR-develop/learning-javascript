// //old way of sending requests XML requests 

// const req = new XMLHttpRequest() //create new object 

// req.onload = function(data){                              //add on load to object
//     console.log("ALL done with requests!!!!!")
//     console.log(req)
//     console.log(this.response)  //this will return in html
// }
// req.onerror = function(){                                 //add on error to object
//     console.log("ERRROOORRR!!!!!")
//     console.log(this)
// }

// req.open('GET', 'https://icanhazdadjoke.com/')            
// // XMLHttpRequest.setRequestHeader("Accept", "application/json")
// req.send()








// //newer way of sending requests fetch apis not supported in internet explorer

// fetch('https://icanhazdadjoke.com/') //this gonna return a promise to us
//     .then((response) =>{                                       
//         /*
//         now this then is gonna run just the moment header files arrive this wont wait for whole data to arrive
//         and data doesnt come at once it comes in streams
//         so data wont be there in response
//         */
//         console.log("RESPONSE, WAITING TO PARSE...", response)
//         return response.json() //this returns a promise
//     })
//     /*
//     this means when all the data is back and is parsed to json then 
//     we can also write it as response.json().then(...) because that also returns a promis
//     */
//     .then((data)=>{
//         console.log("DATA PARSED " + data);
//     })
//     .catch((err) => {
//         console.log("OH noo!!", err);
//     })

// // using async and await for same above code

// const fetchApiData = async () =>{
// try{
//     let res = await fetch('https://icanhazdadjoke.com/') //this gonna return a promise to us
//     let data = await res.json()

//     console.log(data)
// }catch(e){
//     console.log("OHHHH NOOO ERRORRR!!!", e)
// }
// }



// /*last way to request is using a library named as axios

// we can use axios library in many ways by just pasting the script in our html just before our script tag

// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

// */

// axios.get('https://icanhazdadjoke.com/')
// .then(response => {
//     console.log(response.data)
// })
// .catch(er => {
//     console.log("OHHH NOOO ERROR!!!!", er)
// })

// // we can use async and await

// const fetchDataApi = async () =>{
//     try{
//         let res = await axios.get('https://icanhazdadjoke.com/')
//         console.log("SUCESS!!!", res.data);
//     }
//     catch(err){
//         console.log("OHH NOO ERRORR!!!",err)
//     }
// }

//setting headers using axios
const getDadJoke = async () =>{
    try{
        const config = { headers: { Accept: 'application/json' }}; //we can pass many headers      
        let res = await axios.get('https://icanhazdadjoke.com/' , config)
        console.log(res.data.joke);
    }
    catch(err){
        console.log(err)
    }
}




// ---> OOPS <-------

/*
prototypes in js
prototype mean blueprint for other object or template for other object to follow
like any array we create is a prototype of Array


*/

String.prototype.yell = function(){
    return this;
}


//factory function 

function makeColor(r,g,b){
    const color  = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function(){
        const {r,g,b} = this;
        return `rgb(${r},${g},${b})`;
    };
    color.hex = function(){
        const {r,g,b} = this;
        return `#code`
    }
    return color;

}
const firstColor = makeColor(35,100,150);


//create a blank plain js object;
//links (sets the constructor of) this object to another object;
//passes the newly created object from step1 as the this context;
// returns this if the function doesnt return its own object;

function Color(r,g,b){
    this.r = r;
    this.g = g;
    this.b = b;

}
 
Color.prototype.rgb = function(){
    const {r,g,b} = this;
    return `rgb${r},${g},${b}`;
}

Array.prototype.pop = function(){
    //we can override any function in prototype
}

class Color{
    constructor(r,g,b, name){
        this.r = r;    //this will create a varible inside with name of r 
        this.g = g;
        this.b = b;
        this.name = name;
    }
    greet(){
        console.log(this.b);
        console.log("Hello :)");        //we dont need to type prototype and stuff like we did back there 
                                        //class just collects everything togethor
    }
    innerRGB(){
        const {r,g,b} = this;
        return `${r}, ${g}, ${b}`;
    }

    rgb(){
        return `rgb(${this.innerRGB()})`
    }
    rgba(a){
        return `rgba(${this.innerRGB}, ${a})`
    }
}
const white = new Color(255, 255 , 255, 'white'); //this creates a object with this properties
const red = new Color(255, 67, 89, 'red');

//anytime we are inside a class this refers to the instance of the class(individual color object) unitl we use new
// when we use this inside new it refers to the individual object




//Extend and super


class Pet{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating!!!`

    }
}

class Cat extends Pet{

    constructor(name, age, livesleft = 9){
        super(name, age);
        this.livesleft = livesleft;
    }
    // eat(){
    //     return `${this.name} is eating!!!`
    // }
    meow(){
        return `meaaaaaoooo `
    }
}
class Dog extends Pet{
    // constructor(name, age){
    //     this.name = name;
    //     this.age = age;
    // }
    // eat(){
    //     return `${this.name} is eating!!!`;  
    // }
    sleeping(){
        return `${this.name} is sleeping `
    }
}