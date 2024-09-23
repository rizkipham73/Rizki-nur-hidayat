const audio = document.getElementById('audio');
const audioText = document.getElementById('audio-text');
const currentTimeLabel = document.getElementById('current-time');
const workSection2 = document.getElementById('works-section2');


audioText.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        audioText.classList.add('playing');
        audioText.textContent = 'oh my baby sweet like bubble gum';
    } else {
        audio.pause();
        audioText.classList.remove('playing');
        audioText.textContent = 'NEWJEANS ENJOYER';
    }
});

audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    currentTimeLabel.textContent = formatTime(currentTime);
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' + secs : secs}`;
}