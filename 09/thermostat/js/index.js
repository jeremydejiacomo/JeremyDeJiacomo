/* variables */
var currentTemp = 71;
var currentTempElement = document.getElementById('currentTemp'); //Object
var inputField = document.getElementById('newTemp'); //Object
var button = document.getElementById('setTemperature'); //Object
var body = document.getElementsByTagName('body');

/* logs */
console.dir('currentTempElement');
console.log('button');

/* logic statements */
currentTempElement.innerHTML = currentTemp;
changeBackground(currentTemp);

button.onclick = function () {
	currentTemp = inputField.value;
	if (currentTemp !== '') {
		currentTempElement.innerHTML = currentTemp; 
		changeBackground(currentTemp);
	}
};

function changeBackground(temp) {
	if (temp <= 65) {
		console.log('blue');
	} else if (temp > 65 && temp < 85) {
		body[0].style.backgroundcolor = "yellow";
	} else if (temp >= 85 && temp < 95) {
		console.log('orange');
	} else {
		console.log('red');
	}
};