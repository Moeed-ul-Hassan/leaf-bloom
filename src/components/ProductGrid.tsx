import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Eye, ShoppingCart, Heart, Star, ShieldCheck, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

type Product = {
  id: string;
  name: string;
  image: string;
  type: string;
  price: number;
  rating: number;
  creator: {
    name: string;
    avatar: string;
  };
  isBestseller?: boolean;
  isNew?: boolean;
  isOfficial?: boolean;
};

interface ProductGridProps {
  title?: string;
  products: Product[];
  layout?: 'grid' | 'masonry';
  className?: string;
}

// Sample Data - This would come from your API in a real app
const dummyProducts: Product[] = [
  {
    id: '1',
    name: 'Digital Marketing Mastery Course',
    image: '/placeholder.svg',
    type: 'Course',
    price: 49.99,
    rating: 4.9,
    creator: {
      name: 'LeafBloom Team',
      avatar: '/placeholder.svg',
    },
    isBestseller: true,
    isOfficial: true
  },
  {
    id: '2',
    name: 'Productivity Planner Template',
    image: '/placeholder.svg',
    type: 'Template',
    price: 12.99,
    rating: 4.7,
    creator: {
      name: 'LeafBloom Team',
      avatar: '/placeholder.svg',
    },
    isNew: true
  },
  {
    id: '3',
    name: 'Abstract Digital Art Collection',
    image: '/placeholder.svg',
    type: 'Digital Art',
    price: 29.99,
    rating: 4.5,
    creator: {
      name: 'LeafBloom Team',
      avatar: '/placeholder.svg',
    },
    isOfficial: true
  },
  {
    id: '4',
    name: 'Professional Resume Templates Bundle',
    image: '/placeholder.svg',
    type: 'Template',
    price: 19.99,
    rating: 4.8,
    creator: {
      name: 'LeafBloom Team',
      avatar: '/placeholder.svg',
    },
    isBestseller: true,
    isOfficial: true
  },
  {
    id: '5',
    name: 'Zen Beats Music Collection',
    image: '/placeholder.svg',
    type: 'Music',
    price: 34.99,
    rating: 4.6,
    creator: {
      name: 'LeafBloom Team',
      avatar: '/placeholder.svg',
    }
  },
  {
    id: '6',
    name: 'Startup Founder Guidebook',
    image: '/placeholder.svg',
    type: 'eBook',
    price: 24.99,
    rating: 4.9,
    creator: {
      name: 'LeafBloom Team',
      avatar: '/placeholder.svg',
    },
    isNew: true,
    isOfficial: true
  },
  {
    id: '7',
    name: 'Photography Lightroom Presets',
    image: '/placeholder.svg',
    type: 'Software',
    price: 17.99,
    rating: 4.5,
    creator: {
      name: 'LeafBloom Team',
      avatar: '/placeholder.svg',
    }
  },
  {
    id: '8',
    name: 'Personal Finance Tracker',
    image: '/placeholder.svg',
    type: 'Software',
    price: 14.99,
    rating: 4.7,
    creator: {
      name: 'LeafBloom Team',
      avatar: '/placeholder.svg',
    },
    isOfficial: true
  }
];

