// HEADER

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "0.5em";
    document.getElementById("logo").style.width = "20rem";
  } else {
    document.getElementById("header").style.fontSize = "1em";
    document.getElementById("logo").style.width = "30rem";
  }
}
