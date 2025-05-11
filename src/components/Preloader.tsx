
import React, { useEffect, useState } from 'react';

const Preloader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
          }, 500);
          return 100;
        }
        return prev + 5;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div 
      id="preloader" 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-dark-green
                  transition-opacity duration-700 ease-in-out ${progress >= 100 ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="preloader-background absolute inset-0"></div>
      <div id="preloaderContent" className="relative z-10 text-center">
        <div className="w-28 h-28 mx-auto mb-4 relative">
          <svg 
            className="animate-pulse w-full h-full" 
            viewBox="0 0 24 24" 
            fill="#50AF33"
          >
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
          </svg>
          
          {/* Animated particles around the logo */}
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-2 h-2 bg-ryb-green rounded-full animate-float opacity-70"
              style={{
                top: `${50 + Math.sin(i * 72 * Math.PI / 180) * 30}%`,
                left: `${50 + Math.cos(i * 72 * Math.PI / 180) * 30}%`,
                animationDelay: `${i * 0.3}s`,
              }}
            ></div>
          ))}
        </div>
        
        <div className="w-48 h-2 mx-auto bg-white/10 rounded-full overflow-hidden mb-4">
          <div 
            id="preloaderBar" 
            className="h-full bg-gradient-to-r from-ryb-green to-pale-gold rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="text-white text-xl font-display font-bold tracking-widest">
          LEAFBLOOM
        </div>
      </div>
    </div>
  );
};

export default Preloader;
