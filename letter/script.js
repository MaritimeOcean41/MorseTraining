const alphabet = "abcdefghijklmnopqrstuvwxyz";
const LETTER = alphabet[Math.floor(Math.random() * alphabet.length)];
const MORSE = {
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
};
var originalTitle;

$('.letter').text(LETTER);

$('b').mouseover(function(e) {
    originalTitle = this.innerHTML;
    this.innerHTML = MORSE[this.innerHTML.toLowerCase()]
}).mouseout(function(e) {
    this.innerHTML = originalTitle;
});

document.addEventListener('keypress', function(e) {
    if(e.keyCode == 13) {
        check()
    }
});
function check() {
    if($('.answer').val() == MORSE[LETTER]) {
        $('.submit').css("background-color", "green")
    } else {
        $('.submit').css("background-color", "red")
        $('.submit').text('X')
    }
};

$('.back').mousedown(function(e) {
    window.location.assign('../index.html')
});