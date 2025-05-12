
const newParagraph = document.createElement('p');
document.getElementById('email-check').appendChild(newParagraph);

document.getElementById('form').addEventListener('submit', (event) => {

    event.preventDefault(); // non inviare il form

    const emailValue = document.forms['form'].email.value; // valore email da passare alla funzione di validazione

    const isEmailValid = emailValidate(emailValue); // ritorno del responso della funzione di validazione

    // if (!isEmailValid) {
    //     emailInvalid();
    // } else {
    //     emailValid();
    // }
    if(!isEmailValid ? emailInvalid() : emailValid()); // molto più semplice e comprensibile oltre che mi piace di più
});

// se email valida scive questo paragrafo
function emailValid() {
    newParagraph.textContent = "Form submitted successfully ;)";
    newParagraph.style.color = "green";
    console.log("si fa per dire ;)");
}

// se email non valida scive questo paragrafo
function emailInvalid() {
    newParagraph.textContent = "Oops! Please check your email";
}

// validatore di email
function emailValidate(email) {
    if (email == '') {
        // console.log("sono passato di qui");
        return false;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;  // Restituisci true se l'email è valida
    } else {
        return false;
    }
}