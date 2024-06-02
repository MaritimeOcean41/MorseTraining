const LAN = localStorage.getItem('lan');
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
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
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
    "--..": "z",
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
}

$(document).on('mouseenter', 'b', function(e) {
    originalTitle = this.innerHTML;
    this.innerHTML = MORSE[this.innerHTML.toLowerCase()]
}).on('mouseout', 'b', function(e) {
    this.innerHTML = originalTitle
});

// Disable "autocomplete" in all inputs
$('input').attr('autocomplete', 'off');

//  +----------------------------+
//  |                            |
//  |   O P T I O N S  M E N U   |
//  |                            |
//  +----------------------------+

// Close Menu
let cmButton = document.getElementById('cmButton');
$('.conMenu').on('mouseleave', function(e) {
    cmButton.checked = false;
});

// Change Theme
let themeCheck = document.getElementById('theme');
if(THEME == 'dark') {
    $('header').addClass('dark');
    $('section').addClass('dark');
    $('footer').addClass('dark');
    $('#popup').addClass('dark');
    themeCheck.checked = true;
}
if(THEME == 'light') {
    $('header').removeClass('dark');
    $('section').removeClass('dark');
    $('footer').removeClass('dark');
    $('#popup').removeClass('dark');
    themeCheck.checked = false;
}
themeCheck.addEventListener('change', function(e) {
    if(themeCheck.checked) {
        $('header').addClass('dark');
        $('section').addClass('dark');
        $('footer').addClass('dark');
        $('#popup').addClass('dark');
        localStorage.setItem('theme', 'dark');
    }
    if(!themeCheck.checked) {
        $('header').removeClass('dark');
        $('section').removeClass('dark');
        $('footer').removeClass('dark');
        $('#popup').removeClass('dark');
        localStorage.setItem('theme', 'light');
    }
});

// Change Sequence
let seqCheck = document.getElementById('seq');
if(SEQ == null || SEQ == 0) { // If SEQ is not defined yet (""First time"" only!)
    localStorage.setItem('seq', 'ctm');
    window.location.reload();
}
if(SEQ == 'mtc') { // Morse to Character
    seqCheck.checked = true;
    $('section').removeClass('ctm');
    $('section').addClass('mtc');
}
if(SEQ == 'ctm') { // Character to Morse
    seqCheck.checked = false;
    $('section').removeClass('mtc');
    $('section').addClass('ctm');
}
seqCheck.addEventListener('change', function(e) {
    if(seqCheck.checked) { // Morse to Character
        localStorage.setItem('seq', 'mtc');
        $('section').removeClass('ctm');
        $('section').addClass('mtc');
    }
    if(!seqCheck.checked) { // Character to Morse
        localStorage.setItem('seq', 'ctm');
        $('section').removeClass('mtc');
        $('section').addClass('ctm');
    }
    setTimeout(location.reload.bind(location), 300); // Reload the page after delay
});

// Page changer
const searchParams = new URLSearchParams(window.location.search);
$(window).on('load', function(e) {
    $('#checked').attr('id', 'non');
    $('section').css('display', 'none');
    switch(searchParams.get('page')) {
        case 'letter':
            $('.letterbutton').attr('id', 'checked');
            $('#letterpage').css('display', 'flex');
            $('#headerTitle').html(`<b>L</b><b>e</b><b>t</b><b>t</b><b>e</b><b>r</b> <br/> Training`);
            if(/^\d+$/.test(answer) || /^\d+$/.test(char)) { // A little easter egg
                $('#headerTitle').html(`<b>N</b><b>u</b><b>m</b><b>b</b><b>e</b><b>r</b> <br/> Training`);
            }            
            break;
        case 'word':
            $('.wordbutton').attr('id', 'checked');
            $('#wordpage').css('display', 'flex');
            $('#headerTitle').html(`<b>W</b><b>o</b><b>r</b><b>d</b> <br/> Training`);
            break;
        default:
            $('.homebutton').attr('id', 'checked');
            $('#homepage').css('display', 'flex');
            break;
    }
});


//  +----------------------------+
//  |                            |
//  |   C U S T O M .  M E N U   |
//  |                            |
//  +----------------------------+

var l = 'abcdefghijklmnopqrstuvwxyz0123456789'; // Base model for "LAN" (Letters And Numbers)
for(i=0;i<l.length;i++) { // Create all the checkboxes for the "Customize Menu"
    $('#letCus').append(`
        <label>
            <input type="checkbox" class="letCheck" id="${l[i]}" />
            <a>${l[i].toUpperCase()}</a>
        </label>
    `);
};
if(LAN == null || LAN == 0) { // If LAN is not defined yet (""First time"" only!)
    localStorage.setItem('lan', l);
    window.location.reload();
}
for(j=0;j<LAN.length;j++) { // Check every checkbox to match with the LAN value
    document.getElementById(LAN[j]).checked = true;
};
$(document).on('change', 'input.letCheck', function(e) { // When change a "Customize menu"'s checkbox
    var letInps = document.querySelectorAll('input.letCheck');
    var newLAN = [];
    for(i=0;i<letInps.length;i++) { // Loop for all "Customize menu" checkboxes
        if(letInps[i].checked) { // If the checkbox is checked add it's value to "newLAN" array
            newLAN.push(letInps[i].id);
        }
    }
    localStorage.setItem('lan', newLAN.join('')); // Set LAN as "newLAN" array
});
$(document).on('click', function(e) {
    if(document.getElementById('letBtn').contains(e.target)) { // Click on the "open customize menu" button
        $('#popup').css('display', 'flex');
    } else if(document.getElementById('letReset').contains(e.target)) { // Click on the "reset everthing on the customize menu" button
        localStorage.setItem('lan', l);
        window.location.reload();
    } else if(!document.getElementById('letMenu').contains(e.target) || document.getElementById('letClose').contains(e.target)) { // Click on the "close customize menu" button or click outside the "customize menu"
        $('#popup').css('display', 'none');
    }
})