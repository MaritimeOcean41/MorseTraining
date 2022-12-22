const alphabet = "abcdefghijklmnopqrstuvwxyz";
const LETTER = alphabet[Math.floor(Math.random() * alphabet.length)];

if(SEQ == '2') {
    $('.letter').text(MORSE[LETTER]);

    document.addEventListener('keypress', function(e) {
        if(e.keyCode == 13) {
            check()
        }
    });
    function check() {
        var inputed = $('.answer').val();
        if(inputed.toLowerCase() == MORSE[$('.letter').text()]) {
            $('.submit').css("background-color", "green")
        } else {
            $('.submit').css("background-color", "red")
            $('.submit').text('X')
        }
    };
} else {
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
}