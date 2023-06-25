//track interval
var intervalID = 0;

function Start() {
    //gets image reference
    var image = document.getElementById("IndexMeme");
    //sets interval to random x and y
    intervalID = setInterval(function() {
        //generates random numbers for x and y
        var changeX =randomNumber();
        var changeY = randomNumber();
        //setting image position in html values
        image.style.left = changeX + "px";
        image.style.top = changeY + "px";
        //logging changes
        console.log("set X to " + changeX);
        console.log("set Y to " + changeY);
    }, 1000);
}
//generates a random number clmaped to a floor above 0
function randomNumber() {
    return Math.floor(Math.random() *800);
}
//stops interval from moving image
function Stop() {
    clearInterval(intervalID);
}