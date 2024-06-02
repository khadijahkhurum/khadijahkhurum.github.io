// Image Carousel Functionality
const imageCarousel = document.querySelector('.image-carousel');
const images = document.querySelectorAll('.image-carousel img');
let currentIndex = 0;

function showImage(index) {
  images.forEach((image, i) => {
    image.style.display = i === index ? 'block' : 'none';
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

showImage(currentIndex);
setInterval(nextImage, 5000);

// Scroll to Products Section
const scrollToProductCButton = document.getElementById('scrollToProductC');
if (scrollToProductCButton) {
  scrollToProductCButton.addEventListener('click', () => {
    const productsSection = document.getElementById('ProductC');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const productsData = [
    { id: 1, name: 'Lumière Dorée', price: 29.99, imageUrl: '../Images/Product 1.jpg', description: 'Immerse yourself in the radiant essence of sun-kissed citrus and golden peach. This luminous fragrance captures the warmth and vibrancy of a sunlit orchard.', pageUrl: 'product1.html' },
    { id: 2, name: 'Éclat de Lune', price: 33.99, imageUrl: '../Images/Product-2.jpg', description: 'Experience the enchanting allure of night-blooming jasmine and velvety plum. This captivating fragrance captures the shimmering essence of moonlight.', pageUrl: 'product2.html' },
    { id: 3, name: 'Vérité Nocturne', price: 39.99, imageUrl: '../Images/Product 3.jpg', description: 'Unveil the nocturnal truth with the exquisite scent of white orchid and soft sandalwood, captures the essence of midnight blooms, enveloping you in a serene and mysterious embrace.', pageUrl: 'product3.html' },
    { id: 4, name: 'Étoile Filante', price: 49.99, imageUrl: '../Images/Product 4.jpg', description: 'Bask in the enchanting glow of sparkling bergamot and delicate lily of the valley, capturing the magic of a shooting star, enveloping you in a luminous and captivating embrace.', pageUrl: 'product4.html' },
    { id: 5, name: 'Cœur de Rose', price: 59.99, imageUrl: '../Images/Product 7.jpg', description: 'Immerse yourself in the heart of elegance with the enchanting scent of pure jasmine and soft musk. This exquisite fragrance envelopes you in a delicate and romantic embrace.', pageUrl: 'product5.html' }
  ];

  const productsContainer = document.getElementById('products');

  function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
      <div class="product-info">
        <img src="${product.imageUrl}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <p class="product-price">$${product.price}</p>
        <button class="see-more-button" data-url="${product.pageUrl}">See More</button>
      </div>
    `;

    const seeMoreButton = card.querySelector('.see-more-button');
    seeMoreButton.addEventListener('click', () => {
      const productUrl = seeMoreButton.dataset.url;
      window.location.href = productUrl;
    });

    return card;
  }

  function renderProducts() {
    productsContainer.innerHTML = '';
    productsData.forEach(product => {
      const productCard = createProductCard(product);
      productsContainer.appendChild(productCard);
    });
  }

  renderProducts();
});
