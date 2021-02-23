const headerNav = document.getElementById("header-nav");
const headerLogo = document.getElementById("header-logo");

function toggleMenu() {
	if (headerNav.style.display === "block") {
		headerLogo.style.transform = "rotate(-90deg)";
		headerLogo.style.transition = "transform ease 0.2s";
		headerNav.style.display = "none";
	} else {
		headerNav.style.display = "block";
		headerLogo.style.transform = "rotate(0deg)";
		headerLogo.style.transition = "transform ease 0.2s";
	}
}
