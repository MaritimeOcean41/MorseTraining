let THEME = localStorage.getItem('theme');
let SEQ = localStorage.getItem('seq');
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
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z"
}

$('b').mouseover(function(e) {
    originalTitle = this.innerHTML;
    this.innerHTML = MORSE[this.innerHTML.toLowerCase()]
}).mouseout(function(e) {
    this.innerHTML = originalTitle
});

var lastInputData;
$('button#mobile').on('click', function(e) {
    lastInputData = $('input.answer').val();
    var newCharacter;
    switch($(this).attr("class")) {
        case 'dot':
            newCharacter = '.';
            break;
        case 'space':
            newCharacter = ' ';
            break;
        case 'dash':
            newCharacter = '-';
            break;
        case 'backspace':
            lastInputData = lastInputData.substring(0, lastInputData.length - 1);
            newCharacter = '';
            break;
    }

    $('input.answer').val(lastInputData + newCharacter);
});

// Disable "autocomplete" in all inputs
$('.answer').attr('autocomplete', 'off');



//  +----------------------------+
//  |                            |
//  |   O P T I O N S  M E N U   |
//  |                            |
//  +----------------------------+

// Open/close the options menu
var conf = false;
$('.optButton').click(function(e) {
    $(this).animate({rotate: '+=360deg'}, 'slow');
    if(conf) {
        $('.config').animate({opacity: '0'});
        conf = false
    } else {
        $('.config').animate({opacity: '100%'});
        conf = true;
    }
});
$('.options').on('mouseleave', function(e) {
    $('.config').animate({opacity: '0'}, 'fast');
    conf = false
});

// Change Theme
let themeCheck = document.getElementById('themeCheckbox');
if(THEME == 'dark') {
    $('header').addClass('dark');
    $('section').addClass('dark');
    themeCheck.checked = true;
}
if(THEME == 'light') {
    $('header').removeClass('dark');
    $('section').removeClass('dark');
    themeCheck.checked = false;
}
themeCheck.addEventListener('change', function(e) {
    if(themeCheck.checked) {
        $('header').addClass('dark');
        $('section').addClass('dark');
        localStorage.setItem('theme', 'dark');
    }
    if(!themeCheck.checked) {
        $('header').removeClass('dark');
        $('section').removeClass('dark');
        localStorage.setItem('theme', 'light');
    }
});

// Change Sequence
let seqCheck = document.getElementById('seqCheckbox');
if(SEQ == 1) {
    seqCheck.checked = false;
    $('.answer').attr('id', '');
    $('.letter').attr('id', '');
    $('.word').attr('id', '');
}
if(SEQ == 2) {
    seqCheck.checked = true;
    $('.answer').attr('id', 'mto');
    $('.letter').attr('id', 'mto');
    $('.word').attr('id', 'mto');
}
seqCheck.addEventListener('change', function(e) {
    if(seqCheck.checked) {
        localStorage.setItem('seq', 2);
        $('.answer').attr('id', 'mto');
        $('.letter').attr('id', 'mto');
        $('.word').attr('id', 'mto');
    }
    if(!seqCheck.checked) {
        localStorage.setItem('seq', 1);
        $('.answer').attr('id', '');
        $('.letter').attr('id', '');
        $('.word').attr('id', '');
    }
    location.reload(true);
});