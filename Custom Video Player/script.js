const video = document.querySelector('#video');
const play = document.querySelector('#play');
const stop = document.querySelector('#stop');
const timestamp = document.querySelector('#timestamp');
const progress = document.querySelector('#progress');


function toggleVideo() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateBtnState() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-2x fa-play"></i>'
    } else {
        play.innerHTML = '<i class="fa fa-2x fa-pause"></i>'
    }
}

function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    let mins = Math.floor(video.currentTime / 60);
    mins = mins < 10 ? '0' + String(mins) : mins;
    let secs = Math.floor(video.currentTime % 60);
    secs = secs < 10 ? '0' + String(secs) : secs;

    timestamp.innerHTML = `${mins}:${secs}`;
}

function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}


video.addEventListener('click', toggleVideo);
video.addEventListener('play', updateBtnState);
video.addEventListener('pause', updateBtnState);
video.addEventListener('timeupdate', updateProgress);


play.addEventListener('click', toggleVideo);
stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress)