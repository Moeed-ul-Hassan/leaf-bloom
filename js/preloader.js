
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
  
  // Add floating leaves for a more creative preloader
  const createFloatingLeaf = () => {
    const leaf = document.createElement('div');
    leaf.className = 'floating-leaf';
    leaf.style.left = `${Math.random() * 100}%`;
    leaf.style.animationDelay = `${Math.random() * 3}s`;
    leaf.style.animationDuration = `${3 + Math.random() * 4}s`;
    leaf.innerHTML = `
      <svg viewBox="0 0 24 24" width="20" height="20" fill="#50AF33" opacity="0.6">
        <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
      </svg>
    `;
    preloader.appendChild(leaf);
  };
  
  // Create multiple leaves
  for (let i = 0; i < 10; i++) {
    createFloatingLeaf();
  }
  
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
          
          // Add "no selling" notification with enhanced animation
          const noSellingNotice = document.createElement('div');
          noSellingNotice.className = 'notification';
          noSellingNotice.innerHTML = `
            <div class="notification-content">
              <span class="notification-icon">🍃</span>
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
  
  // Add creative interactive elements throughout the page
  window.addEventListener('DOMContentLoaded', () => {
    // Add parallax effect to hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
      window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const heroElements = heroSection.querySelectorAll('.hero__decoration');
        heroElements.forEach((elem, index) => {
          elem.style.transform = `translateY(${scrollPosition * (0.1 + index * 0.05)}px)`;
        });
      });
    }
    
    // Add interactive product card hover effects
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.classList.add('product-card-active');
      });
      card.addEventListener('mouseleave', () => {
        card.classList.remove('product-card-active');
      });
    });
  });
});
