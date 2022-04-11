const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');



form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequired([username, email, password, password2]);

    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPassword(password, password2);


});


// check required fields
function checkRequired(inputs) {
    inputs.forEach(input => {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');

        if (input.value.trim() == '') {
            formControl.classList = 'form-control error'
            small.innerText = `${input.id} is required`;
        } else {
            formControl.classList = 'form-control success'
        }
    });
}

// check length
function checkLength(input, min, max) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    if (input.value.trim().length < min || input.value.trim().length > max) {
        formControl.classList = 'form-control error'
        small.innerText = `${input.id} must be  ${min} - ${max} characters`;
    } else {
        formControl.classList = 'form-control success'
    }
}

// check email
function checkEmail(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    let match = input.value.trim().toLowerCase().match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)

    if (!match) {
        formControl.classList = 'form-control error'
        small.innerText = `Email is not valid.`;
    } else {
        formControl.classList = 'form-control success'
    }
}

// check password
function checkPassword(input1, input2) {
    if (input1.value.trim() !== input2.value.trim()) {
        const formControl = input2.parentElement;
        const small = formControl.querySelector('small');
        formControl.classList = 'form-control error'
        small.innerText = `Passwords do not match.`;
    }
}