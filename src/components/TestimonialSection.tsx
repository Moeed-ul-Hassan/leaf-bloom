
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

type Testimonial = {
  id: string;
  content: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: '1',
    content: "LeafBloom has transformed how I sell my digital courses. The platform's intuitive design and powerful features have helped me reach more students than ever before.",
    name: "Sarah Johnson",
    role: "Course Creator",
    avatar: "/placeholder.svg",
    rating: 5
  },
  {
    id: '2',
    content: "As a digital artist, I've tried many marketplaces, but LeafBloom's emphasis on creator visibility and fair commission rates makes it stand out from the competition.",
    name: "Miguel Alvarez",
    role: "Digital Artist",
    avatar: "/placeholder.svg",
    rating: 5
  },
  {
    id: '3',
    content: "The templates I purchased from LeafBloom were not only beautiful but incredibly easy to customize for my project. The customer support was exceptional too!",
    name: "Emily Chen",
    role: "Entrepreneur",
    avatar: "/placeholder.svg",
    rating: 4
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-20 bg-white dark:bg-dark-green relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-ryb-green/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-ryb-green/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-heading inline-block">
            What Our Community Says
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from creators and customers who have found success with LeafBloom's digital marketplace.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial cards */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map(testimonial => (
                  <div 
                    key={testimonial.id} 
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-muted/30 dark:bg-dark-green/50 border border-border rounded-xl p-8 relative">
                      <Quote className="absolute top-6 right-6 w-10 h-10 text-ryb-green/10" />
                      
                      <div className="flex text-pale-gold mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-5 h-5" 
                            fill={i < testimonial.rating ? "currentColor" : "none"}
                          />
                        ))}
                      </div>
                      
                      <p className="text-lg mb-6 italic">
                        "{testimonial.content}"
                      </p>
                      
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation arrows */}
            <div className="flex justify-center space-x-4 mt-8">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {/* Pagination dots */}
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      activeIndex === index ? "bg-ryb-green w-4" : "bg-border"
                    )}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
