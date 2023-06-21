const lengthSlider = $('.pass-length input');
const options = $('.option input');
const copyIcon = $('.input-box span');
const passwordInput = $('.input-box input');
const passIndicator = $('.pass-indicator');
const generateBtn = $('.generate-btn');

const characters = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '!$%&|[]{}:;.,*+-#@<>~'
}