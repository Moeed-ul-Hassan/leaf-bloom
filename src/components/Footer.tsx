
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const navigation = {
  products: [
    { name: 'eBooks', href: '/category/ebooks' },
    { name: 'Courses', href: '/category/courses' },
    { name: 'Software', href: '/category/software' },
    { name: 'Digital Art', href: '/category/art' },
    { name: 'Music', href: '/category/music' },
    { name: 'Templates', href: '/category/templates' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Press', href: '/press' },
  ],
  creators: [
    { name: 'Sell on LeafBloom', href: '/creators/start' },
    { name: 'Creator Resources', href: '/creators/resources' },
    { name: 'Success Stories', href: '/creators/stories' },
    { name: 'Creator FAQs', href: '/creators/faqs' },
  ],
  support: [
    { name: 'Help Center', href: '/help' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
};

const social = [
  {
    name: 'Facebook',
    href: '#',
    icon: Facebook,
  },
  {
    name: 'Instagram',
    href: '#',
    icon: Instagram,
  },
  {
    name: 'Twitter',
    href: '#',
    icon: Twitter,
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    href: '#',
    icon: Github,
  },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark-green border-t border-border">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <span className="text-xl font-display font-bold text-dark-green dark:text-white">LeafBloom</span>
            </Link>
            
            <p className="text-muted-foreground mb-6 max-w-xs">
              A digital marketplace connecting creative minds with those seeking premium digital products and resources.
            </p>
            
            <div className="flex space-x-4">
              {social.map((item) => (
                <a 
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-ryb-green transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            
            <div className="mt-6 flex items-center space-x-2">
              <div className="w-6 h-6 bg-ryb-green/10 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-ryb-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0 0l3-3m-3 3l-3-3" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 14h18" />
                </svg>
              </div>
              <span className="text-sm text-muted-foreground">
                <strong className="font-medium text-foreground">Secure Payments</strong> via Stripe
              </span>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-lg">Products</h3>
            <ul className="space-y-2">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-muted-foreground hover:text-ryb-green transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-muted-foreground hover:text-ryb-green transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="font-semibold mt-6 mb-4 text-lg">For Creators</h3>
            <ul className="space-y-2">
              {navigation.creators.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-muted-foreground hover:text-ryb-green transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-lg">Support</h3>
            <ul className="space-y-2">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-muted-foreground hover:text-ryb-green transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} LeafBloom. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/terms" className="text-muted-foreground hover:text-ryb-green text-sm">Terms</Link>
            <Link to="/privacy" className="text-muted-foreground hover:text-ryb-green text-sm">Privacy</Link>
            <Link to="/cookies" className="text-muted-foreground hover:text-ryb-green text-sm">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
