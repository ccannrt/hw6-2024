var video = document.getElementById("player1");
var play = document.getElementById("play");
var pause = document.getElementById("pause");
var slow_down = document.getElementById("slower");
var speed_up = document.getElementById("faster");
var skip_ahead = document.getElementById("skip");
var mute = document.getElementById("mute");
var volume_slider = document.getElementById("slider");
var volume_value = document.getElementById("volume");
var old_school = document.getElementById("vintage");
var original = document.getElementById("orig");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.load();
	video.loop = false;
});

play.addEventListener("click", function() {
	video.play();
	video.volume = 0.2;
	console.log(video.volume);
});

pause.addEventListener("click", function() {
	video.pause();
})

slow_down.addEventListener("click", function() {
	let currentRate = video.playbackRate;
	console.log(currentRate)
	video.playbackRate = currentRate - 0.1;
})

speed_up.addEventListener("click", function() {
	let currentRate = video.playbackRate;
	video.playbackRate = currentRate + 0.1;
	console.log(currentRate)
})

skip_ahead.addEventListener("click", function() {
	console.log(video.currentTime);
	if ((video.duration - video.currentTime) < 10) {
		video.pause();
		video.currentTime = 0;
		video.play();
	}
	else {
		video.currentTime += 10;
	}
})

mute.addEventListener("click", function() {
	console.log(video.muted);
	if (video.muted === false) {
		console.log("The video should be muted.");
		video.muted = true;
		mute.innerHTML = "Unmute";
	}
	else {
		video.muted = false;
		mute.innerHTML = "Mute"; 
	}
})

volume_slider.addEventListener("input", function() {
	video.volume = (volume_slider.value) / 100;
	volume_value.innerHTML = volume_slider.value;
})

old_school.addEventListener("click", function() {
	video.classList.add("oldSchool");
})

original.addEventListener("click", function() {
	video.classList.remove("oldSchool");
})

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

