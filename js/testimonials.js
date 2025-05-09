
// Testimonials Slider Logic
document.addEventListener('DOMContentLoaded', () => {
  const testimonialsSlider = document.getElementById('testimonialsSlider');
  const testimonialDots = document.getElementById('testimonialDots');
  const prevButton = document.getElementById('testimonialPrev');
  const nextButton = document.getElementById('testimonialNext');
  
  // Sample testimonials data
  const testimonials = [
    {
      id: 'test1',
      quote: "The digital assets from LeafBloom have completely transformed my workflow. The quality and attention to detail in every product is outstanding.",
      author: {
        name: 'Sarah Johnson',
        position: 'Creative Director',
        avatar: 'images/placeholder.svg'
      }
    },
    {
      id: 'test2',
      quote: "I've purchased templates, music, and courses from LeafBloom. Every product exceeds expectations and has helped me grow my business exponentially.",
      author: {
        name: 'Michael Chen',
        position: 'Entrepreneur',
        avatar: 'images/placeholder.svg'
      }
    },
    {
      id: 'test3',
      quote: "As a digital artist, I'm very particular about the resources I use. LeafBloom consistently delivers premium quality that I can trust for my professional projects.",
      author: {
        name: 'Elena Rodriguez',
        position: 'Digital Artist',
        avatar: 'images/placeholder.svg'
      }
    }
  ];
  
  let currentSlide = 0;
  
  // Create testimonials
  testimonials.forEach((testimonial, index) => {
    const testimonialCard = document.createElement('div');
    testimonialCard.className = 'testimonial-card fade-in';
    testimonialCard.style.display = index === 0 ? 'block' : 'none';
    testimonialCard.style.opacity = index === 0 ? '1' : '0';
    testimonialCard.style.transform = index === 0 ? 'translateY(0)' : 'translateY(20px)';
    
    testimonialCard.innerHTML = `
      <p class="testimonial-card__quote">${testimonial.quote}</p>
      <div class="testimonial-card__author">
        <div class="testimonial-card__avatar"></div>
        <div class="testimonial-card__info">
          <div class="testimonial-card__name">${testimonial.author.name}</div>
          <div class="testimonial-card__position">${testimonial.author.position}</div>
        </div>
      </div>
    `;
    
    testimonialsSlider.appendChild(testimonialCard);
    
    // Create dots
    const dot = document.createElement('div');
    dot.className = `testimonials__dot ${index === 0 ? 'testimonials__dot--active' : ''}`;
    dot.addEventListener('click', () => goToSlide(index));
    testimonialDots.appendChild(dot);
  });
  
  // Navigation functions
  function goToSlide(index) {
    const slides = testimonialsSlider.querySelectorAll('.testimonial-card');
    const dots = testimonialDots.querySelectorAll('.testimonials__dot');
    
    // Hide all slides
    slides.forEach(slide => {
      slide.style.display = 'none';
      slide.style.opacity = '0';
      slide.style.transform = 'translateY(20px)';
    });
    
    // Remove active class from all dots
    dots.forEach(dot => dot.classList.remove('testimonials__dot--active'));
    
    // Show current slide
    slides[index].style.display = 'block';
    setTimeout(() => {
      slides[index].style.opacity = '1';
      slides[index].style.transform = 'translateY(0)';
    }, 50);
    
    // Add active class to current dot
    dots[index].classList.add('testimonials__dot--active');
    
    currentSlide = index;
  }
  
  function nextSlide() {
    const newIndex = (currentSlide + 1) % testimonials.length;
    goToSlide(newIndex);
  }
  
  function prevSlide() {
    const newIndex = (currentSlide - 1 + testimonials.length) % testimonials.length;
    goToSlide(newIndex);
  }
  
  // Add event listeners
  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);
  
  // Auto rotate slides every 5 seconds
  setInterval(nextSlide, 5000);
});
