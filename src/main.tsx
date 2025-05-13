
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import Preloader from './components/Preloader.tsx'
import './index.css'

// Create root once
const rootElement = document.getElementById('root');

// Ensure root element exists
if (!rootElement) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);

// Render application with Preloader first
root.render(
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

    // Use passive event listener for better mobile scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check in case page loads scrolled down
    handleScroll();
  }
  
  // Add animation classes to elements when they enter viewport - optimized for mobile
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in');
    
    if ('IntersectionObserver' in window) {
      // Use lower threshold on mobile for better performance
      const isMobile = window.innerWidth < 768;
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      }, { 
        threshold: isMobile ? 0.05 : 0.1,
        rootMargin: isMobile ? '50px' : '0px'
      });
      
      elements.forEach(el => observer.observe(el));
    } else {
      // Fallback for older browsers - just show the elements
      elements.forEach(el => el.classList.add('animate-fade-in'));
    }
  };
  
  // Detect if we're on a mobile device to optimize animations
  const isMobile = window.innerWidth < 768;
  
  // Delay animations slightly longer on mobile to ensure page is fully loaded
  setTimeout(animateOnScroll, isMobile ? 400 : 200);
});
