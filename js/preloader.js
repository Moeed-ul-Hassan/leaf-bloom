
// Preloader Animation with improved transitions
document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');
  const preloaderBar = document.getElementById('preloaderBar');
  
  if (!preloader || !preloaderBar) {
    console.error('Preloader elements not found');
    return;
  }
  
  // Enhanced visibility style for preloader
  preloader.style.opacity = '1';
  preloader.style.display = 'flex';
  
  // Add a smooth gradient animation to the preloader background
  const preloaderBg = document.createElement('div');
  preloaderBg.className = 'preloader-background';
  preloader.appendChild(preloaderBg);
  
  let loadProgress = 0;
  const interval = setInterval(() => {
    loadProgress += Math.random() * 10 + 5; // Slightly faster loading
    if (loadProgress >= 100) {
      loadProgress = 100;
      clearInterval(interval);
      
      // When loading is complete, add enhanced fade out effect
      setTimeout(() => {
        preloader.classList.add('fade-out');
        
        // After fade out animation completes, hide the preloader
        setTimeout(() => {
          preloader.classList.add('hidden');
          preloader.style.display = 'none';
          
          // Enhanced animation for content with staggered reveal
          document.querySelectorAll('.fade-in').forEach((element, index) => {
            setTimeout(() => {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0) scale(1)';
            }, 200 + (index * 120));
          });
          
          // Add "no selling" notification
          const noSellingNotice = document.createElement('div');
          noSellingNotice.className = 'notification';
          noSellingNotice.innerHTML = `
            <div class="notification-content">
              <span class="notification-icon">ℹ️</span>
              <p>Welcome to our digital marketplace! Please note that we are a curated platform and do not allow third-party selling.</p>
              <button class="notification-close">&times;</button>
            </div>
          `;
          document.body.appendChild(noSellingNotice);
          
          setTimeout(() => {
            noSellingNotice.classList.add('notification-visible');
            
            // Setup notification close button
            const closeBtn = noSellingNotice.querySelector('.notification-close');
            closeBtn.addEventListener('click', () => {
              noSellingNotice.classList.remove('notification-visible');
              setTimeout(() => {
                noSellingNotice.remove();
              }, 300);
            });
            
            // Auto-hide notification after 10 seconds
            setTimeout(() => {
              noSellingNotice.classList.remove('notification-visible');
              setTimeout(() => {
                noSellingNotice.remove();
              }, 300);
            }, 10000);
          }, 1500);
        }, 600); // Match this with CSS transition time
      }, 800);
    }
    preloaderBar.style.width = `${loadProgress}%`;
  }, 150);
  
  // Set current year in footer
  const currentYearElement = document.getElementById('currentYear');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
});
