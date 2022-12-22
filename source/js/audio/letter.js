// Save the velocity
let VEL = localStorage.getItem('velocity');
$('.bpm').val(VEL)

document.getElementById('bpm').addEventListener('change', function(e) {
    localStorage.setItem('velocity', this.value);
});

// Setup Web Audio API
const FREQUENCY = 440;
var VELOCITY = $('.bpm').val();

let note_context,
    note_node,
    gain_node,
    audioContextInitialized = false;

function initializeAudioContext() {
    note_context = new AudioContext();
    note_node = note_context.createOscillator();
    gain_node = note_context.createGain();
    note_node.frequency.value = FREQUENCY.toFixed(2);
    gain_node.gain.value = 0;
    note_node.connect(gain_node);
    gain_node.connect(note_context.destination);
    note_node.start();
    audioContextInitialized = true;
}
function play() {
    gain_node.gain.setTargetAtTime(0.1, 0, 0.001);
}
function stop() {
    gain_node.gain.setTargetAtTime(0, 0, 0.001);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function dash() {
    play()
    await sleep(VELOCITY*3);
    stop();
}
async function dot() {
    play()
    await sleep(VELOCITY);
    stop();
}
async function playLetter(letter) {
    if(!audioContextInitialized) {
        initializeAudioContext();
    }
    for(i = 0; i < letter.length; i++) {
        if(letter[i] == '-') {
            await dash();
        } else if(letter[i] == '.') {
            await dot();
        }
        await sleep(VELOCITY);
    }
}

// Setup 'LETTER'
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const LETTER = alphabet[Math.floor(Math.random() * alphabet.length)];
function chooser() {
    playLetter(MORSE[LETTER]);
}

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

/*async function playWord(word) {
    for(i = 0; i < word.length; i++) {
        await playLetter(word[i]);
        await sleep(VELOCITY*3);
    }
}*/