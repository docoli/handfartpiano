const keys = document.querySelectorAll('.key'),
    note = document.querySelector('.nowplaying'),
    hints = document.querySelectorAll('.hints');

function playNote(e) {

    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
        key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (key === null) {
        audio = document.querySelector(`audio[data-key="${e.target.getAttribute('data-key')}"]`);
        key = e.target;
    }

    const keyNote = key.getAttribute('data-note');

    if (keyNote === null) {
        return;
    }

    key.classList.add('playing');
    note.innerHTML = keyNote;
    audio.currentTime = 0;
    audio.play();

}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

function hintsOn(e, index) {
    e.setAttribute('style', 'transition-delay:' + index * 10 + 'ms');
}

hints.forEach(hintsOn);

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playNote);
window.addEventListener('click', playNote);

// Show message when touch device is detected
//if(typeof window.ontouchstart !== 'undefined')  alert('This feature requires a physical keyboard :(');