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

// Read more buttom
document.getElementById("readMoreBtn").addEventListener("click", function () {
  var moreText = document.querySelector(".aboutMe_Text .more-text");
  var shortText = document.querySelector(".aboutMe_Text .short-text");
  var btnText = document.getElementById("readMoreBtn");

  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    shortText.style.display = "none";
    btnText.innerHTML = "Read Less";
  } else {
    moreText.style.display = "none";
    shortText.style.display = "block";
    btnText.innerHTML = "Read More";
  }
});

function remove_menu() {
  let menu = document.getElementsByClassName("Menu");
  menu.style.display = none;
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
