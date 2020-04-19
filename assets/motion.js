// HEADER

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "0.5em";
    document.getElementById("logo").style.width = "20rem";
    // document.getElementById("header").classList.remove("i");
  } else {
    document.getElementById("header").style.fontSize = "1em";
    document.getElementById("logo").style.width = "30rem";
  }
}

// NAV

function nav() {
  var navLinks = document.getElementById("nav-links");
  if (navLinks.style.right === "0px") {
    navLinks.style.right = "-30%";
  } else {
    navLinks.style.right = "0px";
  }
}
