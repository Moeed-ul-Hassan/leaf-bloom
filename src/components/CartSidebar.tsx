
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Trash2, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type CartItem = {
  id: string;
  name: string;
  image: string;
  type: string;
  price: number;
  creator: string;
  quantity: number;
};

interface CartSidebarProps {
  onClose: () => void;
}

const dummyCartItems: CartItem[] = [
  {
    id: '1',
    name: 'Digital Marketing Mastery Course',
    image: '/placeholder.svg',
    type: 'Course',
    price: 49.99,
    creator: 'Jane Smith',
    quantity: 1
  },
  {
    id: '2',
    name: 'Productivity Planner Template',
    image: '/placeholder.svg',
    type: 'Template',
    price: 12.99,
    creator: 'John Doe',
    quantity: 1
  },
  {
    id: '3',
    name: 'Abstract Digital Art Collection',
    image: '/placeholder.svg',
    type: 'Digital Art',
    price: 29.99,
    creator: 'Artistic Studios',
    quantity: 1
  }
];

export default function CartSidebar({ onClose }: CartSidebarProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(dummyCartItems);
  const [animateLeaf, setAnimateLeaf] = useState(false);
  
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.07;
  const total = subtotal + tax;

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  useEffect(() => {
    // Trigger leaf animation when cart opens
    setAnimateLeaf(true);
    const timer = setTimeout(() => setAnimateLeaf(false), 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col h-full bg-white dark:bg-dark-green">
      {/* Animated leaves */}
      {animateLeaf && Array.from({ length: 5 }).map((_, i) => (
        <div 
          key={i}
          className="leaf-icon-container"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: '-20px',
            animationDelay: `${i * 0.3}s`
          }}
        >
          <svg className="w-6 h-6 text-ryb-green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8 0-4.41 3.59-8 8-8s8 3.59 8 8c0 4.41-3.59 8-8 8zm-1-9h2v5h-2v-5zm0-4h2v2h-2V7z"/>
          </svg>
        </div>
      ))}

      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-display font-semibold text-dark-green dark:text-white flex items-center">
            <ShoppingBag className="w-5 h-5 mr-2" />
            Your Cart ({cartItems.length})
          </h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-muted transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <ShoppingBag className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
            <p className="text-muted-foreground mb-6">Looks like you haven't added any digital products yet.</p>
            <Button onClick={onClose} className="bg-gradient-primary hover:bg-gradient-hover">
              Start Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6 overflow-y-auto max-h-[50vh] pr-2">
              {cartItems.map(item => (
                <div 
                  key={item.id}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/60 transition-colors"
                >
                  <div className="w-16 h-16 rounded-md overflow-hidden bg-muted flex-shrink-0 border border-ryb-green/20">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium truncate">{item.name}</h4>
                    <div className="text-xs text-muted-foreground mt-1">
                      <span className="inline-block px-1.5 py-0.5 bg-ryb-green/10 text-ryb-green rounded-sm mr-2">
                        {item.type}
                      </span>
                      <span>By {item.creator}</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-semibold">${item.price.toFixed(2)}</span>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="p-1 text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-border pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold pt-2 border-t border-border">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <Button className="w-full bg-gradient-primary hover:bg-gradient-hover animate-pulse-gentle">
                <span>Checkout</span>
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full border-ryb-green text-ryb-green hover:bg-ryb-green/10"
                onClick={onClose}
              >
                Continue Shopping
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// Shopping bag icon component
function ShoppingBag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}
