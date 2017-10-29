/* variables */
var city = [
	"NYC", 
	"SF", 
	"LA", 
	"ATX", 
	"SYD",
];

var image = [
	"austin.jpg", 
	"nyc.jpg", 
	"la.jpg", 
	"sf.jpg", 
	"sydney.jpg",
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

/* functions */

for (var i=0;i<city.length;i++){
   option += '<option value="'+ city[i] + '">' + city[i] + '</option>';
};
$('#city-type').append(option);