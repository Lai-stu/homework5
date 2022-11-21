// Add js here.

var vid = document.getElementById("videoplayer");
vid.loop = false;
vid.autoplay = false;
vid.load();

var playButton = document.getElementById("play");
function playVid() {
  vid.play();
}
playButton.addEventListener("click", playVid);

var pauseButton = document.getElementById("pause");
function pauseVid() {
  vid.pause();
}
pauseButton.addEventListener("click", pauseVid);

var slowButton = document.getElementById("slower");
function slowVid() {
  if (vid.playbackRate > 0.5) {
    vid.playbackRate = vid.playbackRate / 2;
  } else {
    alert("Video is at slowest speed!");
  }
}
slowButton.addEventListener("click", slowVid);


var fastButton = document.getElementById("faster");
function fastVid() {
  if (vid.playbackRate < 2) {
    vid.playbackRate = vid.playbackRate * 2;
  } else {
    alert("Video is at fastest speed!");
  }
}
fastButton.addEventListener("click", fastVid);


var skipButton = document.getElementById("skip");
function skipVid() {
  video_time = vid.currentTime + 15;
  if (video_time > vid.duration) {
    vid.currentTime = 0;
  } else {
    vid.currentTime = video_time;
  }
}
skipButton.addEventListener("click", skipVid);

var volSlider = document.getElementById("slider");
var volume = document.getElementById("volume");
function setVol() {
  vid.volume = volSlider.value / 100;
  volume.innerHTML = vid.volume * 100 + "%";
}
volume.innerHTML = vid.volume * 100 + "%";
volSlider.addEventListener("change", setVol);

var muteButton = document.getElementById("mute");
function muteVid() {
  if (vid.muted) {
    muteButton.innerHTML = "Mute";
    vid.muted = false;
    volSlider.value = vid.volume * 100;
    volume.innerHTML = volSlider.value + "%";
  } else {
    muteButton.innerHTML = "unmute";
    vid.muted = true;
    volSlider.value = 0;
    volume.innerHTML = "0%";
  }
}
muteButton.addEventListener("click", muteVid);