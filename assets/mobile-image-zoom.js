// Gestion du zoom sur les images du modal en mobile
(function() {
  'use strict';
  
  let scale = 1;
  let panning = false;
  let pointX = 0;
  let pointY = 0;
  let start = { x: 0, y: 0 };
  let lastTap = 0;
  
  function setupImageZoom() {
    // Observer l'apparition du modal
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1 && node.classList && 
              node.classList.contains('fixed') && 
              node.classList.contains('z-[99999]')) {
            
            // Trouver l'image dans le modal
            setTimeout(() => {
              const modalImage = node.querySelector('.w-full.rounded-2xl img');
              if (modalImage && window.innerWidth <= 768) {
                enableZoom(modalImage);
              }
            }, 100);
          }
        });
      });
    });
    
    if (document.body) {
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
  }
  
  function enableZoom(image) {
    // Reset
    scale = 1;
    pointX = 0;
    pointY = 0;
    
    // Double tap pour zoomer
    image.addEventListener('touchend', function(e) {
      const currentTime = new Date().getTime();
      const tapLength = currentTime - lastTap;
      
      if (tapLength < 300 && tapLength > 0) {
        // Double tap détecté
        e.preventDefault();
        
        if (scale === 1) {
          // Zoomer
          scale = 2;
        } else {
          // Dézoomer
          scale = 1;
          pointX = 0;
          pointY = 0;
        }
        
        setTransform(image);
      }
      
      lastTap = currentTime;
    });
    
    // Pinch to zoom
    let initialDistance = 0;
    let initialScale = 1;
    
    image.addEventListener('touchstart', function(e) {
      if (e.touches.length === 2) {
        e.preventDefault();
        initialDistance = getDistance(e.touches[0], e.touches[1]);
        initialScale = scale;
      } else if (e.touches.length === 1 && scale > 1) {
        panning = true;
        start = { x: e.touches[0].clientX - pointX, y: e.touches[0].clientY - pointY };
      }
    });
    
    image.addEventListener('touchmove', function(e) {
      if (e.touches.length === 2) {
        e.preventDefault();
        const currentDistance = getDistance(e.touches[0], e.touches[1]);
        scale = initialScale * (currentDistance / initialDistance);
        scale = Math.min(Math.max(1, scale), 4); // Limiter entre 1x et 4x
        setTransform(image);
      } else if (e.touches.length === 1 && panning && scale > 1) {
        e.preventDefault();
        pointX = e.touches[0].clientX - start.x;
        pointY = e.touches[0].clientY - start.y;
        setTransform(image);
      }
    });
    
    image.addEventListener('touchend', function(e) {
      if (e.touches.length === 0) {
        panning = false;
        
        // Si on a dézoomé en dessous de 1, revenir à 1
        if (scale < 1) {
          scale = 1;
          pointX = 0;
          pointY = 0;
          setTransform(image);
        }
      }
    });
  }
  
  function setTransform(image) {
    image.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
    image.style.transformOrigin = 'center center';
    image.style.transition = scale === 1 ? 'transform 0.3s ease' : 'none';
    
    // Changer le curseur
    if (scale > 1) {
      image.style.cursor = 'zoom-out';
    } else {
      image.style.cursor = 'zoom-in';
    }
  }
  
  function getDistance(touch1, touch2) {
    const dx = touch1.clientX - touch2.clientX;
    const dy = touch1.clientY - touch2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }
  
  // Initialiser quand le DOM est prêt
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupImageZoom);
  } else {
    setupImageZoom();
  }
  
  console.log('📱 Mobile image zoom activé');
})();
