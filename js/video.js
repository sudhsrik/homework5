// Add js here.
var vid = document.getElementById("videoplayer");
window.addEventListener("load", (event) => {
    vid.autoplay =true;
});

document.getElementById("play").addEventListener("click", (event) => {
    vid.play();
});

document.getElementById("pause").addEventListener("click", (event) => {
    vid.pause();
});

document.getElementById("slower").addEventListener("click", (event) => {
    if (vid.playbackRate == 2){
        vid.playbackRate = 1;
    }
    else if (vid.playbackRate == 1) {
        vid.playbackRate = 0.5;
    }
    else {
        alert("Video is at slowest speed");
    }
});

document.getElementById("faster").addEventListener("click", (event) => {
    if (vid.playbackRate == 0.5){
        vid.playbackRate = 1;
    }
    else if (vid.playbackRate == 1) {
        vid.playbackRate = 2;
    }
    else {
        alert("Video is at fastest speed");
    }
});

document.getElementById("skip").addEventListener("click", (event) => {
    if (vid.currentTime >= vid.duration - 15)
        vid.currentTime = 0;
    else
        vid.currentTime += 15;
    
});

var muteButton = document.getElementById("mute");

muteButton.addEventListener('click', (event) => {
    if (vid.muted == true)
    {
        vid.muted = false;
        muteButton.innerHTML = '<button id="mute"> Mute </button>';
    }
    else
    {
        vid.muted = true;
        muteButton.innerHTML = '<button id="mute"> Unmute </button>';
    }
});

var volumeButton = document.getElementById("slider");

volumeButton.addEventListener('change', (event) => {
    vid.volume = volumeButton.value / 100;
});