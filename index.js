// todo
// listen to keydown/up events
window.addEventListener("keydown", handleKeyDown);
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

function handleKeyDown(event) {
  const keyCode = event.keyCode;
  // in the event of keydown find the corresponding audio element
  const audio = document.querySelector(`audio[data-key='${keyCode}']`);
  //in the event of keydown find the corrsponding key
  const key = document.querySelector(`.key[data-key='${keyCode}']`);
  if (!audio) return; // kills the function if incorrect key is pressed
  // console.log(audio)
  audio.currentTime = 0; //resets the board after each keypress
  audio.play();
  key.classList.add("playing");
}
function removeTransition(event) {
  if (event.propertyName !== "transform") return; // skipping the it doesnt have transform property name
  //this in this contexct is calling on the key
  // console.log(this)
  this.classList.remove("playing");
}
