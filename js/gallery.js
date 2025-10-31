// Gallery Lightbox Functionality

document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.masonry-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    const galleryFilters = document.querySelectorAll('.gallery-filter');
    const masonryItems = document.querySelectorAll('.masonry-item');
    
    let currentImageIndex = 0;
    const imagesArray = Array.from(galleryImages);
    
    // Gallery Filtering
    if (galleryFilters.length > 0) {
        galleryFilters.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                galleryFilters.forEach(btn => btn.classList.remove('active', 'bg-green-800', 'text-white'));
                galleryFilters.forEach(btn => btn.classList.add('bg-white', 'text-green-800', 'border', 'border-green-800'));
                
                // Add active class to clicked button
                this.classList.remove('bg-white', 'text-green-800', 'border', 'border-green-800');
                this.classList.add('active', 'bg-green-800', 'text-white');
                
                const filterValue = this.getAttribute('data-filter');
                
                // Filter gallery items
                masonryItems.forEach(item => {
                    if (filterValue === 'all') {
                        item.style.display = 'block';
                    } else {
                        const itemCategory = item.getAttribute('data-category');
                        if (itemCategory === filterValue) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    }
                });
            });
        });
    }
    
    // Lightbox functionality
    if (lightbox && galleryImages.length > 0) {
        // Open lightbox when image is clicked
        galleryImages.forEach((image, index) => {
            image.addEventListener('click', function() {
                currentImageIndex = index;
                lightboxImage.src = this.src;
                lightboxImage.alt = this.alt;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });
        
        // Close lightbox
        lightboxClose.addEventListener('click', function() {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        // Close lightbox when clicking outside the image
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
        
        // Navigate to previous image
        lightboxPrev.addEventListener('click', function(e) {
            e.stopPropagation();
            currentImageIndex = (currentImageIndex - 1 + imagesArray.length) % imagesArray.length;
            lightboxImage.src = imagesArray[currentImageIndex].src;
            lightboxImage.alt = imagesArray[currentImageIndex].alt;
        });
        
        // Navigate to next image
        lightboxNext.addEventListener('click', function(e) {
            e.stopPropagation();
            currentImageIndex = (currentImageIndex + 1) % imagesArray.length;
            lightboxImage.src = imagesArray[currentImageIndex].src;
            lightboxImage.alt = imagesArray[currentImageIndex].alt;
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (lightbox.classList.contains('active')) {
                if (e.key === 'Escape') {
                    lightbox.classList.remove('active');
                    document.body.style.overflow = 'auto';
                } else if (e.key === 'ArrowLeft') {
                    currentImageIndex = (currentImageIndex - 1 + imagesArray.length) % imagesArray.length;
                    lightboxImage.src = imagesArray[currentImageIndex].src;
                    lightboxImage.alt = imagesArray[currentImageIndex].alt;
                } else if (e.key === 'ArrowRight') {
                    currentImageIndex = (currentImageIndex + 1) % imagesArray.length;
                    lightboxImage.src = imagesArray[currentImageIndex].src;
                    lightboxImage.alt = imagesArray[currentImageIndex].alt;
                }
            }
        });
    }
});