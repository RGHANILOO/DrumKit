// todo
    // listen to keydown/up events
window.addEventListener('keydown', function(e){
    // in the event of keydown find the corresponding audio element
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    //in the event of keydown find the corrsponding key
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`)
    if (!audio) return;// kills the function if incorrect key is pressed
    // console.log(audio)
    audio.currentTime = 0 //resets the board after each keypress
    audio.play()
    key.classList.add('playing')
    
});
function removeTransition(e){
    if (e.propertyName !== 'transform') return // skipping the it doesnt have transform property name
    //this in this contexct is calling on the key
    // console.log(this)
    this.classList.remove('playing');

}
const keys = document.querySelectorAll('.key');
keys.forEach(key=> key.addEventListener('transitionend', removeTransition));