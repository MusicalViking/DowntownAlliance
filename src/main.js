// --- 1. Core Styles & Libraries
import 'animate.css';
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'glightbox/dist/css/glightbox.css';
import 'swiper/css';
import 'swiper/css/pagination';

import './styles/style.scss'; // Your custom styles

// --- 2. Bootstrap JavaScript Components
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/offcanvas';
import 'bootstrap/js/dist/tab';
import 'bootstrap/js/dist/tooltip';

// --- 3. Third-Party Plugins
import AOS from 'aos';
import GLightbox from 'glightbox';
import Swiper from 'swiper/bundle';
import '/src/lib/purecounter_vanilla.js'; // PureCounter (vanilla, non-module)

// --- 3.1 Dark Mode
import { initDarkMode } from './scripts/dark-mode';

// --- 4. Init Bootstrap Tooltip
function initTooltips() {
	const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
	tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el));
}

// --- 5. Init AOS
function initAOS() {
	console.log('Initializing AOS...');
	AOS.init({
		duration: 800,
		easing: 'ease-in-out',
		once: true,
		mirror: false
	});
	console.log('AOS initialized');

	// Ensure elements with AOS attributes are visible even if AOS fails
	const aosElements = document.querySelectorAll('[data-aos]');
	aosElements.forEach(el => {
		el.style.opacity = '1';
		el.style.visibility = 'visible';
	});

	// Refresh AOS after a short delay to catch dynamically added elements
	setTimeout(() => {
		console.log('Refreshing AOS...');
		AOS.refresh();
		console.log('AOS refreshed');
	}, 100);
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
	initDarkMode();

	// Debug: Check if tabs are working
	console.log('Checking tab elements...');
	const tabButtons = document.querySelectorAll('[data-bs-toggle="pill"]');
	const tabPanes = document.querySelectorAll('.tab-pane');
	console.log(`Found ${tabButtons.length} tab buttons and ${tabPanes.length} tab panes`);

	// Ensure all tab panes are properly initialized
	tabPanes.forEach(pane => {
		if (pane.classList.contains('active')) {
			console.log(`Tab pane ${pane.id} is active`);
		}
	});
}

// --- 15. Launch App After DOM Loads
if (document.readyState === 'loading') {
	// If the document is still loading, wait for DOMContentLoaded
	document.addEventListener('DOMContentLoaded', initApp);
} else {
	// If the document has already loaded, initialize immediately
	initApp();
}

// Export for potential manual initialization
window.initApp = initApp;
