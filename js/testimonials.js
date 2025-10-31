// Testimonials Carousel

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('testimonials-carousel');
    
    if (!carousel) return;
    
    const slidesContainer = carousel.querySelector('.testimonial-slides');
    const slides = carousel.querySelectorAll('.testimonial-slide');
    const prevButton = carousel.querySelector('#testimonial-prev');
    const nextButton = carousel.querySelector('#testimonial-next');
    const indicators = carousel.querySelectorAll('.testimonial-indicator');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Function to update carousel position
    function updateCarousel() {
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update indicators
        indicators.forEach((indicator, index) => {
            if (index === currentSlide) {
                indicator.classList.add('bg-gold-600');
                indicator.classList.remove('bg-gray-300');
            } else {
                indicator.classList.remove('bg-gold-600');
                indicator.classList.add('bg-gray-300');
            }
        });
    }
    
    // Next slide
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        });
    }
    
    // Previous slide
    if (prevButton) {
        prevButton.addEventListener('click', function() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarousel();
        });
    }
    
    // Indicator clicks
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            currentSlide = index;
            updateCarousel();
        });
    });
    
    // Auto-advance slides every 5 seconds
    setInterval(function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }, 5000);
});