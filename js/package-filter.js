// Package Filtering Functionality

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const packageCards = document.querySelectorAll('.package-card');
    
    if (filterButtons.length > 0 && packageCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active', 'bg-green-800', 'text-white'));
                filterButtons.forEach(btn => btn.classList.add('bg-white', 'text-green-800', 'border', 'border-green-800'));
                
                // Add active class to clicked button
                this.classList.remove('bg-white', 'text-green-800', 'border', 'border-green-800');
                this.classList.add('active', 'bg-green-800', 'text-white');
                
                const filterValue = this.getAttribute('data-filter');
                
                // Filter packages
                packageCards.forEach(card => {
                    if (filterValue === 'all') {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        const cardCategory = card.getAttribute('data-category');
                        if (cardCategory === filterValue) {
                            card.style.display = 'block';
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'translateY(0)';
                            }, 10);
                        } else {
                            card.style.opacity = '0';
                            card.style.transform = 'translateY(20px)';
                            setTimeout(() => {
                                card.style.display = 'none';
                            }, 300);
                        }
                    }
                });
            });
        });
    }
});