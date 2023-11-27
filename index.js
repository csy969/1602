function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("check");
    // Get the output text
    var menu = document.getElementById("hamburger-menu");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        menu.style.marginTop = "0";
        menu.style.transitionDuration = "0.3s"
    } else {
        menu.style.marginTop = "-30vh";
    }
}

var indrop = false;
var inbtn = false;
var worklist = document.getElementById("word-drop");

function myFunction2() {
    inbtn = true;
    worklist.style.opacity = "1";
}

function myFunction3() {
    inbtn = false;
    setTimeout(function() {
        if (!indrop) {
            worklist.style.opacity = "0";
        }
    }, 200);
}

function myFunction4() {
    indrop = true;
}

function myFunction5() {
    indrop = false;
    setTimeout(function() {
        if (!inbtn) {
            worklist.style.opacity = "0";
        }
    }, 200);
}