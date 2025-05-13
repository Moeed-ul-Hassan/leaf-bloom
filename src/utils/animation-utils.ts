
/**
 * Animation utilities for smooth transitions and performance optimizations
 */

/**
 * Applies a staggered animation to elements with a specified delay between each
 * @param elements - NodeList of elements to animate
 * @param className - CSS class to apply for the animation
 * @param baseDelay - Starting delay in milliseconds
 * @param stagger - Additional delay in ms between each element
 * @param limit - Optional max number of elements to animate (for performance)
 */
export const applyStaggeredAnimation = (
  elements: NodeListOf<Element>,
  className: string,
  baseDelay = 0,
  stagger = 100,
  limit?: number
) => {
  const elementsArray = Array.from(elements);
  const itemsToAnimate = limit ? elementsArray.slice(0, limit) : elementsArray;

  itemsToAnimate.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add(className);
    }, baseDelay + index * stagger);
  });
};

/**
 * Creates IntersectionObserver for animating elements when scrolled into view
 * @param selector - CSS selector for elements to observe
 * @param animationClass - CSS class to apply when visible
 * @param threshold - Visibility threshold (0-1)
 * @param rootMargin - Margin around the root
 * @param isMobile - Whether we're on mobile (for performance optimization)
 */
export const createScrollAnimations = (
  selector: string,
  animationClass = 'animate-in',
  threshold = 0.1,
  rootMargin = '0px',
  isMobile = false
) => {
  const elements = document.querySelectorAll(selector);
  
  if (elements.length === 0) return;
  
  // Use lower threshold and different margins for mobile
  const mobileOptimizedThreshold = isMobile ? 0.05 : threshold;
  const mobileOptimizedMargin = isMobile ? '50px' : rootMargin;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animationClass);
        observer.unobserve(entry.target); // Stop observing once animation is triggered
      }
    });
  }, { 
    threshold: mobileOptimizedThreshold,
    rootMargin: mobileOptimizedMargin
  });
  
  // Limit the number of observed elements on mobile for better performance
  const elementsToObserve = isMobile ? 
    Array.from(elements).slice(0, 15) : // Limit to 15 elements on mobile
    elements;
  
  elementsToObserve.forEach(el => observer.observe(el));
  
  return observer; // Return for cleanup
};

/**
 * Optimized parallax effect function for scroll events
 * @param selector - CSS selector for elements to apply parallax effect to
 * @param speedFactor - Base speed factor for the parallax effect
 * @param isMobile - Whether we're on mobile (skips on mobile for performance)
 */
export const setupParallaxEffect = (
  selector: string,
  speedFactor = 0.1,
  isMobile = false
) => {
  if (isMobile) return () => {}; // Skip on mobile for performance
  
  let ticking = false;
  const elements = document.querySelectorAll(selector);
  
  if (elements.length === 0) return () => {};
  
  const handleParallax = () => {
    const scrollY = window.scrollY;
    
    elements.forEach((el, index) => {
      const speed = speedFactor + (index * 0.05);
      const yPos = -(scrollY * speed);
      (el as HTMLElement).style.transform = `translateY(${yPos}px)`;
    });
    
    ticking = false;
  };
  
  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(handleParallax);
      ticking = true;
    }
  };
  
  // Add event listener
  window.addEventListener('scroll', requestTick, { passive: true });
  
  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', requestTick);
  };
};

/**
 * Creates a smooth scrolling effect to the target element
 * @param targetId - ID of the element to scroll to
 * @param offset - Offset from the top of the element in pixels
 */
export const smoothScrollTo = (targetId: string, offset = 0) => {
  const element = document.getElementById(targetId);
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Setup back to top button visibility based on scroll position
 * @param buttonId - ID of the back to top button element
 * @param showAtPosition - Position at which to show the button (pixels from top)
 */
export const setupBackToTop = (buttonId: string, showAtPosition = 300) => {
  const button = document.getElementById(buttonId);
  
  if (!button) return;
  
  const handleScroll = () => {
    if (window.scrollY > showAtPosition) {
      button.style.opacity = '1';
      button.style.transform = 'translateY(0)';
    } else {
      button.style.opacity = '0';
      button.style.transform = 'translateY(10px)';
    }
  };
  
  // Use passive event listener for better performance
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // Initial check
  handleScroll();
  
  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};
