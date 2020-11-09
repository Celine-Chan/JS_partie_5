//const changeScrollElement = document.getElementById("pText");

function textBigger(){
     let changeScrollElement = document.getElementById("pText");
     // changeScroll.style.transform = "scale(1.5)";
     changeScrollElement.style.fontSize = "2rem";
}

window.addEventListener("wheel", textBigger)
//document.getElementById("pText").onclick = textBigger;