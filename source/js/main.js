let THEME = localStorage.getItem('theme');
var originalTitle;
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
}

$('b').mouseover(function(e) {
    originalTitle = this.innerHTML;
    this.innerHTML = MORSE[this.innerHTML.toLowerCase()]
}).mouseout(function(e) {
    this.innerHTML = originalTitle
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
});

function setTheme() {
    THEME = localStorage.getItem('theme');
    if(THEME === 'dark') {
        $('#th').text('🌑');
        $('#th').css('rotate', '180deg');
        $('#ico').css('rotate', '180deg');
        $('header').addClass('dark');
        $('section').addClass('dark');
    } else if (THEME === 'light') {
        $('#th').text('☀️');
        $('#th').css('rotate', '360deg');
        $('#ico').css('rotate', '360deg');
        $('header').removeClass('dark');
        $('section').removeClass('dark');
    }
}
setTheme();