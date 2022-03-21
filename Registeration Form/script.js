const signInBtn = document.querySelector('.signin-btn')
const signUpBtn = document.querySelector('.signup-btn')
const formsWrapper = document.querySelector('.forms-wrapper')

signInBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    formsWrapper.classList.remove('change');
})
signUpBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    formsWrapper.classList.add('change');
})
