
// Preloader Animation
document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');
  const preloaderBar = document.getElementById('preloaderBar');
  
  let loadProgress = 0;
  const interval = setInterval(() => {
    loadProgress += Math.random() * 15;
    if (loadProgress >= 100) {
      loadProgress = 100;
      clearInterval(interval);
      
      // When loading is complete, fade out preloader
      setTimeout(() => {
        preloader.classList.add('hidden');
        
        // Animation for content
        document.querySelectorAll('.fade-in').forEach((element, index) => {
          setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
          }, 300 + (index * 100));
        });
      }, 600);
    }
    preloaderBar.style.width = `${loadProgress}%`;
  }, 150);
  
  // Set current year in footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();
});
