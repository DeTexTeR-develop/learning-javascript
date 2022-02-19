//old way of sending requests XML requests 

const req = new XMLHttpRequest() //create new object 

req.onload = function(data){                              //add on load to object
    console.log("ALL done with requests!!!!!")
    console.log(req)
    console.log(this.response)  //this will return in html
}
req.onerror = function(){                                 //add on error to object
    console.log("ERRROOORRR!!!!!")
    console.log(this)
}

req.open('GET', 'https://icanhazdadjoke.com/')            
// XMLHttpRequest.setRequestHeader("Accept", "application/json")
req.send()








//newer way of sending requests fetch apis not supported in internet explorer

fetch('https://icanhazdadjoke.com/') //this gonna return a promise to us
    .then((response) =>{                                       
        /*
        now this then is gonna run just the moment header files arrive this wont wait for whole data to arrive
        and data doesnt come at once it comes in streams
        so data wont be there in response
        */
        console.log("RESPONSE, WAITING TO PARSE...", response)
        return response.json() //this returns a promise
    })
    /*
    this means when all the data is back and is parsed to json then 
    we can also write it as response.json().then(...) because that also returns a promis
    */
    .then((data)=>{
        console.log("DATA PARSED " + data);
    })
    .catch((err) => {
        console.log("OH noo!!", err);
    })

// using async and await for same above code

const fetchApiData = async () =>{
try{
    let res = await fetch('https://icanhazdadjoke.com/') //this gonna return a promise to us
    let data = await res.json()

    console.log(data)
}catch(e){
    console.log("OHHHH NOOO ERRORRR!!!", e)
}
}



/*last way to request is using a library named as axios

we can use axios library in many ways by just pasting the script in our html just before our script tag

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

*/

axios.get('https://icanhazdadjoke.com/')
.then(response => {
    console.log(response.data)
})
.catch(er => {
    console.log("OHHH NOOO ERROR!!!!", er)
})

// we can use async and await

const fetchDataApi = async () =>{
    try{
        const res = await axios.get('https://icanhazdadjoke.com/')
        console.log("SUCESS!!!", res.data);
    }
    catch(err){
        console.log("OHH NOO ERRORR!!!",err)
    }
}