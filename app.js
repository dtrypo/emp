var slideIndex = 1;
showDivs(slideIndex);

var isPaused = false;

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var y = document.getElementsByClassName("mySlidesText");
    if (n > x.length) { slideIndex = 1 }
    if (n > y.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length };
    if (n < 1) { slideIndex = y.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        y[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
    y[slideIndex - 1].style.display = "block";
}

setInterval(function () {
    if (!isPaused) {
        plusDivs(+1);
    }
}, 7500);

function stopLoop() {
    isPaused = true;
}

function startLoop() {
    isPaused = false;
}