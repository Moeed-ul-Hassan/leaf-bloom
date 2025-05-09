
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Video, 
  Code, 
  Image, 
  Music, 
  FileText,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = [
  {
    id: 'ebooks',
    name: 'eBooks',
    icon: BookOpen,
    description: 'Digital books on various topics',
    color: 'bg-gradient-to-br from-blue-400 to-blue-600',
    iconColor: 'from-blue-300 to-blue-500',
    link: '/category/ebooks',
    count: 247
  },
  {
    id: 'courses',
    name: 'Online Courses',
    icon: Video,
    description: 'Interactive learning experiences',
    color: 'bg-gradient-to-br from-ryb-green to-dark-green',
    iconColor: 'from-ryb-green/80 to-ryb-green',
    link: '/category/courses',
    count: 189
  },
  {
    id: 'software',
    name: 'Software',
    icon: Code,
    description: 'Tools and applications',
    color: 'bg-gradient-to-br from-purple-400 to-purple-600',
    iconColor: 'from-purple-300 to-purple-500',
    link: '/category/software',
    count: 152
  },
  {
    id: 'art',
    name: 'Digital Art',
    icon: Image,
    description: 'Beautiful digital creations',
    color: 'bg-gradient-to-br from-pink-400 to-pink-600',
    iconColor: 'from-pink-300 to-pink-500',
    link: '/category/art',
    count: 312
  },
  {
    id: 'music',
    name: 'Music',
    icon: Music,
    description: 'Royalty-free music and audio',
    color: 'bg-gradient-to-br from-orange-400 to-orange-600',
    iconColor: 'from-orange-300 to-orange-500',
    link: '/category/music',
    count: 208
  },
  {
    id: 'templates',
    name: 'Templates',
    icon: FileText,
    description: 'Ready-to-use designs and documents',
    color: 'bg-gradient-to-br from-sky-400 to-sky-600',
    iconColor: 'from-sky-300 to-sky-500',
    link: '/category/templates',
    count: 274
  },
];

export default function CategorySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <section className="py-20 bg-muted/30 dark:bg-dark-green/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-dark-green dark:text-white mb-4">
            Browse By Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our extensive collection of premium digital products sorted by category, 
            from educational resources to creative assets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={category.link}
              className={cn(
                "group relative overflow-hidden rounded-xl p-6 transition-all duration-300",
                "bg-white dark:bg-dark-green/40 hover:shadow-xl",
                "border border-transparent hover:border-ryb-green/30"
              )}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-start justify-between">
                <div className="flex flex-col">
                  <div className={cn(
                    "p-3 rounded-xl bg-gradient-to-br w-12 h-12 flex items-center justify-center mb-4",
                    category.color
                  )}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-ryb-green transition-colors">
                    {category.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  
                  <div className="mt-auto flex items-center space-x-2 text-sm">
                    <span className="font-semibold">
                      {category.count} products
                    </span>
                    <ArrowRight className={cn(
                      "w-4 h-4 transition-transform duration-300",
                      hoveredIndex === index ? "translate-x-1" : ""
                    )} />
                  </div>
                </div>
              </div>
              
              {/* Background decoration */}
              <div 
                className={cn(
                  "absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br opacity-10",
                  "transition-transform duration-500",
                  category.iconColor,
                  hoveredIndex === index ? "scale-150" : "scale-100"
                )}
              />
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/categories" 
            className="inline-block border-b-2 border-ryb-green text-ryb-green hover:text-dark-green hover:border-dark-green transition-colors font-medium"
          >
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  );
}
