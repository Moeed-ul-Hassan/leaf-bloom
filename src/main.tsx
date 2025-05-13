
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import Preloader from './components/Preloader.tsx'
import { createScrollAnimations, setupBackToTop } from './utils/animation-utils.ts'
import './index.css'

// Create root once
const rootElement = document.getElementById('root');

// Ensure root element exists
if (!rootElement) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);

// Get the base URL from the environment or default to '/'
// For GitHub Pages, we need to include the repository name
const basename = '/leaf-bloom';

// Render application with Preloader first
root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <Preloader />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

// Add enhanced animations and accessibility features
document.addEventListener('DOMContentLoaded', () => {
  // Skip to content accessibility
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

  // Setup back to top button with improved mobile support
  setupBackToTop('backToTop');
  
  // Add scroll-triggered animations with improved mobile support
  const animateElements = () => {
    // Detect if we're on a mobile device to optimize animations
    const isMobile = window.innerWidth < 768;
    
    // Stagger animations for better performance, especially on mobile
    setTimeout(() => {
      createScrollAnimations('.fade-in', 'animate-fade-in', 
        isMobile ? 0.05 : 0.1, 
        isMobile ? '50px' : '0px',
        isMobile
      );
      
      createScrollAnimations('.section-transition', 'in-view', 
        isMobile ? 0.05 : 0.15, 
        isMobile ? '50px' : '-100px',
        isMobile
      );
    }, isMobile ? 600 : 300);
  };
  
  // Initialize animations
  animateElements();
  
  // Enhance hover effects for desktop only - better performance on mobile
  if (window.matchMedia('(hover: hover)').matches) {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.classList.add('product-card-active');
      });
      card.addEventListener('mouseleave', () => {
        card.classList.remove('product-card-active');
      });
    });
  }
  
  // Handle resize events to refresh animations if needed
  let resizeTimer: number;
  window.addEventListener('resize', () => {
    // Debounce resize events
    clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      // Only re-run animations if significant size change (mobile/desktop switch)
      const wasMobile = window.innerWidth < 768;
      const isMobile = window.innerWidth < 768;
      
      if (wasMobile !== isMobile) {
        animateElements();
      }
    }, 250);
  }, { passive: true });
});
