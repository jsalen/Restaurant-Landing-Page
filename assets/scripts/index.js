const headerNav = document.getElementById("header-nav");
const headerLogo = document.getElementById("header-logo");
const hamburger = document.querySelector(".hamburger");

function openHamburger() {
	hamburger.classList.toggle("is-active");
	toggleMenu();
}

function toggleMenu() {
	if (headerNav.style.display === "block") {
		headerLogo.style.transform = "rotate(-90deg)";
		headerLogo.style.transition = "transform 0.5s";
		headerNav.style.display = "none";
		headerNav.style.transition = "all 2s";
	} else {
		headerLogo.style.transform = "rotate(0deg)";
		headerLogo.style.transition = "transform 0.5s";
		headerNav.style.display = "block";
		headerNav.style.transition = "all 2s";
	}
}
