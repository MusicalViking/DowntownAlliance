// --- 1. Core Styles & Libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css';
import 'aos/dist/aos.css';
import 'glightbox/dist/css/glightbox.css';

import './styles/style.scss'; // Your custom styles

// --- 2. Bootstrap JavaScript Components
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/offcanvas';
import 'bootstrap/js/dist/tooltip';

// --- 3. Third-Party Plugins
import AOS from 'aos';
import GLightbox from 'glightbox';
import '/src/lib/purecounter_vanilla.js'; // PureCounter (vanilla, non-module)

// --- 3.1 Dark Mode
import { DarkMode } from './scripts/dark-mode';

// --- 4. Init Bootstrap Tooltip
function initTooltips() {
	const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
	tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el));
}

// --- 5. Init AOS
function initAOS() {
	AOS.init({
		duration: 800,
		easing: 'ease-in-out',
		once: true,
		mirror: false
	});
}

// --- 6. Init PureCounter
function initPureCounter() {
	if (typeof PureCounter === 'function') {
		new PureCounter();
	}
}

// --- 7. Init GLightbox
function initGLightbox() {
	GLightbox({ selector: '.glightbox' });
}

// --- 8. Init Scroll-to-Top Button
function initScrollTopButton() {
	const scrollTop = document.querySelector('.scroll-top');
	if (!scrollTop) return;

	scrollTop.addEventListener('click', e => {
		e.preventDefault();
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});

	function toggleScrollTop() {
		window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
	}

	window.addEventListener('scroll', toggleScrollTop);
	window.addEventListener('load', toggleScrollTop);
}

// --- 9. Init Sticky Header Scroll Class
function initStickyHeaderScrollEffect() {
	const body = document.body;
	const header = document.querySelector('#header');

	if (!header?.classList.contains('scroll-up-sticky') &&
		!header?.classList.contains('sticky-top') &&
		!header?.classList.contains('fixed-top')) return;

	function toggleScrolled() {
		window.scrollY > 100 ? body.classList.add('scrolled') : body.classList.remove('scrolled');
	}

	document.addEventListener('scroll', toggleScrolled);
	window.addEventListener('load', toggleScrolled);
}

// --- 10. Init Mobile Navigation
function initMobileNav() {
	const toggleBtn = document.querySelector('.mobile-nav-toggle');
	const body = document.body;

	function toggleMobileNav() {
		body.classList.toggle('mobile-nav-active');
		toggleBtn?.classList.toggle('bi-list');
		toggleBtn?.classList.toggle('bi-x');
	}

	toggleBtn?.addEventListener('click', toggleMobileNav);

	// Auto-close on nav link click
	document.querySelectorAll('#navmenu a').forEach(link =>
		link.addEventListener('click', () => {
			if (body.classList.contains('mobile-nav-active')) toggleMobileNav();
		})
	);

	// Toggle dropdowns
	document.querySelectorAll('.navmenu .toggle-dropdown').forEach(toggle =>
		toggle.addEventListener('click', e => {
			e.preventDefault();
			const parent = toggle.parentElement;
			const submenu = parent?.nextElementSibling;
			parent?.classList.toggle('active');
			submenu?.classList.toggle('dropdown-active');
			e.stopImmediatePropagation();
		})
	);
}

// --- 11. Init Preloader
function initPreloader() {
	const preloader = document.querySelector('#preloader');
	if (!preloader) return;

	window.addEventListener('load', () => preloader.remove());
}

// --- 12. Init Swiper
function initSwiperSliders() {
	document.querySelectorAll(".init-swiper").forEach(swiperElement => {
		const configEl = swiperElement.querySelector(".swiper-config");
		if (!configEl) return;

		const config = JSON.parse(configEl.innerHTML.trim());
		if (swiperElement.classList.contains("swiper-tab")) {
			initSwiperWithCustomPagination(swiperElement, config); // <- You must define this elsewhere
		} else {
			new Swiper(swiperElement, config);
		}
	});
}

// --- 13. Init Isotope (with AOS refresh)
function initIsotopeFilters() {
	document.querySelectorAll('.isotope-layout').forEach(isotopeItem => {
		const layout = isotopeItem.dataset.layout || 'masonry';
		const filter = isotopeItem.dataset.defaultFilter || '*';
		const sort = isotopeItem.dataset.sort || 'original-order';

		let initIsotope;

		imagesLoaded(isotopeItem.querySelector('.isotope-container'), () => {
			initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
				itemSelector: '.isotope-item',
				layoutMode: layout,
				filter: filter,
				sortBy: sort
			});
		});

		isotopeItem.querySelectorAll('.isotope-filters li').forEach(filterBtn => {
			filterBtn.addEventListener('click', () => {
				isotopeItem.querySelector('.filter-active')?.classList.remove('filter-active');
				filterBtn.classList.add('filter-active');
				initIsotope.arrange({ filter: filterBtn.dataset.filter });

				// Refresh AOS after reflow
				if (typeof AOS !== 'undefined') AOS.refresh();
			});
		});
	});
}

// --- 14. App Init
function initApp() {
	console.log('Application started');

	initTooltips();
	initAOS();
	initPureCounter();
	initGLightbox();
	initScrollTopButton();
	initStickyHeaderScrollEffect();
	initMobileNav();
	initPreloader();
	initSwiperSliders();
	initIsotopeFilters();

	// Initialize Dark Mode
	if (document.getElementById('theme-toggle')) {
		new DarkMode();
	}
}

// --- 15. Launch App After DOM Loads
window.addEventListener('DOMContentLoaded', initApp);