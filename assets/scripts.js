
document.addEventListener("DOMContentLoaded", function() {

  const navLinks = document.querySelectorAll('nav a');
  const path = window.location.pathname.toLowerCase();
  navLinks.forEach(link => {
    if (path.includes(link.getAttribute('href').replace('.html',''))) {
      link.classList.add('active');
    }
  });
});
