

/*Fonction navbar DESKTOP */

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('nav');
    var iconBasket = document.getElementById('icon-basket');
    var iconProfil = document.getElementById('icon-profil');
    var iconLogo = document.getElementById('logo-img-desktop');

    if (window.scrollY > 80) {
        navbar.classList.add('nav-scrolled');

        // Mettre à jour la source de l'image pour la version lors du scroll
        iconBasket.src = 'INC/IMG/Icones/panier-black.png';
        iconProfil.src = 'INC/IMG/Icones/profil-black.png';
        iconLogo.src = 'INC/IMG/Logo/logo-dark.png';
    } else {
        navbar.classList.remove('nav-scrolled');

        // Mettre à jour la source de l'image pour la version par défaut
        iconBasket.src = 'INC/IMG/Icones/panier.png';
        iconProfil.src = 'INC/IMG/Icones/profil.png';
        iconLogo.src = 'INC/IMG/Logo/logo-light.png';
    }
});



// Fonction navbar scroll RESPONSIVE

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.resp-nav');
    var iconBurgerMenu = document.getElementById('icon-burger-menu');
    var iconLogoResp = document.getElementById('logo-img-resp');
    var iconLogoTitle = document.getElementById('logo-title');
  
    if (window.scrollY > 0) {
      navbar.classList.add('resp-nav-scrolled');
      // Mettre à jour la source de l'image pour la version lors du scroll
      iconBurgerMenu.src = 'INC/IMG/Icones/menu-burger-blue-gradient.png';
      iconLogoResp.src = 'INC/IMG/Logo/logo-dark.png';
      iconLogoTitle.src = 'INC/IMG/Logo/logo-title-black.png';
    } else {
      navbar.classList.remove('resp-nav-scrolled');
      // Mettre à jour la source de l'image pour la version par défaut
      iconBurgerMenu.src = 'INC/IMG/Icones/menu-burger-white.png';
      iconLogoResp.src = 'INC/IMG/Logo/logo-light.png';
      iconLogoTitle.src = 'INC/IMG/Logo/logo-title-white.png';
    }
  });