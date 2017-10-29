/* variables */
var city = [
	"NYC", 
	"SF", 
	"LA", 
	"ATX", 
	"SYD",
];

var image = [
	"images/austin.jpg", 
	"images/nyc.jpg", 
	"images/la.jpg", 
	"images/sf.jpg", 
	"images/sydney.jpg",
];

var option = '';

/* statements */
	/* pseudo-code:
	when user selects dropdown option run:
		if NYC display nyc.jpg
		else if SF display sf.jpg
		else if LA display la.jpg
		else if ATX display austin.jpg
		else if SYD display sydney,jpg
			*/

$(document).ready(function() {

	for (var i=0;i<city.length;i++){
	   option += '<option value="'+ city[i] + '">' + city[i] + '</option>';
	};
	$('#city-type').append(option);

	$('select').change(function() {
        var option = $('#city-type option:selected').val();

        if(option === 'NYC') {
        	$('body').css('background', 'url("images/nyc.jpg")');
        };

        if(option === 'SF') {
        	$('body').css('background', 'url("images/sf.jpg")');
        };

        if(option === 'LA') {
        	$('body').css('background', 'url("images/la.jpg")');
        };

        if(option === 'ATX') {
        	$('body').css('background', 'url("images/austin.jpg")');
        };

        if(option === 'SYD') {
        	$('body').css('background', 'url("images/sydney.jpg")');
        };

       event.preventDefault();
	});
});

