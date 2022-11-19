var original;
var word;
$.getJSON('https://raw.githubusercontent.com/MaritimeOcean41/WordList-PtBr/main/wordlist.json', function(data) {
    word = data[Math.floor(Math.random() * data.length + 1)];
    original = word;
    $('.back').mousedown(function(e) {
        window.location.assign('../index.html')
    });
    word = word.split("");
    for(i = 0; i < word.length; i++) {
        word[i] = MORSE[word[i]];
    }
    word = word.join(" ");

    $('.word').text(original);
    $('.word#mto').text(word);
});

if($('.word').attr('id') == 'mto') {
    document.addEventListener('keypress', function(e) {
        if(e.keyCode == 13) {
            check()
        }
    });
    function check() {
        var inputed = $('.answer').val();
        if(inputed.toLowerCase() == original) {
            $('.submit').css("background-color", "green")
        } else {
            $('.submit').css("background-color", "red")
            $('.submit').text('X')
        }
    };
} else {
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
}