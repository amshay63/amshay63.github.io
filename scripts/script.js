
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.display = 'flex';
    document.getElementById("header").style.textAlign = 'left';
    document.getElementById("logo").style.transform = 'scale(1)';
    document.getElementById("logo").style.transition = 'transform 0.2s';
    document.getElementById("header").style.fontSize = "20px";
    document.getElementById("navlinks").style.transform = 'translateX(0%)';
    document.getElementById("navlinks").style.transition = 'transform .5s';
  } else {
    document.getElementById("header").style.display = 'inline';
    document.getElementById("header").style.textAlign = 'center';
    document.getElementById("logo").style.transform = 'scale(1.5) ';
    document.getElementById("logo").style.transition = 'transform 0.2s';
    document.getElementById("header").style.fontSize = "15px";
    document.getElementById("navlinks").style.transform = 'translateX(39%)';
    document.getElementById("navlinks").style.transition = 'transform .5s';
       
  }
}