export default function ProductGrid({ title = "Curated Digital Masterpieces", products = dummyProducts, layout = 'grid', className }: ProductGridProps) {
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const { toast } = useToast();
  
  useEffect(() => {
    // Simulate staggered loading for visual appeal
    const showProducts = async () => {
      const newVisibleProducts = [...visibleProducts];
      
      for (let i = 0; i < products.length; i++) {
        if (!visibleProducts.find(p => p.id === products[i].id)) {
          await new Promise(resolve => setTimeout(resolve, 100));
          newVisibleProducts.push(products[i]);
          setVisibleProducts([...newVisibleProducts]);
        }
      }
    };
    
    showProducts();
  }, [products]);
  
  const handleAddToCart = (productId: string, productName: string) => {
    console.log(`Adding product ${productId} to cart`);
    
    toast({
      title: "Added to cart!",
      description: `${productName} has been added to your cart.`,
      variant: "default",
    });
  };
  
  const handleWishlist = (productId: string, productName: string) => {
    console.log(`Adding product ${productId} to wishlist`);
    
    toast({
      title: "Added to wishlist!",
      description: `${productName} has been saved to your wishlist.`,
      variant: "default",
    });
  };
  
  const handleSellingInfo = () => {
    toast({
      title: "LeafBloom Original Products",
      description: "All products are created exclusively by our LeafBloom team to ensure premium quality.",
      variant: "default",
    });
  };
  
  const getProductCard = (product: Product, index: number) => (
    <div 
      key={product.id}
      className={cn(
        "product-card group transition-all duration-300 animate-grow-fade",
        layout === 'masonry' && index % 3 === 0 ? "md:col-span-2" : "",
        {
          "border border-ryb-green": product.isBestseller,
          "border border-premium-gold": product.isOfficial
        }
      )}
      style={{ 
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Product Image with Overlay */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-green/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
          <div className="flex space-x-2">
            <Button 
              size="sm" 
              className="bg-ryb-green hover:bg-ryb-green/90 text-white"
              onClick={() => handleAddToCart(product.id, product.name)}
            >
              <ShoppingCart className="w-4 h-4 mr-1" />
              Add to Cart
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              onClick={() => handleWishlist(product.id, product.name)}
            >
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="px-2 py-1 bg-pale-gold text-dark-green text-xs font-bold rounded">NEW</span>
          )}
          {product.isBestseller && (
            <span className="px-2 py-1 bg-ryb-green text-white text-xs font-bold rounded">BESTSELLER</span>
          )}
          {product.isOfficial && (
            <div className="premium-badge flex items-center gap-1 px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded">
              <ShieldCheck className="w-3 h-3" />
              <span>LeafBloom Original</span>
            </div>
          )}
        </div>
        
        {/* Quick preview button */}
        <button className="absolute top-3 right-3 p-2 bg-white/30 backdrop-blur-sm rounded-full text-white hover:bg-white/50 transition-colors">
          <Eye className="w-4 h-4" />
        </button>
        
        {/* Product type badge */}
        <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded">
          {product.type}
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-4 bg-white dark:bg-dark-green">
        <div className="flex items-start justify-between">
          <h3 className="font-medium text-foreground line-clamp-1">
            <Link to={`/product/${product.id}`} className="hover:text-ryb-green transition-colors">
              {product.name}
            </Link>
          </h3>
          <span className="font-bold text-ryb-green">${product.price.toFixed(2)}</span>
        </div>
        
        {/* Creator Info */}
        <div className="flex items-center mt-2">
          <div className="w-5 h-5 rounded-full overflow-hidden bg-muted">
            <img 
              src={product.creator.avatar} 
              alt={product.creator.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="ml-2 text-xs text-muted-foreground">
            by {product.creator.name}
          </span>
        </div>
        
        {/* Rating */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            <div className="flex text-pale-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i} 
                  className="w-3 h-3" 
                  fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                />
              ))}
            </div>
            <span className="ml-1 text-xs text-muted-foreground">
              {product.rating.toFixed(1)}
            </span>
          </div>
          
          <Button 
            size="sm" 
            variant="ghost" 
            className="p-0 h-auto text-muted-foreground hover:text-foreground"
            onClick={handleSellingInfo}
          >
            <Info className="w-3 h-3" />
          </Button>
        </div>
      </div>
    </div>
  );
  
  return (
    <section className={cn("py-16", className)}>
      <div className="container mx-auto px-4">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-dark-green dark:text-white">
              {title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-ryb-green to-pale-gold mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              All our products are created exclusively by the LeafBloom team to ensure premium quality.
            </p>
          </div>
        )}
        
        <div className={cn(
          "grid gap-6",
          layout === 'grid' ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1 md:grid-cols-3"
        )}>
          {visibleProducts.map((product, index) => getProductCard(product, index))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-gradient-primary hover:bg-gradient-hover">
            Explore More Products
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          
          <div className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="w-4 h-4 text-ryb-green" />
            All products are created exclusively by our LeafBloom team. No third-party selling.
          </div>
        </div>
      </div>
    </section>
  );
}

// Arrow right icon
function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
