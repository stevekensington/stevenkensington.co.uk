function showHeaderBG(){200<document.body.scrollTop||200<document.documentElement.scrollTop?(document.getElementById("Header").classList.add("header--scrolled"),document.getElementById("Logo").classList.add("logo--scrolled")):(document.getElementById("Header").classList.remove("header--scrolled"),document.getElementById("Logo").classList.remove("logo--scrolled"))}function openMenu(){document.getElementById("Menu").style.display="block",document.getElementById("MenuFadeout").style.display="block";setTimeout(function(){document.getElementById("Menu").classList.add("menu--open"),document.getElementById("MenuFadeout").classList.add("menu-fadeout--on")},0)}function closeMenu(){document.getElementById("Menu").classList.remove("menu--open"),document.getElementById("MenuFadeout").classList.remove("menu-fadeout--on");setTimeout(function(){document.getElementById("MenuFadeout").style.display="none",document.getElementById("Menu").style.display="none"},200)}window.onscroll=function(){showHeaderBG()};