
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ryb-green/90 to-dark-green/90 z-0">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        
        {/* Animated background decorations */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-40 h-40 rounded-full bg-white/5 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20 animate-pulse-gentle">
              <span className="text-xs font-semibold">New Digital Experience</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
              Discover <span className="text-pale-gold">Digital</span> Creations That Inspire
            </h1>
            
            <p className="text-lg text-white/80 max-w-lg">
              Explore a curated marketplace of premium digital products created by world-class creators – from courses to templates, art to software.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-white text-dark-green hover:bg-pale-gold transition-all group"
              >
                Explore Marketplace
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-white/50 text-white hover:bg-white/10"
              >
                For Creators
              </Button>
            </div>
            
            <div className="pt-8 text-white/80 text-sm">
              <p>Trusted by 2,000+ creators and 50,000+ customers worldwide</p>
              <div className="flex items-center gap-4 mt-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-white/20"></div>
                ))}
                <span className="text-xs">+ many more</span>
              </div>
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-5 shadow-xl">
              <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-gradient-primary">
                <img 
                  src="/placeholder.svg" 
                  alt="Featured Product" 
                  className="w-full h-full object-cover mix-blend-overlay"
                />
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-xs font-medium text-white/70">FEATURED</span>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-pale-gold/90 text-dark-green">Best Seller</span>
                </div>
                
                <h3 className="text-white font-semibold text-xl">Creative Productivity Suite</h3>
                
                <div className="flex items-center text-white/80 text-sm">
                  <div className="w-6 h-6 rounded-full bg-white/20 mr-2"></div>
                  <span>by Creative Studios</span>
                </div>
                
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-bold text-white">$49.99</span>
                  <Button size="sm" className="bg-ryb-green hover:bg-ryb-green/90">Preview</Button>
                </div>
              </div>
              
              {/* Floating elements around the card */}
              <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-pale-gold/30 backdrop-blur-md animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-ryb-green/30 backdrop-blur-md animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
            
            {/* Stacked cards effect */}
            <div className="absolute top-4 -left-4 right-4 bottom-4 bg-white/5 rounded-2xl border border-white/10 -z-10"></div>
            <div className="absolute top-8 -left-8 right-8 bottom-0 bg-white/5 rounded-2xl border border-white/5 -z-20"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 flex flex-col items-center animate-bounce">
        <span className="text-sm font-medium mb-2">Scroll to explore</span>
        <ChevronDown className="w-5 h-5" />
      </div>
    </div>
  );
}
