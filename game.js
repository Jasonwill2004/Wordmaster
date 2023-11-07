const wordList = [
    {
        word: "python",
        hint: "programming language"
    },
    {
        word: "guitar",
        hint: "a musical instrument"
    },
    {
        word: "aim",
        hint: "a purpose or intention"
    },
    {
        word: "venus",
        hint: "planet of our solar system"
    },
    {
        word: "gold",
        hint: "a yellow precious metal"
    },
    {
        word: "ebay",
        hint: "online shopping site"
    },
    {
        word: "golang",
        hint: "programming language"
    },
    {
        word: "coding",
        hint: "related to programming"
    },
    {
        word: "matrix",
        hint: "science fiction movie"
    },
    {
        word: "bugs",
        hint: "related to programming"
    },
    {
        word: "avatar",
        hint: "epic science fiction film"
    },
    {
        word: "gif",
        hint: "a file format for image"
    },
    {
        word: "mental",
        hint: "related to the mind"
    },
    {
        word: "map",
        hint: "diagram represent of an area"
    },
    {
        word: "island",
        hint: "land surrounded by water"
    },
    {
        word: "hockey",
        hint: "a famous outdoor game"
    },
    {
        word: "chess",
        hint: "related to an indoor game"
    },
    {
        word: "viber",
        hint: "a social media app"
    },
    {
        word: "github",
        hint: "code hosting platform"
    },
    {
        word: "png",
        hint: "a image file format"
    },
    {
        word: "silver",
        hint: "precious greyish-white metal"
    },
    {
        word: "mobile",
        hint: "an electronic device"
    },
    {
        word: "gpu",
        hint: "computer component"
    },
    {
        word: "java",
        hint: "programming language"
    },
    {
        word: "google",
        hint: "famous search engine"
    },
    {
        word: "venice",
        hint: "famous city of waters"
    },
    {
        word: "excel",
        hint: "microsoft product for windows"
    },
    {
        word: "mysql",
        hint: "a relational database system"
    },
    {
        word: "nepal",
        hint: "developing country name"
    },
    {
        word: "flute",
        hint: "a musical instrument"
    },
    {
        word: "crypto",
        hint: "related to cryptocurrency"
    },
    {
        word: "tesla",
        hint: "unit of magnetic flux density"
    },
    {
        word: "mars",
        hint: "planet of our solar system"
    },
    {
        word: "proxy",
        hint: "related to server application"
    },
    {
        word: "email",
        hint: "related to exchanging message"
    },
    {
        word: "html",
        hint: "markup language for the web"
    },
    {
        word: "air",
        hint: "related to a gas"
    },
    {
        word: "idea",
        hint: "a thought or suggestion"
    },
    {
        word: "server",
        hint: "related to computer or system"
    },
    {
        word: "svg",
        hint: "a vector image format"
    },
    {
        word: "jpeg",
        hint: "a image file format"
    },
    {
        word: "search",
        hint: "act to find something"
    },
    {
        word: "key",
        hint: "small piece of metal"
    },
    {
        word: "egypt",
        hint: "a country name"
    },
    {
        word: "joker",
        hint: "psychological thriller film"
    },
    {
        word: "dubai",
        hint: "developed country name"
    },
    {
        word: "photo",
        hint: "representation of person or scene"
    },
    {
        word: "nile",
        hint: "largest river in the world"
    },
    {
        word: "rain",
        hint: "related to a water"
    },
    {
        word: "jason",
        hint: "founder of this game"
    },
]

const inputs = document.querySelector(".inputs")
const resetBtn = document.querySelector(".reset-btn")
const hint = document.querySelector(".hint span")
const wrongLetter = document.querySelector(".wrong-letter span")
const guessLeft = document.querySelector(".guess-left span")
const typingInput = document.querySelector(".typing-input")

let word,maxGuesses,corrects=[],incorrects = [];
let score = 0;
let correctSound = new Audio("./assets/mixkit-correct-answer-notification-947.wav")
let wrongSound = new Audio("./assets/mixkit-wrong-answer-bass-buzzer-948-[AudioTrimmer.com].wav")
let goSound = new Audio("./assets/mixkit-spaceship-system-break-down-2959.wav")


function randomWord(){
    // getting random words from wordlist
    let ranObj = wordList[Math.floor(Math.random()*wordList.length)];
    word = ranObj.word
    maxGuesses=8; corrects=[];incorrects = []; // getting word of random objects
    console.log(word);

    hint.innerText=ranObj.hint
    guessLeft.innerText=maxGuesses;

    let html = ""
    for (let i = 0; i < word.length; i++) {
        html+=`<input type="text" disabled >`
        
    }
    inputs.innerHTML=html

}
randomWord();

function initGame(e) {
    let key = e.target.value
    if(key.match(/^[A-Za-z]+$/)&& !incorrects.includes(` ${key}`)&& !corrects.includes(key)){
        console.log(key);
        if(word.includes(key)) {
            for (let i = 0; i < word.length; i++) {
                if(word[i] === key) {
                    corrects.push(key)
                    inputs.querySelectorAll("input")[i].value = key;
                    correctSound.play()
                }
            }
        } else{
            maxGuesses-- //decreases the guess by 1
            incorrects.push(`${key}`)
            wrongSound.play()
        } 
        guessLeft.innerText= maxGuesses;
        wrongLetter.innerText = incorrects;
        
        
    }
    typingInput.value="";   

    setTimeout(() => {
        if(corrects.length === word.length) {
            goSound.play()
            alert(`Congrats! You found the word ${word.toUpperCase()}`);
            score++;

            sessionStorage.setItem("score", score)

            return randomWord();
        } else if(maxGuesses < 1) {
            window.open("gameover.html", "_self")
            for(let i = 0; i < word.length; i++) {
                inputs.querySelectorAll("input")[i].value = word[i];
            }
        }
    }, 100);
}     


resetBtn.addEventListener("click",randomWord)
typingInput.addEventListener("input", initGame);
document.addEventListener("click", () => typingInput.focus());  
sessionStorage.setItem("score" ,"0")