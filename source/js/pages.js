var ranLAN = LAN[Math.floor(Math.random() * LAN.length)];
var answer;
var char;
var word;

// Initializing
$(document).ready(function() {
    switch(searchParams.get('page')) {
        case 'letter': // Letterpage
            if(SEQ == 'ctm') { // Character to Morse
                answer = MORSE[ranLAN];
                char = ranLAN;
            } else if(SEQ == 'mtc') { // Morse to Character
                answer = ranLAN;
                char = MORSE[ranLAN];
            }
            if(/^\d+$/.test(answer) || /^\d+$/.test(char)) { // A little easter egg again (just in case 'response' or 'char' was not yet set when the page was loaded) [Todos esses comentários em inglês devem estar errados]
                $('#headerTitle').html(`<b>N</b><b>u</b><b>m</b><b>b</b><b>e</b><b>r</b> <br/> Training`);
            }
            $('.char').text(char.toUpperCase()); // Set char's text equals char 
            break;


        case 'word': // Wordpage
            $.getJSON('source/assets/word-list.json', function(data) { // Get the word list
                word = data[Math.floor(Math.random()*data.length+1)]; // Pick a random word
    
                if(SEQ == 'ctm') { // Character to Morse
                    char = word; // Change the text to the word before translating to morse
    
                    // Translate to morse
                    word = word.split('');
                    for(i=0;i<word.length;i++) {
                        word[i] = MORSE[word[i]];
                    }
                    answer = word.join(" "); // Change the answer to the word after translating to morse
                } else if(SEQ == 'mtc') { // Morse to Character
                    // Adjust font-size based on word length
                    var fontsize = $('#wordcha').css('font-size');
                    $('#wordcha').css('font-size', `${parseFloat(fontsize) - word.length*10/4}px`);

                    answer = word; // Change the answer to the word before translating to morse
    
                    // Translate to morse
                    word = word.split("");
                    for(i=0;i<word.length;i++) {
                        word[i] = MORSE[word[i]];
                    }
                    char = word.join(" "); // Change the text to the word after translating to morse
                }

                $('.char').text(char.toUpperCase()); // Set char's text equals char
            });
            break;
    }
});

// Check if the inputed value is equal to the real answer
function check(page) {
    var inputed = ($(`#${page}ans`).val()).toLowerCase(); // Get the inputed value
    if(inputed == answer) {
        $(`.result`).text('Correct!').attr('id', 'correct');
    } else {
        $(`.result`).text('Incorrect!').attr('id', 'incorrect');
    }
    setTimeout(location.reload.bind(location), 800); // Reload the page after delay
}

// Commands through keyboard
document.addEventListener('keypress', function(e) {
    switch(e.keyCode) {
        case 13: // If presses 'enter'
            check(searchParams.get('page')); // Check if the answer is corret
            break;
    }
});

// Mobile Buttons
$(document).on('click', '.button', function(e) {
    var answerBF = $('.answer').val(); // Answer input value so far
    var w = ''; // The character to be added to the input
    switch($(this).attr('id')) {
        case 'dot':
            w = '.'; // Add a dot (.)
            break;
        case 'dash':
            w = '-'; // Add a dash (-)
            break;
        case 'space':
            w = ' '; // Add a space ( )
            break;
        case 'return':
            answerBF = answerBF.split(''); // Transform string into an array
            answerBF.pop(); // Remove the last element of that array
            answerBF = answerBF.join(''); // Transform the array into a string again
            break;
    }
    $('.answer').val(answerBF + w); // Add the w's value to the input
});