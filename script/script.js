let btm;

function Event(url, Id) {
  btm = document.getElementById(Id);
  btm.addEventListener("click", function () {
    // Use window.location.href to navigate to the specified URL
    window.location.href = url;
  });
}

Event("index.html", "btm1");
Event("Contact.html", "btm2");
Event("AboutMe.html", "btm3");
Event("Interested.html", "btm4");

var menuElements = document.getElementsByClassName("Menu");

for (var i = 0; i < menuElements.length; i++) {
  menuElements[i].style.display = "none";
}

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

var counter = 1;
setInterval(() => {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 2000);
