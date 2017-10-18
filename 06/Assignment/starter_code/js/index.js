/* section doc */

/* variables */
var readMoreElement = document.getElementsByClassName('readmore');
var readLessElement = document.getElementsByClassName('readless hide');
var hideElement = document.getElementsByClassName('hide');
var linkElement = document.getElementsByTagName('a');
var pElement = document.getElementsByTagName('p');
var showMoreElement = document.getElementById('show-this-on-click');
var learnMoreTextElement = document.getElementById('learnmoretext');
var learnMoreElement = document.getElementsByClassName('learnmore');
/* var status = "Read more"; */


/* execute */
/* console.dir(readMoreElement);
console.dir(readLessElement);
console.dir(showMoreElement);
console.dir(pElement);
console.dir(learnMoreTextElement);
console.dir(hideElement);
console.dir(learnMoreElement);
console.log(linkElement); */

/* readMoreElement = toggleMore; */
readMoreElement[0].onclick = showMore;
readLessElement[0].onclick = showLess;


/* learnMoreElement[0].onclick = learnLess; */

/* for loop to prevent default on link elements */
for (var i=0; i<linkElement.length; i++) {
	linkElement[i].onclick = function(event){
	event.preventDefault() };
};

/* functions */
/* function showMore() {
	readMoreElement = readLessElement;
}; */
/* function toggleMore() {
    if (status == "Read more") {
            readMoreElement = readLessElement;
            pElement[0] = pElement[0] + showMoreElement;
        } 
    else if (status == "Read less") {
            readLessElement = readMoreElement;
            pElement[0] = pElement[0];
        }
    }; */
/* function toggleMore() {
	readMoreElement.onclick = readMoreElement.innerHTML = readLessElement;
}; */
/* functions for read more/less */
function showMore () {
	readMoreElement[0].style.display = "none";
	readLessElement[0].style.display = "block";
	showMoreElement.style.display = "block";
};

function showLess () {
	readLessElement[0].style.display = "none";
	readMoreElement[0].style.display = "block";
	showMoreElement.style.display = "none";
};

learnMoreElement[0].onclick = learnMore;
/* function for learn more/less */
function learnMore () {
	learnMoreElement[0].style.display = "none";
	learnMoreTextElement.style.display = "block";
	event.preventDefault();
};

/* function learnLess () {
	learnMoreTextElement.style.display = "none";
}; */