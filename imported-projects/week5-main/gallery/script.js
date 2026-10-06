const galleryData = [
  {
    src: "images/1.jpeg",
    title: "Volleyball Outfit",
    description: "Stylish volleyball uniform design"
  },
  {
    src: "images/2.jpeg",
    title: "Volleyball Shoes",
    description: "High-performance volleyball footwear"
  },
  {
    src: "images/3.jpeg",
    title: "Overworked Animator",
    description: "The life of a dedicated animator"
  },
  {
    src: "images/4.jpeg",
    title: "National Team Break",
    description: "Hinata's national team taking a well-deserved rest"
  },
  {
    src: "images/5.jpeg",
    title: "Time Management",
    description: "Effective scheduling and productivity"
  },
  {
    src: "images/6.jpeg",
    title: "Black Outfit Idea",
    description: "Elegant black attire inspiration"
  },
  {
    src: "images/7.jpeg",
    title: "Respect Quote",
    description: "Words of wisdom about respect"
  },
  {
    src: "images/8.jpeg",
    title: "Black Sun's Main Character",
    description: "The protagonist from Black Sun series"
  },
  {
    src: "images/9.jpeg",
    title: "Men Outfit Idea",
    description: "Fashion inspiration for men"
  },
  {
    src: "images/10.jpeg",
    title: "Sports Glasses",
    description: "Performance eyewear for athletes"
  },
  {
    src: "images/11.jpeg",
    title: "Light Grey Outfit Idea",
    description: "Stylish light grey men's fashion"
  }
];

// DOM elements
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-content img');
const modalTitle = document.querySelector('.modal-caption h3');
const modalDesc = document.querySelector('.modal-caption p');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

// Generate gallery items
function generateGallery() {
    gallery.innerHTML = '';
    galleryData.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${item.src}" alt="${item.title}">
            <div class="image-caption">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        galleryItem.addEventListener('click', () => openModal(index));
        gallery.appendChild(galleryItem);
    });
}

// Open modal with selected image
function openModal(index) {
    currentIndex = index;
    updateModalContent();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Update modal content based on current index
function updateModalContent() {
    const item = galleryData[currentIndex];
    modalImg.src = item.src;
    modalImg.alt = item.title;
    modalTitle.textContent = item.title;
    modalDesc.textContent = item.description;
}

// Navigate to previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
    updateModalContent();
}

// Navigate to next image
function nextImage() {
    currentIndex = (currentIndex + 1) % galleryData.length;
    updateModalContent();
}

// Event listeners
closeBtn.addEventListener('click', closeModal);
prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
});

// Initialize the gallery
generateGallery();