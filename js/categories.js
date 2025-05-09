
// Categories Grid Logic
document.addEventListener('DOMContentLoaded', () => {
  const categoriesGrid = document.querySelector('.categories__grid');
  
  // Sample categories data
  const categories = [
    {
      id: 'ebooks',
      name: 'eBooks',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>',
      description: 'Digital books on various topics',
      color: 'bg-blue-gradient',
      count: 247
    },
    {
      id: 'courses',
      name: 'Online Courses',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>',
      description: 'Interactive learning experiences',
      color: 'forest-gradient',
      count: 189
    },
    {
      id: 'software',
      name: 'Software',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
      description: 'Tools and applications',
      color: 'bg-purple-gradient',
      count: 152
    },
    {
      id: 'art',
      name: 'Digital Art',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>',
      description: 'Beautiful digital creations',
      color: 'bg-pink-gradient',
      count: 312
    },
    {
      id: 'music',
      name: 'Music',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>',
      description: 'Royalty-free music and audio',
      color: 'bg-orange-gradient',
      count: 208
    },
    {
      id: 'templates',
      name: 'Templates',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>',
      description: 'Ready-to-use designs and documents',
      color: 'bg-sky-gradient',
      count: 274
    }
  ];
  
  // Render categories
  categories.forEach(category => {
    const categoryCard = document.createElement('div');
    categoryCard.className = 'category-card fade-in';
    categoryCard.style.opacity = '0';
    categoryCard.style.transform = 'translateY(20px)';
    
    categoryCard.innerHTML = `
      <div class="category-card__icon ${category.color}">${category.icon}</div>
      <h3 class="category-card__title">${category.name}</h3>
      <p class="category-card__description">${category.description}</p>
      <div class="category-card__products">
        <span>${category.count} products</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
      <div class="category-card__bg"></div>
    `;
    
    categoriesGrid.appendChild(categoryCard);
  });
});
