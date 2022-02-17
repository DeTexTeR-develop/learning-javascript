//old way of sending requests XML requests 

const req = new XMLHttpRequest()

req.onload = function(data){
    console.log("ALL done with requests!!!!!")
    console.log(req)
    console.log(this.response)  //this will return in html
}
req.onerror = function(){
    console.log("ERRROOORRR!!!!!")
    console.log(this)
}

req.open('GET', 'https://icanhazdadjoke.com/')
// XMLHttpRequest.setRequestHeader("Accept", "application/json")
req.send()