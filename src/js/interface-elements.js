//Make the menu background appear on scroll down
window.onscroll = function() {showHeaderBG()};

function showHeaderBG() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("Header").classList.add("header--scrolled");
    document.getElementById("Logo").classList.add("logo--scrolled");
  } else {
    document.getElementById("Header").classList.remove("header--scrolled");
    document.getElementById("Logo").classList.remove("logo--scrolled");
  }
}

/* Open and close the menu */
function openMenu() {
	document.getElementById("Menu").style.display = "block";
	document.getElementById("MenuFadeout").style.display = "block";
	var myVar = setTimeout(function() {
		document.getElementById("Menu").classList.add("menu--open");
		document.getElementById("MenuFadeout").classList.add("menu-fadeout--on");
	}, 0);
}
function closeMenu() {
	document.getElementById("Menu").classList.remove("menu--open");
	document.getElementById("MenuFadeout").classList.remove("menu-fadeout--on");
	var myVar = setTimeout(function() {
		document.getElementById("MenuFadeout").style.display = "none";
		document.getElementById("Menu").style.display = "none";
	}, 200);
}
