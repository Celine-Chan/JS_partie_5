function changeSrc() {
    document.getElementById("lanterne").src=("assets/img/osaka.jpg");
}

// ou correction :

// const image = document.getElementById("lanterne");

// image.onclick = function changeSrc() {

        // if (image.src.match("osaka.jpg") != null) {
        //     image.src = "assets/img/lanterne.jpg";
        // } else {
        //     image.src = "assets/img/osaka.jpg";
        // }

// }



// en remplacement du hover :

// image.onmouseover = function () {
//     image.style.width = "40rem";
// }

// image.onmouseleave = function () {
//     image.style.width = "30rem";
// }