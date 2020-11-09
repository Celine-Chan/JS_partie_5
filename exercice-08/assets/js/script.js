let formParent = document.getElementById("parentForm");
let formBtn = document.getElementById("formButton");

formBtn.onclick = duplicateForm;

function duplicateForm(){
    let formNode = document.getElementById("formNode");
    let formNodeCopy = formNode.cloneNode(true);
    
    formParent.appendChild(formNodeCopy);
}
