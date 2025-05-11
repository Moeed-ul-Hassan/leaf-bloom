import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import CategorySection from "@/components/CategorySection";
import CreatorSpotlight from "@/components/CreatorSpotlight";
import TestimonialSection from "@/components/TestimonialSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

// Creative morphing blobs background component
const MorphingBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div 
        className="morphing-blob w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] -left-[100px] -top-[200px]"
        style={{animationDelay: '0s'}}
      />
      <div 
        className="morphing-blob w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] -right-[200px] sm:-right-[300px] -bottom-[200px] sm:-bottom-[400px]"
        style={{animationDelay: '4s'}}
      />
      <div 
        className="morphing-blob hidden sm:block w-[600px] h-[600px] left-[50%] top-[30%]"
        style={{animationDelay: '8s'}}
      />
      <div 
        className="morphing-blob hidden sm:block w-[400px] h-[400px] right-[20%] top-[10%]"
        style={{animationDelay: '12s'}}
      />
    </div>
  );
};

// Decorative spinning elements
const SpinElements = () => {
  return (
    <>
      <div className="hidden sm:block spin-element w-24 h-24 rounded-full left-[10%] top-[30%]" />
      <div className="hidden sm:block spin-element w-36 h-36 rounded-full right-[5%] top-[60%]" 
           style={{animationDirection: 'reverse' as const}} />
      <div className="hidden sm:block spin-element w-20 h-20 rounded-full left-[8%] bottom-[15%]" 
           style={{animationDuration: '12s'}} />
    </>
  );
};

// SEO meta component for better search engine visibility
const SEOMeta = () => {
  useEffect(() => {
    // Update document title for SEO
    document.title = "LeafBloom - Premium Digital Marketplace";
    
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Discover luxury digital creations at LeafBloom - the premium marketplace for digital products, courses, and templates crafted by world-renowned creators.';
    document.head.appendChild(metaDescription);
    
    // Add canonical link
    const canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = window.location.href;
    document.head.appendChild(canonicalLink);
    
    return () => {
      // Cleanup function to remove added elements if component unmounts
      document.head.removeChild(metaDescription);
      document.head.removeChild(canonicalLink);
    };
  }, []);
  
  return null;
};

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Create animated floating leaves randomly across the page
    const createLeafDecorations = () => {
      const leafSVGs = [
        `<svg viewBox="0 0 24 24" width="24" height="24" fill="#50AF33" opacity="0.4"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" /></svg>`,
        `<svg viewBox="0 0 24 24" width="20" height="20" fill="#264F18" opacity="0.3"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" /></svg>`,
      ];

      // Clear any existing leaves to prevent duplicates
      const existingLeaves = document.querySelectorAll('.deco-leaf');
      existingLeaves.forEach(leaf => leaf.remove());

      // Only create leaves on larger screens
      if (window.innerWidth <= 768) return;

      for (let i = 0; i < 6; i++) {
        const leaf = document.createElement('div');
        leaf.classList.add('deco-leaf');
        leaf.innerHTML = leafSVGs[Math.floor(Math.random() * leafSVGs.length)];
        
        // Random position
        leaf.style.left = `${10 + Math.random() * 80}%`;
        leaf.style.top = `${20 + Math.random() * 60}%`;
        
        // Random animation
        leaf.style.animationDuration = `${10 + Math.random() * 10}s`;
        leaf.style.animationDelay = `${Math.random() * 5}s`;
        leaf.classList.add('animate-float');
        
        document.body.appendChild(leaf);
      }
    };

    // Add scroll animations to elements
    const addScrollAnimations = () => {
      const animateElements = document.querySelectorAll('.animate-on-scroll');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      animateElements.forEach(el => observer.observe(el));
    };

    // Optimized parallax effect for better mobile performance
    let ticking = false;
    const handleParallax = () => {
      if (window.innerWidth <= 768) return; // Skip parallax on mobile
      
      const scrollY = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach((el, index) => {
        const speed = 0.1 + (index * 0.05);
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
    
    // Create optimized leaf decorations that won't impact mobile performance
    setTimeout(() => {
      createLeafDecorations();
      
      // Add resize handler to recreate leaves when window is resized
      const handleResize = () => {
        createLeafDecorations();
      };
      
      window.addEventListener('resize', handleResize, { passive: true });
      window.addEventListener('scroll', requestTick, { passive: true });
      
      // Only run these effects on larger screens
      if (window.innerWidth > 768) {
        setTimeout(addScrollAnimations, 500);
      }
      
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', requestTick);
      };
    }, 1000);
    
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEOMeta />
      <MorphingBackground />
      <SpinElements />
      <Navbar />
      <Hero />
      <ProductGrid title="Curated Digital Masterpieces" products={[]} />
      <CategorySection />
      <CreatorSpotlight />
      <TestimonialSection />
      <NewsletterSection />
      <Footer />
      
      {/* Add "No Selling" notification - make it more mobile friendly */}
      <div className="fixed bottom-4 left-4 z-50 p-3 sm:p-4 max-w-[calc(100vw-32px)] sm:max-w-xs bg-destructive text-white rounded-lg shadow-lg animate-bounce-slow text-xs sm:text-sm">
        <div className="flex items-center gap-2">
          <span className="font-medium">Marketplace Info:</span>
          <span className="line-clamp-2">This is a showcase platform only.</span>
        </div>
      </div>
      
      {/* Back to top button with smooth scroll */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 z-50 p-2 sm:p-3 bg-ryb-green text-white rounded-full shadow-lg hover:bg-dark-green transition-colors opacity-0 translate-y-10 hover:scale-110"
        id="backToTop"
        aria-label="Scroll back to top"
        style={{
          opacity: 0,
          transform: 'translateY(10px)',
          transition: 'opacity 0.3s, transform 0.3s',
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </div>
  );
};

export default Index;
