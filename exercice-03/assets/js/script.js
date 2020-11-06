function updateName() {
    let name = document.getElementById("name");
    let regexName = new RegExp(/^[A-Za-z]{1,19}$/);

    if (regexName.test(name.value)) {
        name.style.borderColor = "green";
        document.getElementById("errorName").textContent = "";
    } else {
        name.style.borderColor = "red";
        document.getElementById("errorName").textContent = "Ceci n'est pas un nom";
    }
}

function updateAge() {
    let age = document.getElementById("age");
    let regexAge = new RegExp(/^[0-9]{1,2}$/);

    if (regexAge.test(age.value)){
        age.style.borderColor = "green";
        document.getElementById("errorAge").textContent = "";
    } else {
        age.style.borderColor = "red";
        document.getElementById("errorAge").textContent = "Ceci n'est pas un mail";
    }
}

function updateMail() {
    let mail = document.getElementById("mail");
    let regexMail = new RegExp(/^[\w-\.]+@[\w\.]+\.{1}[\w]+$/);
    // exemple correction: /^[a-z0-9.-]+[@]{1}[a-z0-9]+[.]{1}[a-z]{2,4}$/

    if (regexMail.test(mail.value)){
        mail.style.borderColor = "green";
        document.getElementById("errorMail").textContent = "";
    } else {
        mail.style.borderColor = "red";
        document.getElementById("errorMail").textContent = "Ceci n'est pas un age";
    }
}