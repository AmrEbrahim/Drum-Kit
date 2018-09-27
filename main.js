function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const btn = document.querySelector(`.btn[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    btn.classList.add('play');
}
function removeEffect(e){
    if (e.propertyName !== 'transform') return;
    this.classList.remove('play'); 
}
const btns = document.querySelectorAll('.btn');
btns.forEach(btn => btn.addEventListener('transitionend', removeEffect));
window.addEventListener('keydown', playSound);