let btm;
var menuElements = document.getElementsByClassName("Menu");
function menulogo() {
  var newDiv = document.getElementById("Menu_logo");
  if (newDiv) {
    newDiv.style.display = "none";
    return `logoIsRemoved`;
  }
}

function Menu() {
  btm = document.getElementsByClassName("Menu");
  if (menulogo() === "logoIsRemoved") {
    for (var i = 0; i < menuElements.length; i++) {
      menuElements[i].style.display = "block";
    }
  }
}

// slider js

// var counter = 1;
// setInterval(() => {
//   document.getElementById("radio" + counter).checked = true;
//   counter++;
//   if (counter > 4) {
//     counter = 1;
//   }
// }, 2000);
