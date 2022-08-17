const alphabet = "abcdefghijklmnopqrstuvwxyz";
const LETTER = alphabet[Math.floor(Math.random() * alphabet.length)];

$('.letter').text(LETTER);

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