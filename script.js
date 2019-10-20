var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

//sets the background gradient color
function setGradient() {
	body.style.background = "linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

//displays the initial setting.
setGradient();