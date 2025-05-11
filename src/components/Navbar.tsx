
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  X, 
  ChevronDown 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import CartSidebar from './CartSidebar';

const categories = [
  { name: 'eBooks', href: '/category/ebooks' },
  { name: 'Online Courses', href: '/category/courses' },
  { name: 'Software', href: '/category/software' },
  { name: 'Digital Art', href: '/category/art' },
  { name: 'Music', href: '/category/music' },
  { name: 'Templates', href: '/category/templates' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled 
          ? "bg-white/95 dark:bg-dark-green/95 backdrop-blur-md shadow-md" 
          : "bg-gradient-to-r from-dark-green/80 to-ryb-green/80 backdrop-blur-md"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <span className="text-xl font-display font-bold text-white dark:text-white">LeafBloom</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <div className="relative group">
            <button className="flex items-center space-x-1 text-white hover:text-pale-gold transition-colors">
              <span>Categories</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full -left-4 mt-2 w-56 bg-white dark:bg-dark-green rounded-md shadow-lg overflow-hidden transform scale-95 opacity-0 pointer-events-none group-hover:scale-100 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 origin-top-left">
              <div className="py-2">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    to={category.href}
                    className="block px-4 py-2 text-sm hover:bg-ryb-green hover:text-white transition-colors"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link to="/bestsellers" className="text-white hover:text-pale-gold transition-colors">
            Bestsellers
          </Link>
          <Link to="/new" className="text-white hover:text-pale-gold transition-colors">
            New Releases
          </Link>
          <Link to="/creators" className="text-white hover:text-pale-gold transition-colors">
            Creators
          </Link>
        </nav>
        
        {/* Search, Cart, User */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <button className="p-2 text-white hover:text-pale-gold rounded-full hover:bg-white/10 transition-colors">
            <Search className="w-5 h-5" />
          </button>
          
          <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
            <SheetTrigger asChild>
              <button className="p-2 text-white hover:text-pale-gold rounded-full hover:bg-white/10 transition-colors relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-pale-gold text-[10px] text-dark-green font-bold rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-md p-0">
              <CartSidebar onClose={() => setIsCartOpen(false)} />
            </SheetContent>
          </Sheet>
          
          <Link to="/account" className="md:flex items-center space-x-1 hidden">
            <div className="p-2 text-white hover:text-pale-gold rounded-full hover:bg-white/10 transition-colors">
              <User className="w-5 h-5" />
            </div>
          </Link>
          
          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button className="p-2 text-white hover:text-pale-gold rounded-full hover:bg-white/10 transition-colors">
                <Menu className="w-5 h-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full p-0">
              <div className="flex flex-col h-full bg-gradient-to-br from-dark-green to-ryb-green p-6">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xl font-display font-bold text-white">Menu</span>
                  <button onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>
                <nav className="flex flex-col space-y-6">
                  <Link to="/category/all" className="text-lg text-white" onClick={() => setIsMobileMenuOpen(false)}>
                    All Categories
                  </Link>
                  {categories.map((category) => (
                    <Link 
                      key={category.name} 
                      to={category.href} 
                      className="pl-4 border-l-2 border-pale-gold/50 text-white/90 hover:text-pale-gold hover:border-pale-gold transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                  <Link to="/bestsellers" className="text-lg text-white" onClick={() => setIsMobileMenuOpen(false)}>
                    Bestsellers
                  </Link>
                  <Link to="/new" className="text-lg text-white" onClick={() => setIsMobileMenuOpen(false)}>
                    New Releases
                  </Link>
                  <Link to="/creators" className="text-lg text-white" onClick={() => setIsMobileMenuOpen(false)}>
                    Creators
                  </Link>
                  <Link to="/account" className="text-lg text-white" onClick={() => setIsMobileMenuOpen(false)}>
                    My Account
                  </Link>
                </nav>
                <div className="mt-auto">
                  <Button 
                    className="w-full bg-pale-gold text-dark-green hover:bg-white hover:text-dark-green"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
