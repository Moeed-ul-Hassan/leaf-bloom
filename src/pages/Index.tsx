
import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import CategorySection from "@/components/CategorySection";
import CreatorSpotlight from "@/components/CreatorSpotlight";
import TestimonialSection from "@/components/TestimonialSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProductGrid title="Trending Digital Products" />
      <CategorySection />
      <CreatorSpotlight />
      <TestimonialSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
