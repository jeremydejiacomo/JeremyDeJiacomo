/* variables */
var city = ["New York", "New York City", "NYC", "San Francisco", "SF", "Bay Area", "Los Angeles", "LA", "LAX", "Austin", "ATX", "Sydney", "SYD"

];

var image = ["img/citipix_skyline.jpg", "img/austin.jpg", "img/la.jpg", "img/nyc.jpg", "img/sf.jpg", "img/sydney.jpg"

];

const cityType = document.getElementByID('city-type');
const submitBtn = document.getElementByID('submit-btn');
const backGround = document.getElementByClassName('body');

/* function - (user for loops with arrays - this is calling a string value) */
/* when user inputs the city name, the corresponding image needs to appear in the background
input text is the target text field, input submit is the button, and div container is the where the background images go */


/* if (cityType) === "New York"
	|| cityType === "NYC"
		|| cityType === "New York City"
			then change background-color to nyc.jpg
		$(selector).css("property", "value");
		if else (etc...)
		(at end pass prevent.default) */

$(document).ready( {
	$('#submit-btn').on("click", () {
		event.preventDefault();
		$('#city-type').val();

		 if( 'cityType' === 'New York'){
    backGround = "img/nyc.jpg";
  } 
	console.log(cityType);
});)};


