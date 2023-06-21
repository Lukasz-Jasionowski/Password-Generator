const lengthSlider = $('.pass-length input')[0];
const options = $('.option input');
const copyIcon = $('.input-box span')[0];
const passwordInput = $('.input-box input')[0];
const passIndicator = $('.pass-indicator')[0];
const generateBtn = $('.generate-btn')[0];

const characters = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '!$%&|[]{}:;.,*+-#@<>~'
};

const generatePassword = () => {
    let staticPassword = '',
        randomPassword = '',
        excludeDuplicate = false,
        passLength = lengthSlider.value;

    options.each(function () {
        const option = $(this);
        if (option.is(':checked')) {
            if (option.attr('id') !== 'exc-duplicate' && option.attr('id') !== 'spaces') {
                staticPassword += characters[option.attr('id')];
            } else if (option.attr('id') === 'spaces') {
                staticPassword += `  ${staticPassword}  `;
            } else {
                excludeDuplicate = true;
            }
        }
    });

    for (let i = 0; i < passLength; i++) {
        let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
        if (excludeDuplicate) {
            !randomPassword.includes(randomChar) || randomChar == ' ' ? randomPassword += randomChar : i--;
        } else {
            randomPassword += randomChar;
        }
    }
    $(passwordInput).val(randomPassword);
};

const updatePassIndicator = () => {
    passIndicator.id = lengthSlider.value <= 8 ? 'weak' : lengthSlider.value <= 16 ? 'medium' : 'strong';
};

const updateSlider = () => {
    $('.pass-length span').text(lengthSlider.value);
    generatePassword();
    updatePassIndicator();
};
updateSlider();

const copyPassword = () => {
    navigator.clipboard.writeText($(passwordInput).val());
    $(copyIcon).text('check');
    $(copyIcon).css('color', '#4285f4');
    setTimeout(() => {
        $(copyIcon).text('copy_all');
        $(copyIcon).css('color', '#707070');
    }, 1500);
};

$(document).ready(() => {
    $(copyIcon).on('click', copyPassword);
    $(lengthSlider).on('input', updateSlider);
    $(generateBtn).on('click', generatePassword);
});