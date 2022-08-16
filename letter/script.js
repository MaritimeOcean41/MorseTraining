const alphabet = "abcdefghijklmnopqrstuvwxyz";
const LETTER = alphabet[Math.floor(Math.random() * alphabet.length)];
let THEME = localStorage.getItem('theme');
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
var theme = 'light';

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

$('#theme').click('click', function(e) {
    if(THEME === 'light') {
        $('#th').text('🌑');
        $('#th').css('rotate', '180deg');
        $('#ico').css('rotate', '180deg');
        $('header').addClass('dark');
        $('section').addClass('dark');
        localStorage.setItem('theme', 'dark');
    }
    if(THEME === 'dark') {
        $('#th').text('☀️');
        $('#th').css('rotate', '360deg');
        $('#ico').css('rotate', '360deg');
        $('header').removeClass('dark');
        $('section').removeClass('dark');
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
    THEME = localStorage.getItem('theme');
    console.log(THEME)
});

function setTheme() {
    THEME = localStorage.getItem('theme');
    if(THEME === 'dark') {
        $('header').addClass('dark');
        $('section').addClass('dark');
    } else if (THEME === 'light') {
        $('header').removeClass('dark');
        $('section').removeClass('dark');
    }
}
setTheme();