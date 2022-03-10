const form = document.querySelector("#formPrevent");
const input = document.querySelector("#catsName");
const list = document.querySelector("#oldList");
const dltBtn = document.querySelector("#btnDlt");

form.addEventListener('submit', function(e){
	e.preventDefault();
	const newItemInList = document.createElement("LI");
	newItemInList.innerText = ">>>" + input.value;
	list.append(newItemInList);
	input.value = "";
});
dltBtn.addEventListener('clicl', function(){
	list.removeChild()
})

//





// callBack Hell



searchMoviesApi('amadeus', ()=>{
	saveToDb(movies, ()=>{
		//if this doesnt work run --
	}, () => {				
		// run this	
	})				//if the api is down run			
}, () => {
		//this 
})


//how we make our own promise

new Promise((resolve, reject)=>{ // always take 2 inputs resolved and rejected
	resolve();
});


const fakeRequest = (url) =>{
	const randNum = maths.random();
	return new Promise((resolve, reject)=>{
		setTimeout(() => {
			if(randNum < 0.7){
				resolve("YOUR FAKE DATA IS HERE");
			}
			reject();
		}, 3000)
	})
}

fakeRequest("./asdfasd")
	.then((data)=>{
		console.log("Done with request!!");
		console.log("data is:", data)
	})
	.catch((err)=>{
		console.log(err)
	})




const delayColorChange = (color, delay ) =>{
	new Promise((resolve, reject) => {
		setTimeout(() => {
			document.body.style.backgroundColor = color;
			resolve();
		}, delay)
	})
}


delayColorChange('red', 1000)
.then(() => {
	return delayColorChange('orange', 1000)
})
.then(() => {
	return delayColorChange('green', 1000)
})
.then(() => {
	return delayColorChange('yellow', 1000)
})
.then(() => {
	return delayColorChange('pink', 1000)
})



//ASYNC FUNCTION

//you just add async in front of function then that function is async function 
//async function means that function returns promise without mentioning it


async function hello(){

}

const sing = async () =>{
	throw new Error("AAAHHHHHH!!!!!");
	return 'LALALALALLA';  //we can reject a promise by throwing a error	
}

sing().then((data) =>{
	console.log("promise resolved with", data); 
})
.catch((err) => {
	console.log("OH nooooo errorr!!!");
	console.log(err);
})






const login = async (username , password) =>{
	if(!username || !password){
		throw new Error("Missing credentials");
	}
	if(username == 'ujjwalsingh90' && password == "mybrotherisgoodfornothing"){
		return 'welcome';
	}
	throw new Error("invalid username or password")
}



login('ujjwal')
.then((msg) => {
	console.log("logged in")
	console.log(msg);
})
.catch((err) => {
	console.log("OHHHHHH noooo error!!!");
	console.log(err);
}) 



//AWAIT 

async function rainbow(){
	await delayColorChange('red', 1000)
	 //await hold the function till the promise is resolved 
	await delayColorChange ('orange',1000)
	await delayColorChange ('yellow',1000)
	await delayColorChange ('pink',1000)
	await delayColorChange ('green',1000)
	await delayColorChange ('voilet',1000)
	return "All Done"; 
}

rainbow.then(() => {
	console.log("Its over!!!");
})





/*
-------------->AJAX<----------------

so ajax stands for asyncronous javascript and xml {although we dont use xml now that often}, now we use 
json instead of xml (AJAX -> AJAJ)

ajax allows websites to update data asynchronously by exchanging data with a server
in other ways its request to server to update web page 



-------------->JSON<-----------------

json is a format in which we recieve data or send data, we can do this with html, xml,text, etc but mostly 
we use json. json stands for java script object notation
we can use JSON.parse(data) {inbuild function in javascript} to convert it into javascript objects

similarly we can convert objects into json by using inbuild function JSON.stringify(object))




-------------->QUERY STRING AND HEADER<-------------------

so when we use an api we can specify, what we are looking for example-

https://developer.mozilla.org/en-US/search?q=color 
(this is not a api its just a website but we can perform functions on that)

so in this url search?q=color(this is the syntax) q stands for query and color is what we are looking for

header is suppose we recieve data in html format then we can (if the api supports this) use header to change 
its format in json or something else 

https://icanhazdadjoke.com/api you can test on this site



*/

