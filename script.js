window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop < 50) {
    document.getElementById("divHead").style.fontSize = "40px";
  } else {
    document.getElementById("divHead").style.fontSize = "20px";
  }
}