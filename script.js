var noAudio = new Audio('boo.mp3');
const nobutton = document.getElementById("No");
nobutton.addEventListener("click", () => {
    noAudio.play();});
var yesAudio = new Audio('hooray.mp3');
const yesbutton = document.getElementById("Yes");
yesbutton.addEventListener("click", () => {
    yesAudio.play();});