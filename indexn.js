//button press

var numOfButton = document.querySelectorAll(".drum").length;
for (var i = 0; i < numOfButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);


}

//key press
document.addEventListener("keydown", function (event) {

    makeSound(event.key)
    buttonAnimation(event.key);
});



function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;

        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;

        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;

        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;

        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;


        default:
            console.log(key);
            break;
    }

}
// add the class pressed into the html using js
function buttonAnimation(currentkey) {
    var activeButton = document.querySelector("." + currentkey)
    activeButton.classList.add("pressed")

    // set timeout to release/ remove the css pressed function
    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 100);

}

