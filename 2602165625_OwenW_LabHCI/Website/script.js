//font family loader
var lapisLink = document.createElement("link");
lapisLink.rel = "preconnect";
lapisLink.href = "https://fonts.googleapis.com";

var gstatLink = document.createElement("link");
gstatLink.rel = "preconnect";
gstatLink.href = "https://fonts.gstatic.com";
gstatLink.setAttribute('crossorigin','');

var fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href = "https://fonts.googleapis.com/css2?family=Abel&family=Antonio&family=Galada&display=swap";

document.head.appendChild(lapisLink);
document.head.appendChild(gstatLink);
document.head.appendChild(fontLink);

//Navbar loader
document.addEventListener("DOMContentLoaded",function(){
    var navPlaceHolder = document.querySelector(".nav-menu-placeholder");
    var xhr = new XMLHttpRequest();
    xhr.open("GET","navigation.html",true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            navPlaceHolder.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
})


document.addEventListener("DOMContentLoaded", function(){
    var submitButton = document.getElementById("submit-button");
    if(submitButton != null){
        submitButton.addEventListener('click', formValidation);
    }
})



// firstName, lastName, email, phoneNumber, subject-textarea -> val IDs
function formValidation(){
    var fname = document.getElementById("firstName").value;
    var lname = document.getElementById("lastName").value;
    var email = document.getElementById("email-field").value;
    var pnumber = document.getElementById("phoneNumber").value;
    var subject = document.getElementById("subject-textarea").value;
    var errlbl = document.getElementById("error-text");

    if(nameValidation(fname)){
        errlbl.textContent = "enter your first name please";
    }else if(nameValidation(lname)){
        errlbl.textContent = "enter your last name please";
    }else if(emailValidation(email)){
        errlbl.textContent = "enter a valid email please";
    }else if(phoneValidation(pnumber)){
        errlbl.textContent = "enter a valid phone number";
    }else if(subject.length ==0){
        errlbl.textContent = "enter your topic and description";
    }else{
        errlbl.textContent = "";
        alert("Ticket has been submitted");
    }
}

function nameValidation(nval){
    if(nval.length != 0){
        // console.log('name');
        return false;
    }else{
        return true;
    }
}
function emailValidation(eval){
    let atSymb = eval.indexOf("@");
    let dotSymb = eval.lastIndexOf(".");
    let spaceSymb = eval.indexOf(" ");
    if((atSymb != -1)&&(atSymb != 0)&&(dotSymb != -1)&&(dotSymb != 0)&&(dotSymb > atSymb + 1)&&(eval.length > dotSymb + 1)&&(spaceSymb == -1)){
        // console.log('Email');
        return false;
    }else{
        return true;
    }
}
function phoneValidation(pnum){
    let plusSymb = pnum.indexOf("+");
    let phNum = pnum.split("");
    if((plusSymb != -1)&&(plusSymb == 0)&&(pnum.length<20)&&alphabetChecker(phNum)){
        // console.log("valid pn");
        return false;
    }else{
        return true;
    }
}
function alphabetChecker(phNum){
    const res = phNum.every(char => !(char >= 'a' && char <= 'z') || !(char >= 'A' && char <= 'Z'));
    return res;
}