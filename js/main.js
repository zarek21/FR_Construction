// A simple query selector utility
const qs = (selector, scope = document) => scope.querySelector(selector);

// --- Mobile Navigation Toggle ---
const headerToggle = qs(".header__toggle");
const mainNav = qs(".header__nav");

if (headerToggle && mainNav) {
  headerToggle.addEventListener("click", () => {
    // Toggle the navigation's visibility class
    mainNav.classList.toggle("is-open");

    // Toggle the ARIA attribute for accessibility
    const isExpanded = mainNav.classList.contains("is-open");
    headerToggle.setAttribute("aria-expanded", isExpanded);
  });
}
