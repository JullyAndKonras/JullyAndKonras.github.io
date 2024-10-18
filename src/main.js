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

window.alert("Ukryta misja! Znajdz nieprawdziwe informacje na stronie, kliknij je i odkryj hasło. (Hasło przekazane Konraś do godziny 12am dnia 18.10.24 gwarantuje nagrode!).\nPowodzenia Użytkowniu!")

var event1 = document.getElementById("event1");
event1.addEventListener("click", function event1() {
    window.open("event1.html")
})

var event2 = document.getElementById("event2");
event2.addEventListener("click", function event1() {
    window.open("event2.html")
})

var event3 = document.getElementById("event3");
event3.addEventListener("click", function event1() {
    window.open("event3.html")
})

