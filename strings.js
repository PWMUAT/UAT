const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const zipcode = document.getElementById("zipcode");
const form = document.querySelector("form");
const errorMessage = document.getElementById("errorMessage");


form.addEventListener("submit", (e) => {
    //array for storing errors
    const errors = [];

    //check for only spaces in input
    if(firstname.value.trim() === "") {
        errors.push("First Name Required")
    }
    //check for only spaces in input
    if(lastname.value.trim() === "") {
        errors.push("Last Name Required")
    }
    //check for only spaces in input
    if(zipcode.value.trim() === "") {
        errors.push("Zip Code Required")
    }

    //creating a variable with both names
    const fullName = firstname.value + " " + lastname.value;

    //well screw anyone with a long name I guess, rude
    if(fullName.length > 21) {
        errors.push("More than 20 characters!")
    }
    //checking zipcode input length
    if(zipcode.value.length != 5) {
        errors.push("Zip Code must be 5 characters long!")
    }
    //output errors if any occurr
    if(errors.length > 0) {
        e.preventDefault();
        errorMessage.toggleAttribute('hidden');
        errorMessage.innerHTML = errors.join(', ');
    }
    //if no errors, display "secret" message
    else {
        alert("Hello " + fullName + "!"); 
    }
});

function isPalindrome(strToTest) {
    /*remove all spaces using replace(/\s/g, "")
    and lowercase everything using toLowerCase */
    var strCleaned = strToTest.replace(/\s/g, "").toLowerCase();

    //string -> array -> reverse array -> string
    var strRev = strCleaned.split("").reverse().join("");

    //return if strings are equal or not
    return strRev == strCleaned;
}

var bContinue = true;
do{ 
    //prompt for word
    var userInput = prompt("Enter word to test for a Palindrome");

    //storing input
    var isPalind = isPalindrome(userInput);

    //empty message variable for later
    var message = "";

    //determine if input is a palindrome or not
    if(isPalind) {
        message = userInput + " is a Palindrome."
    }
    else {message = userInput + " is not a Palindrome."}

    //alert user of outcome
    alert(message);

    //prompt user for another go
    var answer = prompt("Enter another word? (y/n)");

    //break loop if user says no
    if(answer.toLowerCase() == "n") {
        bContinue = false;
    }

} while(bContinue);