
// Preloader Animation
document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');
  const preloaderBar = document.getElementById('preloaderBar');
  
  if (!preloader || !preloaderBar) {
    console.error('Preloader elements not found');
    return;
  }
  
  // Make sure preloader is visible when page loads
  preloader.style.opacity = '1';
  preloader.style.display = 'flex';
  
  let loadProgress = 0;
  const interval = setInterval(() => {
    loadProgress += Math.random() * 15;
    if (loadProgress >= 100) {
      loadProgress = 100;
      clearInterval(interval);
      
      // When loading is complete, fade out preloader
      setTimeout(() => {
        preloader.style.opacity = '0';
        
        // After fade out animation completes, hide the preloader
        setTimeout(() => {
          preloader.classList.add('hidden');
          preloader.style.display = 'none';
          
          // Animation for content
          document.querySelectorAll('.fade-in').forEach((element, index) => {
            setTimeout(() => {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
            }, 300 + (index * 100));
          });
        }, 500); // Match this with CSS transition time
      }, 600);
    }
    preloaderBar.style.width = `${loadProgress}%`;
  }, 150);
  
  // Set current year in footer
  const currentYearElement = document.getElementById('currentYear');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
});
