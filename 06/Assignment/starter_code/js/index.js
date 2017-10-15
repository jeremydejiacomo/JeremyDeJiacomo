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
console.dir(readMoreElement);
console.dir(readLessElement);
console.dir(showMoreElement);
console.dir(pElement);
console.log(linkElement);

/* readMoreElement = toggleMore; */
readMoreElement[0].onclick = showMore;
readLessElement[0].onclick = showLess;

learnMoreElement[0].onclick = learnMore;
learnMoreElement[0].onclick = learnLess;

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
	showMoreElement[0].display = "inline";
};

function showLess () {
	readLessElement[0].style.display = "none";
	readMoreElement[0].style.display = "block";
	showMoreElement[0].display = "none";
};
/* functions for learn more/less */
function learnMore () {
	learnMoreElement[0].innerHTML = "Show Less";
	learnMoreTextElement[0].style.display = "inline";
};

function learnLess () {
	learnMoreElement[0].innerHTML = "Learn More";
	learnMoreTextElement[0].innerHTML = "none";
};