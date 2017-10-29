/* variables */
var city = ["New York", "New York City", "NYC", "San Francisco", "SF", "Bay Area", "Los Angeles", "LA", "LAX", "Austin", "ATX", "Sydney", "SYD"

];

var image = ["images/citipix_skyline.jpg", "images/austin.jpg", "images/la.jpg", "images/nyc.jpg", "images/sf.jpg", "images/sydney.jpg"

];

/* var cityType = document.getElementByID('city-type');
var submitBtn = document.getElementByID('submit-btn');
var backGround = document.getElementByClassName('body'); */

/* function - (user for loops with arrays - this is calling a string value) */
/* when user inputs the city name, the corresponding image needs to appear in the background
input text is the target text field, input submit is the button, and div container is the where the background images go */


/* pseudo-code:
	if (cityType) === "New York"
	|| cityType === "NYC"
		|| cityType === "New York City"
			then change background-color to nyc.jpg
		$(selector).css("property", "value");
		if else (etc...)
		(at end pass prevent.default) */

/* my attempt */
/* $(document).ready( {
	$('#submit-btn').on("click", () {
		event.preventDefault();
		$('#city-type').val();

		 if( 'cityType' === 'New York'){
    backGround = "img/nyc.jpg";
  } 
	console.log(cityType);
});)}; */

/* in-class attempt */
   $(document).ready(function() {
      $('form').submit(function(event) {
        var inputField = $('input').val();

        if(inputField === 'New York' || inputField === 'New York City' || inputField === 'NYC') {
        	$('body').css('background', 'url("images/nyc.jpg")');
        };

        var inputField = $('input').val();

        if(inputField === 'San Francisco' || inputField === 'SF' || inputField === 'Bay Area') {
        	$('body').css('background', 'url("images/sf.jpg")');
        };

        if(inputField === 'Los Angeles' || inputField === 'LA' || inputField === 'LAX') {
        	$('body').css('background', 'url("images/la.jpg")');
        	console.log('This matches LA');
        };



        console.log(inputField);

        event.preventDefault();
      });
    });

   /* alt way */
      /* $(document).ready(function() {
      $('form').submit(function(event) {
        var inputField = $('input').val();

        if(inputField === 'New York' || inputField === 'New York City' || inputField === 'NYC') {
        	$('body').css('background', 'url("images/nyc.jpg")');
        };

        $('body').addClass('nyc');
        console.log(inputField);

        event.preventDefault();
      });
    }); */