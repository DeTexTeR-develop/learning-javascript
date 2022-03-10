const input = document.querySelector('input')
input.addEventListener('keydown',  function(e){
    console.log(e.code)
})
input.addEventListener('keyup',  function(e){
   console.log(e.key)
}) 
window.addEventListener('keydown', function(e){
    // console.log(e.code) //lets say we are creating a game then we can use
    // // this add event listener on windows object so that we can see user input
    
    switch(e.code){
        case 'ArrowUp':
            console.log("UP!")
            break
        case 'ArrowDown':
            console.log("Down!")
            break;
        case 'ArrowLeft':
            console.log("Left")
            break;
        case 'ArrowRight':
            console.log("Right")
            break;
        default:
            console.log("nopppeeeeeeeeee!!!!!")
    }
})