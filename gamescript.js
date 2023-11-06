// function randomWord(){
//     let ranObj = wordList[Math.floor(Math.random()*wordList.length)];
//     let word = ranObj.word
//     console.log(word);

// }
// randomWord();

let scoreDisplay = sessionStorage.getItem("score");
let scoreTag = document.getElementById("score");
scoreTag.textContent = `Score: ${scoreDisplay}`