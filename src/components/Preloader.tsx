
import React, { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const Preloader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Ensure we start quickly but gradually slow down for a more natural loading feel
    const calculateNextIncrement = (current: number) => {
      // Start fast, slow down as we approach 100%
      return Math.max(1, Math.floor((100 - current) / 5));
    };

    const interval = setInterval(() => {
      setProgress(prev => {
        const nextIncrement = calculateNextIncrement(prev);
        const newValue = prev + nextIncrement;
        
        if (newValue >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
          }, 600); // Match with CSS transition time
          return 100;
        }
        return newValue;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Don't render anything if not visible
  if (!visible) return null;

  return (
    <div 
      id="preloader" 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-dark-green to-ryb-green
                  transition-opacity duration-700 ease-in-out ${progress >= 100 ? 'opacity-0' : 'opacity-100'}`}
      aria-label="Loading application"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="preloader-background absolute inset-0"></div>
      <div id="preloaderContent" className="relative z-10 text-center">
        <div className={`${isMobile ? 'w-40 h-40' : 'w-36 h-36'} mx-auto mb-6 relative flex items-center justify-center`}>
          <div className="rounded-full overflow-hidden bg-white p-2 shadow-lg">
            <img 
              src="/lovable-uploads/13dd9c89-afdb-499f-9d0d-6a453c1336cf.png" 
              alt="LeafBloom Logo" 
              className="w-full h-auto animate-pulse"
            />
          </div>
          
          {/* Animated particles around the logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-2 h-2 bg-pale-gold rounded-full opacity-70"
                style={{
                  top: `${50 + Math.sin(i * 60 * Math.PI / 180) * 40}%`,
                  left: `${50 + Math.cos(i * 60 * Math.PI / 180) * 40}%`,
                  animation: `float ${2 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}
                aria-hidden="true"
              ></div>
            ))}
          </div>
        </div>
        
        <div className="w-56 h-3 mx-auto bg-white/10 rounded-full overflow-hidden mb-6">
          <div 
            id="preloaderBar" 
            className="h-full bg-gradient-to-r from-ryb-green to-pale-gold rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
            aria-hidden="true"
          ></div>
        </div>
        
        <div className="text-white text-2xl font-display font-bold tracking-widest">
          <span className="text-pale-gold">LEAFBLOOM</span>
        </div>
        <div className="text-white/70 text-sm mt-2">
          Loading experience... {progress}%
        </div>
      </div>
      
      {/* Additional decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-white/50 text-xs">
        <p>Experience nature-inspired digital products</p>
      </div>
    </div>
  );
};

export default Preloader;
