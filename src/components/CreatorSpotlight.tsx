
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type Creator = {
  id: string;
  name: string;
  avatar: string;
  specialty: string;
  followers: number;
  products: number;
  background: string;
};

const creators: Creator[] = [
  {
    id: '1',
    name: 'Emma Johnson',
    avatar: '/placeholder.svg',
    specialty: 'Digital Art & Templates',
    followers: 12500,
    products: 48,
    background: '/placeholder.svg',
  },
  {
    id: '2',
    name: 'Alex Rivera',
    avatar: '/placeholder.svg',
    specialty: 'Marketing Courses',
    followers: 45200,
    products: 22,
    background: '/placeholder.svg',
  },
  {
    id: '3',
    name: 'Maya Design Studio',
    avatar: '/placeholder.svg',
    specialty: 'UI Kits & Themes',
    followers: 31800,
    products: 65,
    background: '/placeholder.svg',
  },
  {
    id: '4',
    name: 'David Chen',
    avatar: '/placeholder.svg',
    specialty: 'eBooks & Resources',
    followers: 15300,
    products: 34,
    background: '/placeholder.svg',
  },
  {
    id: '5',
    name: 'Audio Labs',
    avatar: '/placeholder.svg',
    specialty: 'Music & Sound Effects',
    followers: 22600,
    products: 95,
    background: '/placeholder.svg',
  },
];

export default function CreatorSpotlight() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    
    const scrollWidth = scrollRef.current.scrollWidth;
    const containerWidth = scrollRef.current.clientWidth;
    const maxScroll = scrollWidth - containerWidth;
    
    const scrollAmount = containerWidth * 0.7;
    let newPosition = direction === 'left' 
      ? Math.max(0, scrollPosition - scrollAmount) 
      : Math.min(maxScroll, scrollPosition + scrollAmount);
    
    scrollRef.current.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });
    
    setScrollPosition(newPosition);
  };
  
  return (
    <section className="py-16 bg-gradient-to-b from-white to-muted dark:from-dark-green dark:to-dark-green/80">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="section-heading">Meet Our Creators</h2>
            <p className="text-muted-foreground max-w-2xl">
              Discover the talented minds behind our exclusive digital products. 
              Each creator brings a unique perspective and expertise to the marketplace.
            </p>
          </div>
          
          <div className="hidden md:flex space-x-2">
            <button 
              onClick={() => handleScroll('left')}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
              disabled={scrollPosition === 0}
            >
              <ChevronLeft className={cn(
                "w-5 h-5",
                scrollPosition === 0 ? "text-muted-foreground" : "text-foreground"
              )} />
            </button>
            <button 
              onClick={() => handleScroll('right')}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 pb-6 hide-scrollbar snap-x"
          style={{ scrollbarWidth: 'none' }}
        >
          {creators.map(creator => (
            <div 
              key={creator.id}
              className="min-w-[280px] md:min-w-[350px] bg-white dark:bg-dark-green/50 rounded-xl overflow-hidden shadow-xl flex-shrink-0 snap-start relative group"
            >
              {/* Background image with gradient overlay */}
              <div className="h-32 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-dark-green/70 to-ryb-green/70">
                  <img 
                    src={creator.background} 
                    alt="" 
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                </div>
                
                {/* Creator avatar */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="w-24 h-24 rounded-full border-4 border-white dark:border-dark-green overflow-hidden bg-white">
                    <img 
                      src={creator.avatar} 
                      alt={creator.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="pt-16 p-6 text-center">
                <h3 className="font-display font-semibold text-xl mb-1">{creator.name}</h3>
                <p className="text-sm text-ryb-green font-medium">{creator.specialty}</p>
                
                <div className="mt-4 flex justify-center space-x-6 text-sm text-muted-foreground">
                  <div>
                    <span className="block font-semibold text-foreground">{creator.followers.toLocaleString()}</span>
                    <span>Followers</span>
                  </div>
                  <div className="w-px bg-border"></div>
                  <div>
                    <span className="block font-semibold text-foreground">{creator.products}</span>
                    <span>Products</span>
                  </div>
                </div>
                
                <Link
                  to={`/creator/${creator.id}`}
                  className="mt-5 inline-block px-4 py-2 rounded-md border border-ryb-green text-ryb-green hover:bg-ryb-green hover:text-white transition-colors text-sm font-medium"
                >
                  View Profile
                </Link>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Mobile navigation dots */}
        <div className="flex justify-center space-x-2 mt-6 md:hidden">
          {creators.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                index === Math.round(scrollPosition / 300) ? "bg-ryb-green w-4" : "bg-border"
              )}
              onClick={() => {
                if (scrollRef.current) {
                  const newPosition = index * 300;
                  scrollRef.current.scrollTo({
                    left: newPosition,
                    behavior: 'smooth'
                  });
                  setScrollPosition(newPosition);
                }
              }}
            />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link
            to="/creators"
            className="inline-flex items-center text-ryb-green hover:text-dark-green transition-colors font-medium"
          >
            View All Creators
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
