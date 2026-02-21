/* =====================================================
   PAU HANA RP — SHARED SCRIPTS
   Centralized JavaScript for consistency across all pages
===================================================== */

/**
 * Page Transition Handler
 * Creates smooth transitions between pages
 */
function initPageTransition() {
  const transition = document.getElementById("page-transition");
  if (!transition) return;

  // Handle clicks on internal links
  document.querySelectorAll("a[href]").forEach(link => {
    // Skip external links, anchors, and javascript links
    if (
      link.target === "_blank" ||
      link.href.includes("#") ||
      link.href.startsWith("javascript")
    ) return;

    link.addEventListener("click", e => {
      e.preventDefault();
      const url = link.href;

      transition.classList.add("active");

      setTimeout(() => {
        window.location.href = url;
      }, 520);
    });
  });

  // Remove transition overlay after page load
  window.addEventListener("load", () => {
    setTimeout(() => {
      transition.classList.remove("active");
    }, 320);
  });
}

/**
 * Footer Year Updater
 * Automatically updates copyright year
 */
function initFooterYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/**
 * Rotating Slogan Handler
 * Cycles through slogans with fade animation
 */
function initRotatingSlogan(slogans) {
  const el = document.getElementById("rotating-slogan");
  if (!el || !slogans || slogans.length === 0) return;

  let i = 0;

  setInterval(() => {
    el.classList.add("slogan-hidden");
    setTimeout(() => {
      i = (i + 1) % slogans.length;
      el.textContent = slogans[i];
      el.classList.remove("slogan-hidden");
    }, 600);
  }, 3500);
}

/**
 * Initialize all shared functionality
 */
function initShared() {
  initPageTransition();
  initFooterYear();
}

// Auto-initialize when DOM is ready
document.addEventListener("DOMContentLoaded", initShared);
