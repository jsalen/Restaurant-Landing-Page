const headerNav = document.getElementById('header-nav')
const headerLogo = document.getElementById('header-logo')
const hamburger = document.querySelector('.hamburger')

const infScroll = new InfiniteScroll('.menu', {
	path: '.pagination__next',
	append: '.menu-item',
	button: '.view-more',
	scrollThreshold: false,
})

const openHamburger = () => {
	hamburger.classList.toggle('is-active')
	toggleMenu()
}

const toggleMenu = () => {
	if (headerNav.style.display === 'block') {
		headerLogo.style.transform = 'rotate(-90deg)'
		headerLogo.style.transition = 'transform 0.5s'
		headerNav.style.display = 'none'
	} else {
		headerLogo.style.transform = 'rotate(0deg)'
		headerLogo.style.transition = 'transform 0.5s'
		headerNav.style.display = 'block'
	}
}
