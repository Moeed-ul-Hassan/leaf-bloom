
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import Preloader from './components/Preloader.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Preloader />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

// Add scroll-triggered animations with improved mobile support
document.addEventListener('DOMContentLoaded', () => {
  // Skip to content functionality
  const skipLink = document.querySelector('.skip-to-content');
  if (skipLink) {
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.setAttribute('tabindex', '-1');
        mainContent.focus();
      }
    });
  }

  // Back to top button visibility logic with improved touch device support
  const backToTop = document.getElementById('backToTop');
  
  if (backToTop) {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        backToTop.style.opacity = '1';
        backToTop.style.transform = 'translateY(0)';
      } else {
        backToTop.style.opacity = '0';
        backToTop.style.transform = 'translateY(10px)';
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check in case page loads scrolled down
    handleScroll();
  }
  
  // Add animation classes to elements when they enter viewport
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in');
    
    // Only set up animations on devices that can handle it
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      elements.forEach(el => observer.observe(el));
    } else {
      // Fallback for older browsers - just show the elements
      elements.forEach(el => el.classList.add('animate-fade-in'));
    }
  };
  
  // Run animations after a slight delay to ensure DOM is ready
  setTimeout(animateOnScroll, 200);
});
