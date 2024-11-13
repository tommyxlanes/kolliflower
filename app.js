const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Select elements to observe
const words = document.querySelectorAll(
  '.hero-word-1, .hero-word-2, .hero-word-3'
);

// Intersection Observer options
const observerOptions = {
  threshold: 1.0, // Trigger when 100% of the element is in view
};

// Initialize a variable to track the last active element
let lastActiveElement = null;

// Create the Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // If there's a previously active element, remove its 'active' class
      if (lastActiveElement && lastActiveElement !== entry.target) {
        lastActiveElement.classList.remove('active');
      }

      // Add the 'active' class when the element is fully in view
      entry.target.classList.add('active');

      // Update the last active element
      lastActiveElement = entry.target;
    }
  });
}, observerOptions);

// Observe each word element
words.forEach((word) => observer.observe(word));
