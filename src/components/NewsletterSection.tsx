
import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email is required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      toast({
        title: "Thanks for subscribing!",
        description: "You'll receive our latest updates and special offers.",
        variant: "default",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section className="relative py-20 bg-gradient-primary overflow-hidden">
      {/* Background decorations */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div 
          key={i}
          className="absolute opacity-10 bg-white rounded-full animate-float"
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 5}s`,
            animationDelay: `${i * 0.5}s`
          }}
        ></div>
      ))}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-4">
            Stay Updated with LeafBloom
          </h2>
          <p className="text-white/80 mb-8">
            Join our newsletter to receive the latest product updates, creator highlights, 
            and exclusive offers directly to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "bg-white text-dark-green hover:bg-pale-gold transition-colors",
                "flex items-center",
                isSubmitting ? "opacity-70" : ""
              )}
            >
              {isSubmitting ? (
                "Subscribing..."
              ) : (
                <>
                  Subscribe
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </form>
          
          <p className="text-white/60 text-xs mt-4">
            No spam, ever. We value your privacy and you can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
