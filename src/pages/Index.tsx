
import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import CategorySection from "@/components/CategorySection";
import CreatorSpotlight from "@/components/CreatorSpotlight";
import TestimonialSection from "@/components/TestimonialSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

// Creative morphing blobs background component
const MorphingBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div 
        className="morphing-blob w-[500px] h-[500px] -left-[100px] -top-[200px]"
        style={{animationDelay: '0s'}}
      />
      <div 
        className="morphing-blob w-[800px] h-[800px] -right-[300px] -bottom-[400px]"
        style={{animationDelay: '4s'}}
      />
      <div 
        className="morphing-blob w-[600px] h-[600px] left-[50%] top-[30%]"
        style={{animationDelay: '8s'}}
      />
      <div 
        className="morphing-blob w-[400px] h-[400px] right-[20%] top-[10%]"
        style={{animationDelay: '12s'}}
      />
    </div>
  );
};

// Decorative spinning elements
const SpinElements = () => {
  return (
    <>
      <div className="spin-element w-24 h-24 rounded-full left-[10%] top-[30%]" />
      <div className="spin-element w-36 h-36 rounded-full right-[5%] top-[60%]" style={{animationDirection: 'reverse'}} />
      <div className="spin-element w-20 h-20 rounded-full left-[8%] bottom-[15%]" style={{animationDuration: '12s'}} />
    </>
  );
};

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Create custom cursor effect
    const createCustomCursor = () => {
      const cursor = document.createElement('div');
      cursor.classList.add('custom-cursor');
      document.body.appendChild(cursor);

      document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      });

      document.addEventListener('mousedown', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
      });

      document.addEventListener('mouseup', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      });

      // Enhance cursor on hover over links and buttons
      const interactiveElements = document.querySelectorAll('a, button');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursor.style.width = '40px';
          cursor.style.height = '40px';
          cursor.style.backgroundColor = 'rgba(80, 175, 51, 0.1)';
        });

        el.addEventListener('mouseleave', () => {
          cursor.style.width = '32px';
          cursor.style.height = '32px';
          cursor.style.backgroundColor = 'transparent';
        });
      });
    };

    // Create animated floating leaves randomly across the page
    const createLeafDecorations = () => {
      const leafSVGs = [
        `<svg viewBox="0 0 24 24" width="24" height="24" fill="#50AF33" opacity="0.4"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" /></svg>`,
        `<svg viewBox="0 0 24 24" width="20" height="20" fill="#264F18" opacity="0.3"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" /></svg>`,
      ];

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

    // Only run these effects on larger screens
    if (window.innerWidth > 768) {
      // Uncomment for custom cursor
      // createCustomCursor();
      createLeafDecorations();
    }
    
    // Add parallax scroll effect
    const handleParallax = () => {
      const scrollY = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach((el, index) => {
        const speed = 0.1 + (index * 0.05);
        const yPos = -(scrollY * speed);
        el.style.transform = `translateY(${yPos}px)`;
      });
    };
    
    window.addEventListener('scroll', handleParallax);
    
    return () => {
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
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
    </div>
  );
};

export default Index;
