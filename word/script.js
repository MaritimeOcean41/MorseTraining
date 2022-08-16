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
var word

$('b').mouseover(function(e) {
    originalTitle = this.innerHTML;
    this.innerHTML = MORSE[this.innerHTML.toLowerCase()]
}).mouseout(function(e) {
    this.innerHTML = originalTitle;
});
$.getJSON('https://raw.githubusercontent.com/MaritimeOcean41/WordList-PtBr/main/wordlist.json', function(data) {
    word = data[Math.floor(Math.random() * data.length + 1)];
    $('.word').text(word);
    $('.back').mousedown(function(e) {
        window.location.assign('../index.html')
    });
    word = word.split("");
    for(i = 0; i < word.length; i++) {
        word[i] = MORSE[word[i]];
    }
    word = word.join(" ");
});
document.addEventListener('keypress', function(e) {
    if(e.keyCode == 13) {
        check()
    }
});
function check() {
    if($('.answer').val() == word) {
        $('.submit').css("background-color", "green")
    } else {
        $('.submit').css("background-color", "red")
        $('.submit').text('X')
    }
};

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