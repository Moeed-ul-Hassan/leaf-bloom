
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
      {/* Enhanced background with luxury gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ryb-green/90 to-dark-green/90 z-0">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        
        {/* Creative animated background decorations */}
        {Array.from({ length: 15 }).map((_, i) => (
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
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/30 animate-pulse-gentle">
              <span className="text-xs font-semibold">Premium Digital Experience</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight modern-text">
              Discover <span className="text-pale-gold">Luxury</span> Digital Creations
            </h1>
            
            <p className="text-lg text-white/90 max-w-lg">
              Explore our exclusive collection of premium digital products crafted by world-renowned creators – from masterclass courses to bespoke templates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                size="lg" 
                className="bg-white text-dark-green hover:bg-pale-gold transition-all group animate-subtle"
              >
                Browse Collection
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-white/50 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                For Creators
              </Button>
            </div>
            
            <div className="pt-10 text-white/90 text-sm">
              <p>Trusted by elite creators and discerning clients worldwide</p>
              <div className="flex items-center gap-4 mt-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30"></div>
                ))}
                <span className="text-xs font-medium">+ many more</span>
              </div>
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative z-10 glass-card rounded-2xl p-6 shadow-2xl">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-gradient-primary">
                <img 
                  src="/placeholder.svg" 
                  alt="Featured Product" 
                  className="w-full h-full object-cover mix-blend-overlay"
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium text-white/80 tracking-widest">FEATURED COLLECTION</span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-pale-gold/90 text-dark-green">Exclusive</span>
                </div>
                
                <h3 className="text-white font-semibold text-2xl">Creative Masterclass Suite</h3>
                
                <div className="flex items-center text-white/90 text-sm">
                  <div className="w-8 h-8 rounded-full bg-white/20 mr-2 border border-white/30"></div>
                  <span className="font-medium">by Atelier Studios</span>
                </div>
                
                <div className="flex justify-between items-center pt-2">
                  <span className="text-xl font-bold text-white">$149.99</span>
                  <Button size="sm" className="bg-ryb-green hover:bg-ryb-green/90">Preview</Button>
                </div>
              </div>
              
              {/* Enhanced floating elements around the card */}
              <div className="absolute -top-8 -right-8 w-20 h-20 rounded-full bg-pale-gold/20 backdrop-blur-xl border border-white/10 shadow-xl animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-ryb-green/20 backdrop-blur-xl border border-white/10 shadow-xl animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
            
            {/* Enhanced stacked cards effect */}
            <div className="absolute top-4 -left-4 right-4 bottom-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 -z-10 shadow-lg"></div>
            <div className="absolute top-8 -left-8 right-8 bottom-0 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/5 -z-20 shadow-lg"></div>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/90 flex flex-col items-center animate-bounce">
        <span className="text-sm font-medium mb-2 tracking-wide">Discover More</span>
        <ChevronDown className="w-5 h-5" />
      </div>
    </div>
  );
}
