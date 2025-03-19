var audio = document.getElementById("bgMusic");
audio.volume = 0.01;
var audioImg = document.getElementById("audio-img");
var love = document.getElementById("audio-img");
var playerStatus = 0;
var oldSrc = "src/bgMusic.mp3"
var library = document.getElementById("library");
var musicSelect = document.getElementById("music-select");
var audioTitle = document.getElementById("audio-title");

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

function changeMusic(music){
    audio.src="src/"+music+".mp3"
    audioImg.src="src/music-icons/"+music+".png"
    oldSrc = "src/"+music+".mp3"
    audioTitle.innerText = music
    love.style.animationName = "spin"
    playerStatus = 0;
}


var flip = document.getElementById("flip-card");
flip.addEventListener("click", function flipIt() {
    flip.classList.add("flip")
    flip.src = ""
})

library.addEventListener("click", function showDisks() {
    musicSelect.style.display = "flex"
})

musicSelect.addEventListener("click", function hideDisks() {
    musicSelect.style.display = "none"
})