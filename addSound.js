function addSound() {
    var soundElem = document.createElement("AUDIO");

    soundElem.setAttribute("id", "ambSound");
    soundElem.setAttribute("src", "Nasa_Ingenuity.ogg");
    soundElem.setAttribute("controls", "controls");

    document.body.appendChild(soundElem);
}