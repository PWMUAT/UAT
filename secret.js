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

    //
    if(userInput === secretPassword) {
        alert("Right!");
        console.log("Oh, they know the password.");
        document.getElementById("SecretImage").hidden = false;
    }
    else {
        alert("WRONG!");
        console.log("THEY DON'T KNOW THE PASSWORD");
    }
}