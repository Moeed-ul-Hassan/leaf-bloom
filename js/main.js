
// Main JavaScript
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.navbar__menu-toggle');
  const navbarLinks = document.querySelector('.navbar__links');
  
  if (menuToggle && navbarLinks) {
    menuToggle.addEventListener('click', () => {
      navbarLinks.classList.toggle('navbar__links--active');
    });
  }
  
  // Newsletter form submission
  const newsletterForm = document.getElementById('newsletterForm');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      
      if (email) {
        // Would typically send to a server
        console.log(`Newsletter subscription: ${email}`);
        
        // Show success feedback
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Subscribed!';
        submitButton.disabled = true;
        
        setTimeout(() => {
          submitButton.textContent = originalText;
          submitButton.disabled = false;
          emailInput.value = '';
        }, 2000);
      }
    });
  }
  
  // Scroll to section functionality for the hero scroll indicator
  const heroScroll = document.querySelector('.hero__scroll');
  
  if (heroScroll) {
    heroScroll.addEventListener('click', () => {
      const productsSection = document.querySelector('.products');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
  
  // Add fade-in animations to sections
  const sections = document.querySelectorAll('section');
  
  function checkInView() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.75 && !section.classList.contains('visible')) {
        section.querySelectorAll('.fade-in').forEach((element, index) => {
          setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
          }, 100 * index);
        });
        
        section.classList.add('visible');
      }
    });
  }
  
  // Check on load
  checkInView();
  
  // Check on scroll
  window.addEventListener('scroll', checkInView);
  
  // Add dark/light mode toggle
  const createThemeToggle = () => {
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="theme-toggle__icon">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
    
    themeToggle.style.position = 'fixed';
    themeToggle.style.bottom = '1.5rem';
    themeToggle.style.right = '1.5rem';
    themeToggle.style.width = '3rem';
    themeToggle.style.height = '3rem';
    themeToggle.style.borderRadius = '50%';
    themeToggle.style.backgroundColor = 'var(--card)';
    themeToggle.style.color = 'var(--foreground)';
    themeToggle.style.display = 'flex';
    themeToggle.style.alignItems = 'center';
    themeToggle.style.justifyContent = 'center';
    themeToggle.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    themeToggle.style.zIndex = '100';
    themeToggle.style.cursor = 'pointer';
    themeToggle.style.transition = 'all 0.3s';
    
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      
      // Store preference
      const isDark = document.body.classList.contains('dark');
      localStorage.setItem('darkMode', isDark ? 'true' : 'false');
    });
    
    document.body.appendChild(themeToggle);
    
    // Load saved preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'false') {
      document.body.classList.remove('dark');
    }
  };
  
  createThemeToggle();
  
  // Placeholder handling for images
  document.querySelectorAll('img').forEach(img => {
    if (!img.src || img.src.includes('placeholder.svg')) {
      img.style.backgroundColor = 'var(--muted)';
      
      // Create SVG placeholder
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '100%');
      svg.setAttribute('height', '100%');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke', 'currentColor');
      svg.setAttribute('stroke-width', '2');
      svg.setAttribute('stroke-linecap', 'round');
      svg.setAttribute('stroke-linejoin', 'round');
      
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', 'M12 5v14M5 12h14');
      svg.appendChild(path);
      
      img.parentNode.appendChild(svg);
      svg.style.position = 'absolute';
      svg.style.top = '50%';
      svg.style.left = '50%';
      svg.style.transform = 'translate(-50%, -50%)';
      svg.style.width = '20%';
      svg.style.height = '20%';
      svg.style.color = 'rgba(255, 255, 255, 0.2)';
    }
  });
});
