var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector('Button');
var magic = document.getElementById('interval');
var stopMagic = document.getElementById('stop');
var time = null;
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
// function onFirstLoad(){
	// //if(!(hasCodeRunBefore in localStorage)){
	// if(localStorage.getItem('hasCodeRunBefore')===null){
		// setGradient();
		// localStorage.setItem("hasCodeRunBefore",true);
	// }
// }
function onLoad(){
	setGradient();
}
// window.addEventListener("load",onFirstLoad);
window.addEventListener("load",onLoad);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


// on first page load and pageload work finished

//random work start

function randomGradient() {
	
	color1.value=random_hex_color_code();
	color2.value=random_hex_color_code();
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value
	+ ", " 
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

//#Source
const random_hex_color_code = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};
//another
// function random_hex_color_code(){
    // var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    // return randomColor;
    // //random color will be freshly served
// }
// console.log(random_hex_color_code())
button.addEventListener('click',randomGradient);

//Magic
function startMagic(){
	time = setInterval(randomGradient,300);
}
function stop(){
	clearInterval(time);
}
stopMagic.addEventListener('click',stop);
magic.addEventListener('click',startMagic);