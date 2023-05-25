function playCraps() {
    console.log("playCraps function called");
    //first roll
    var die1 = rollDie();
    console.log("The first roll is " + die1)
    //second roll
    var die2 = rollDie();
    console.log("The second roll is " + die2)
    //sum of rolls
    var sum = die1 + die2;
    console.log("the sum of the rolls is " + sum);

    //output results to HTML
    document.getElementById("die1Res").innerHTML = "Die 1 is " + die1;
    document.getElementById("die2Res").innerHTML = "Die 2 is " + die2;
    document.getElementById("sumRes").innerHTML = "The sum is " + sum;

    //results
    if(sum == 7 || sum == 11) {
        document.getElementById("crapsRes").innerHTML = "You LOST!";
    }
    else if(die1 == die2 && die1 % 2 ==0) {
        document.getElementById("crapsRes").innerHTML = "You WON!";
    }
    else {
        document.getElementById("crapsRes").innerHTML = "You pushed (tied)!";
    }
}

//generate random number from 1-6
function rollDie() {
    var die = 6*Math.random();
    return Math.ceil(die);
}