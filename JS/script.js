/*Fonction navbar scroll */

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('nav');
    var iconBasket = document.getElementById('icon-basket');
    var iconProfil = document.getElementById('icon-profil');

    if (window.scrollY > 80) {
        navbar.classList.add('nav-scrolled');

        // Mettre à jour la source de l'image pour la version lors du scroll
        iconBasket.src = 'INC/IMG/Icones/panier-black.png';
        iconProfil.src = 'INC/IMG/Icones/profil-black.png';
    } else {
        navbar.classList.remove('nav-scrolled');

        // Mettre à jour la source de l'image pour la version par défaut
        iconBasket.src = 'INC/IMG/Icones/panier.png';
        iconProfil.src = 'INC/IMG/Icones/profil.png';
    }
});


window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.resp-nav');
    var iconBurgerMenu = document.getElementById('icon-burger-menu');
  
    if (window.scrollY > 0) {
      navbar.classList.add('resp-nav-scrolled');
      // Mettre à jour la source de l'image pour la version lors du scroll
      iconBurgerMenu.src = 'INC/IMG/Icones/menu-burger-blue-gradient.png';
    } else {
      navbar.classList.remove('resp-nav-scrolled');
      // Mettre à jour la source de l'image pour la version par défaut
      iconBurgerMenu.src = 'INC/IMG/Icones/menu-burger-white.png';
    }
  });