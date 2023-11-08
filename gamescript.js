

let scoreDisplay = sessionStorage.getItem("score");
let scoreTag = document.getElementById("score");
scoreTag.textContent = `Score: ${scoreDisplay}`
let button = document.getElementById("started")
let bTn = document.getElementById("home")

button.onclick=()=>{
    window.open("./game.html","_self");// open game window
}

bTn.onclick=()=>{
    window.open("./index.html","_self");
}