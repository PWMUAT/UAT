function trySecret() {
    //logging button press
    console.log("INTRUDER DETECTED");

    //set password
    var secretPassword = "V1";

    //prompt user for password until valud reponse is given
    do {
        var userInput = prompt("WHATS THE PASSWORD");
        userInput = userInput.replace(/\s/g, "");
    } while (userInput.trim() === "");

    //validate if password is correct
    if(userInput === secretPassword) {
        //log and alert result
        alert("Right!");
        console.log("Oh, they know the password.");
        //unhide image
        document.getElementById("SecretImage").hidden = false;
    }
    else {
        //log and alert result
        alert("WRONG!");
        console.log("THEY DON'T KNOW THE PASSWORD");
    }
}