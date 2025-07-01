export function initNavbar() {
  const toggleBtn = document.querySelector(".navbar-toggler");
  const nav = document.querySelector(".navbar-collapse");

  if (toggleBtn && nav) {
    toggleBtn.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
}
