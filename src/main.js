var audio = document.getElementById("bgMusic");
audio.volume = 0.01;

var love = document.getElementById("audio-img");
var playerStatus = 0;
var oldSrc = "src/bgMusic.mp3"

love.addEventListener("click", function click() {
    console.log("Kocham moją Mądrą Dziewczynke <3")
    if (playerStatus == 0) {
        audio.src = ""
        playerStatus = 1
        love.style.animationName = "none"
    }
    else {
        audio.src = oldSrc
        playerStatus = 0
        love.style.animationName = "spin"
    }
})


var flip = document.getElementById("flip-card");
flip.addEventListener("click", function flipIt() {
    flip.classList.add("flip")
    flip.src = ""
})
