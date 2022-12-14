var mainlist = document.getElementById("mainlist")


function addElem(){
    
    var a = document.createElement("LI");
    var c = document.getElementById("input")
    var b = document.createTextNode(c.value);

    a.appendChild(b);
    mainlist.appendChild(a);
    console.log(a);

    var delBtn = document.createElement("button");
    var delBtnText = document.createTextNode("Delete")
    delBtn.appendChild(delBtnText)
    a.appendChild(delBtn)
    delBtn.setAttribute("class","editred")
    delBtn.setAttribute("onclick","del(this)")



    var delBtn = document.createElement("button");
    var delBtnText = document.createTextNode("Edit")
    delBtn.appendChild(delBtnText)
    a.appendChild(delBtn)
    delBtn.setAttribute("class","edit")
    delBtn.setAttribute("onclick","edit(this)")

}


function del(element){
   
    element.parentNode.remove();
}

function edit(element){
    console.log(element.parentNode);
    element.parentNode.firstChild.nodeValue = prompt();
}

function deleteAll(){
    mainlist.innerHTML = "";
}