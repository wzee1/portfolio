// ----------
// ----------
// Navigation
// ----------
// ----------

// Selecting navigation links and the triggered toggle
const navLinks = document.querySelectorAll(".nav-links");
const navToggle = document.getElementById("page-nav-toggle");
const openPhased = document.getElementById("open-phased");

// Looping through each link
navLinks.forEach((link) => {
   // If you click a link the menu will disappear
   link.addEventListener("click", () => {
      if (navToggle.checked == true) { navToggle.checked = !navToggle.checked }
   });
});

openPhased.addEventListener("click", () => {
   if (navToggle.checked == true) { navToggle.checked = !navToggle.checked }
});

// -------------
// -------------
// Scroll Reveal
// -------------
// -------------

// For Hero only
const heroSection = document.querySelector(".reveal-hero")

function heroStyleChange() {
   heroSection.style.opacity = "1"
   heroSection.style.animation = "unset"
}

window.addEventListener("load", function() {
   setTimeout(heroStyleChange, 2000);
})

// For sections
window.addEventListener("scroll", () => {
   var reveals = document.querySelectorAll(".reveal");

   for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var revealTop = reveals[i].getBoundingClientRect().top;
      var revealPoint = 150;
      
      if (revealTop < windowHeight - revealPoint) {
         reveals[i].classList.add("active");
      } // else { reveals[i].classList.remove("active"); }
   }
});

// ---------
// Bug Fixes
// ---------

// Nav fix
function updateHorizontalMargin() {
   const hero = document.querySelector('.hero');
   const computedStyle = getComputedStyle(hero);
   const horizontalMargin = computedStyle.marginInlineStart;
   document.documentElement.style.setProperty('--horizontal-margin', horizontalMargin);
}
 
window.addEventListener('resize', updateHorizontalMargin);