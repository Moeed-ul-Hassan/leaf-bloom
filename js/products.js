
// Product Grid Logic
document.addEventListener('DOMContentLoaded', () => {
  const productsGrid = document.getElementById('productsGrid');
  
  // Sample product data
  const products = [
    {
      id: 'prod1',
      title: 'Advanced Design Masterclass',
      image: 'images/placeholder.svg',
      price: 89.99,
      category: 'Courses',
      creator: {
        name: 'Moeed ul Hassan',
        avatar: 'images/placeholder.svg'
      },
      rating: 4.8
    },
    {
      id: 'prod2',
      title: 'Creative Business Templates',
      image: 'images/placeholder.svg',
      price: 49.99,
      category: 'Templates',
      creator: {
        name: 'Studio Bloom',
        avatar: 'images/placeholder.svg'
      },
      rating: 4.9
    },
    {
      id: 'prod3',
      title: 'Digital Art Collection',
      image: 'images/placeholder.svg',
      price: 129.99,
      category: 'Art',
      creator: {
        name: 'Artistic Mind',
        avatar: 'images/placeholder.svg'
      },
      rating: 5.0
    },
    {
      id: 'prod4',
      title: 'Marketing Strategy eBook',
      image: 'images/placeholder.svg',
      price: 24.99,
      category: 'eBooks',
      creator: {
        name: 'Moeed ul Hassan',
        avatar: 'images/placeholder.svg'
      },
      rating: 4.7
    },
    {
      id: 'prod5',
      title: 'Productivity Software',
      image: 'images/placeholder.svg',
      price: 59.99,
      category: 'Software',
      creator: {
        name: 'Tech Solutions',
        avatar: 'images/placeholder.svg'
      },
      rating: 4.6
    },
    {
      id: 'prod6',
      title: 'Ambient Music Pack',
      image: 'images/placeholder.svg',
      price: 34.99,
      category: 'Music',
      creator: {
        name: 'Sound Studio',
        avatar: 'images/placeholder.svg'
      },
      rating: 4.8
    }
  ];
  
  // Render products
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card fade-in';
    productCard.style.opacity = '0';
    productCard.style.transform = 'translateY(20px)';
    
    productCard.innerHTML = `
      <div class="product-card__image">
        <img src="${product.image}" alt="${product.title}" />
        <div class="product-card__category">${product.category}</div>
      </div>
      <div class="product-card__content">
        <h3 class="product-card__title">${product.title}</h3>
        <div class="product-card__creator">
          <div class="product-card__avatar"></div>
          <span>by ${product.creator.name}</span>
        </div>
        <div class="product-card__footer">
          <div class="product-card__price">$${product.price.toFixed(2)}</div>
          <div class="product-card__rating">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            ${product.rating}
          </div>
        </div>
      </div>
    `;
    
    productsGrid.appendChild(productCard);
  });
});
