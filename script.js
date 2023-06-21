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

const generatePassword = () => {
    let staticPassword = '';
    randomPassword = '';
    excludeDuplicate = false;
    passLength = lengthSlider.value;

    options.forEach(option => {
        if (option.checked) {
            if (option.id !== 'exc-duplicate' && option.is !== 'spaces') {
                statisPassword += characters[option.id];
            } else if (option.is === 'spaces') {
                statisPassword += `  ${staticPassword}  `;
            } else {
                excludeDuplicate = true;
            }
        }
    });

    for (let i = 0; i < passLength; i++) {
        let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
        if (excludeDuplicate) {
            !randomPassword.includes(randomChar) || randomChar == " " ? randomPassword += randomChar : i--;
        } else {
            randomPassword += randomChar;
        }
    }
    passwordInput.value = randomPassword
}