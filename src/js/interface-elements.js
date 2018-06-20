//Make the menu background appear on scroll down
window.onscroll = function() {showMenuBG()};

function showMenuBG() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("Header").classList.add("header--scrolled");
    document.getElementById("Logo").classList.add("logo--scrolled");
  } else {
    document.getElementById("Header").classList.remove("header--scrolled");
    document.getElementById("Logo").classList.remove("logo--scrolled");
  }
}
