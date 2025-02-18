function playMovie(videoFile) {
    const videoPlayer = document.getElementById('video-player');
    const video = document.getElementById('video');
    video.src = videoFile;
    videoPlayer.style.display = 'flex';
    video.play();
}

// Function to close the video player
function closePlayer() {
    const videoPlayer = document.getElementById('video-player');
    const video = document.getElementById('video');
    videoPlayer.style.display = 'none';
    video.pause();
    video.currentTime = 0;
}