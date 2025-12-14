// Fix pour réinitialiser la pagination du modal à chaque ouverture
(function() {
  'use strict';
  
  let lastModalContent = null;
  let resetTimeout = null;
  
  // Fonction pour réinitialiser la pagination
  function resetPagination(modalElement) {
    // Nettoyer le timeout précédent
    if (resetTimeout) {
      clearTimeout(resetTimeout);
    }
    
    resetTimeout = setTimeout(() => {
      // Trouver le container de pagination
      const paginationContainer = modalElement.querySelector('div.flex.items-center.gap-3');
      
      if (paginationContainer) {
        const buttons = paginationContainer.querySelectorAll('button.w-12.h-12.rounded-full');
        
        if (buttons.length > 0) {
          console.log('Trouvé', buttons.length, 'boutons de pagination');
          
          // Simuler un vrai clic utilisateur sur le premier bouton
          const firstButton = buttons[0];
          
          // Utiliser plusieurs événements pour s'assurer que ça marche
          ['mousedown', 'mouseup', 'click'].forEach(eventType => {
            const event = new MouseEvent(eventType, {
              bubbles: true,
              cancelable: true,
              view: window
            });
            firstButton.dispatchEvent(event);
          });
          
          console.log('Pagination réinitialisée à 1');
        }
      }
    }, 150);
  }
  
  // Observer les changements dans le DOM
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        // Vérifier si c'est un modal
        if (node.nodeType === 1 && node.classList) {
          
          // Détecter l'ouverture d'un modal (classe fixed + z-[99999])
          if (node.classList.contains('fixed') && 
              node.classList.contains('z-[99999]') && 
              node.classList.contains('inset-0')) {
            
            // Vérifier si le contenu du modal a changé
            const modalContent = node.querySelector('h2');
            const currentContent = modalContent ? modalContent.textContent : '';
            
            // Si c'est un nouveau projet ou le premier modal
            if (currentContent !== lastModalContent) {
              console.log('Nouveau modal détecté:', currentContent);
              lastModalContent = currentContent;
              resetPagination(node);
            }
          }
        }
      });
      
      // Détecter la fermeture du modal
      mutation.removedNodes.forEach((node) => {
        if (node.nodeType === 1 && node.classList &&
            node.classList.contains('fixed') && 
            node.classList.contains('z-[99999]')) {
          lastModalContent = null;
          console.log('Modal fermé, reset du contenu');
        }
      });
    });
  });
  
  // Attendre que le DOM soit chargé avant d'observer
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
      console.log('✅ Modal pagination fix chargé et actif (DOMContentLoaded)');
    });
  } else {
    // Le DOM est déjà chargé
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    console.log('✅ Modal pagination fix chargé et actif');
  }
})();
