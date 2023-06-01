/*Fonction navbar scroll */

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('nav');
    if (window.scrollY > 80) {
        navbar.classList.add('nav-scrolled');
    } else {
        navbar.classList.remove('nav-scrolled');
    }
});