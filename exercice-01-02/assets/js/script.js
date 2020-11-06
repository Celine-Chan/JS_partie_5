function verifyPassword() {
    let elementPassword = document.getElementById("password");
    let elementPasswordConfirm = document.getElementById("passwordConfirm");

    // .value => récupérer la valeur de l'élément
    if (elementPassword.value == elementPasswordConfirm.value) {
        elementPassword.className = "greenBorder";
        elementPasswordConfirm.className = "greenBorder";
        // elementPassword.style.borderColor = "green";
        // elementPasswordConfirm.style.borderColor = "green";
    } else {
        elementPassword.className = "redBorder";
        elementPasswordConfirm.className = "redBorder";
        // elementPassword.style.borderColor = "red";
        // elementPasswordConfirm.style.borderColor = "red";
    }
}

