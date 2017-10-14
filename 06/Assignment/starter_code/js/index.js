/* section doc */

/* variables */
var readMoreElement = document.getElementsByClassName('readmore');
var readLessElement = document.getElementsByClassName('readless hide');
var hideElement = document.getElementsByClassName('hide');
var linkElement = document.getElementsByTagName('a');
var pElement = document.getElementsByTagName('p');
var showMoreElement = document.getElementById('show-this-on-click');
var status = "less";


/* execute */
console.dir(readMoreElement);
console.dir(readLessElement);
console.dir(showMoreElement);
console.dir(pElement);
console.log(linkElement);

readMoreElement[0].onclick = toggleMore;


/* functions */
/* function showMore() {
	readMoreElement = readLessElement;
}; */
function toggleMore() {
    if (status == "less") {
            readMoreElement = readLessElement;
            pElement[0] = pElement[0] + showMoreElement;
        } 
    else if (status == "more") {
            readLessElement = readMoreElement;
        }
    };