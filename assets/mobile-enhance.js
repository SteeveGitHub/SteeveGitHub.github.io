// Script pour améliorer l'affichage mobile - Ajout photo de profil
(function() {
  'use strict';
  
  // Attendre que le DOM soit chargé
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileEnhancement);
  } else {
    initMobileEnhancement();
  }
  
  function initMobileEnhancement() {
    // Vérifier si on est en mode mobile
    if (window.innerWidth <= 768) {
      enhanceMobileHero();
    }
    
    // Réévaluer lors du redimensionnement
    window.addEventListener('resize', function() {
      if (window.innerWidth <= 768) {
        enhanceMobileHero();
      }
    });
  }
  
  function enhanceMobileHero() {
    // Trouver la section hero
    const heroSection = document.querySelector('section.min-h-screen.flex.flex-col');
    if (!heroSection) return;
    
    const contentContainer = heroSection.querySelector('.max-w-4xl.mx-auto.text-center');
    if (!contentContainer) return;
    
    // Vérifier si déjà modifié
    if (contentContainer.querySelector('.mobile-profile-section')) return;
    
    // Créer la section de profil mobile
    const profileSection = document.createElement('div');
    profileSection.className = 'mobile-profile-section';
    
    // Ajouter la photo de profil
    const profileImage = document.createElement('img');
    profileImage.src = '/assets/photo_cv-FFiWVPEJ.jpg';
    profileImage.alt = 'Steeve Trincal - Développeur Full Stack';
    profileImage.className = 'mobile-profile-image';
    
    // Créer la section d'introduction
    const introSection = document.createElement('div');
    introSection.className = 'mobile-profile-intro';
    
    const introTitle = document.createElement('h2');
    introTitle.textContent = 'Qui suis-je ?';
    
    const introText = document.createElement('p');
    introText.textContent = 'Développeur Full Stack passionné basé à Lyon. Je maîtrise l\'ensemble du cycle de développement, du front-end au back-end, en passant par le mobile. Je transforme vos idées en solutions digitales performantes et innovantes.';
    
    introSection.appendChild(introTitle);
    introSection.appendChild(introText);
    
    profileSection.appendChild(profileImage);
    profileSection.appendChild(introSection);
    
    // Trouver le badge et l'insérer après
    const badge = contentContainer.querySelector('.badge');
    if (badge) {
      badge.after(profileSection);
    } else {
      contentContainer.prepend(profileSection);
    }
  }
})();
