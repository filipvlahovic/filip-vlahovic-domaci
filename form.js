const ime = document.querySelector('.input-ime');
var greska_i = document.querySelector('.greska-ime');
let anyMistakes = false;

function provjeri_ime() {
    let isSpaced = false;

    for (let i = 0; i < ime.value.length; i++) {
        if (ime.value.charAt(i) === ' ') {
            isSpaced = true;
        }
    }

    if (!(ime.value.length > 5 || isSpaced)) {
        greska_i.innerHTML = 'Za ime i prezime potrebno je imati razmak i minimum 50 karaktera.';
        anyMistakes = true;
    }
    else{
        greska_i.innerHTML = '';
    }
}





ime.addEventListener('input', provjeri_ime);

function metod(){

    anyMistakes = false;

    const email = document.querySelector('.input-email');
    const godina = document.querySelector('.input-godina');
    const opis = document.querySelector('.input-opis');

    var greska_e = document.querySelector('.greska-email');
    var greska_g = document.querySelector('.greska-godina');
    var greska_o = document.querySelector('.greska-opis');

    

    function provjeri_email() {
        let isDotCom = false;
        let isLudoA = false;
        
        for(let i = 0; i < email.value.length-3; i++){
            if (email.value.substring(i, i + 3) === '.com'){
                isDotCom = true;
            }
        }

        for (let i = 0; i < email.value.length; i++) {
            if(email.value.charAt(i) === '@'){
                isLudoA = true;
            }
        }

        if(!(isDotCom || isLudoA)){
            anyMistakes = true;
            greska_e.innerHTML = "Email mora da sadrži @ i .com";
        }
        else{
            greska_e.innerHTML = '';
        }
    }

    function provjeri_godina() {
        if (godina.value > 2002 || godina.value.toString() === ""){
            greska_g.innerHTML = "Osoba mora imati minimum 18 godina.";
            console.log('godina nije ispravna');
            anyMistakes = true;
        }
        else{
            greska_g.innerHTML = '';
        }
    }

    function provjeri_opis() {
        if(opis.value.length > 100 && opis.value !== ""){
            greska_o.innerHTML = "Opis je ograničen na najviše 100 karaktera.";
            console.log('opis nije ispravan');
            anyMistakes = true;
        }
        else{
            console.log(anyMistakes);
            console.log('GRESKA_o = nista');
            greska_o.innerHTML = '';
        }
    }

    provjeri_ime();
    provjeri_email();
    provjeri_godina();
    provjeri_opis();

    console.log(anyMistakes);

    if(!anyMistakes){
        document.querySelector('.submit').removeAttribute('disabled');
    }
    else{
        document.querySelector('.submit').disabled = true;
    }
}

const provjeri = document.querySelector('.provjeri');

provjeri.addEventListener('click', metod);