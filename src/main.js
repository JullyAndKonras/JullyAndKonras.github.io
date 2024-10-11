var audio = document.getElementById("bgMusic");
audio.volume = 0.01;

var flip = document.getElementById("flip-card");
flip.addEventListener("click",function flipIt(){
    flip.classList.add("flip")
    flip.src=""
})
