const body = document.querySelector('#body');
const theSwitch = document.querySelector('.switch');

function switchOff(){
    body.classList.add('black-background');
}

function switchOn() {
    body.classList.remove('black-background');
}

function changeLight(){
    if(theSwitch.value == 1)
        switchOn();
    else
        switchOff();
}

theSwitch.addEventListener('input', changeLight);