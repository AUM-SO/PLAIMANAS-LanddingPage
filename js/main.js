// Parallax Scroll Effect for H1 in Section 2 and Section 3
document.addEventListener('DOMContentLoaded', function() {
    const section2H1 = document.querySelector('.section2 .image-section2 h1');
    const section3H1 = document.querySelector('.section3 .image-section3 h1');
    const section2Container = document.querySelector('.section2 .image-section2');
    const section3Container = document.querySelector('.section3 .image-section3');
    const plaimanas = document.querySelector('.text-fixed-pos h1');

    function handleScroll() {
        // Handle Section 2 H1 - เริ่มเลื่อนเมื่อ PLAIMANAS ถึง h1
        if (section2H1 && section2Container && plaimanas) {
            const h1Rect = section2H1.getBoundingClientRect();
            const plaimanasRect = plaimanas.getBoundingClientRect();
            
            // Check if PLAIMANAS has reached or passed the h1
            const plaimanasBottom = plaimanasRect.bottom;
            const h1Top = h1Rect.top + (h1Rect.height / 2);
            
            if (plaimanasBottom >= h1Top) {
                // Calculate how far PLAIMANAS has traveled past the h1
                const travelDistance = plaimanasBottom - h1Top;
                const containerHeight = section2Container.getBoundingClientRect().height;
                
                // Calculate progress based on travel distance
                const maxTravel = containerHeight * 0.8;
                const progress = Math.min(travelDistance / maxTravel, 1);
                
                // Move from -50% (center) to max 175% (stop at 175)
                const translateY = Math.min(-50 + (progress * 1010), 175);
                section2H1.style.transform = `translate(-50%, ${translateY}%)`;
            } else {
                // Reset to center position
                section2H1.style.transform = `translate(-50%, -50%)`;
            }
        }

        // Handle Section 3 H1 - เริ่มเลื่อนเมื่อ PLAIMANAS ถึง h1
        if (section3H1 && section3Container && plaimanas) {
            const h1Rect = section3H1.getBoundingClientRect();
            const plaimanasRect = plaimanas.getBoundingClientRect();
            
            const plaimanasBottom = plaimanasRect.bottom;
            const h1Top = h1Rect.top + (h1Rect.height / 2);
            
            if (plaimanasBottom >= h1Top) {
                const travelDistance = plaimanasBottom - h1Top;
                const containerHeight = section3Container.getBoundingClientRect().height;
                
                const maxTravel = containerHeight * 0.8;
                const progress = Math.min(travelDistance / maxTravel, 1);
                
                // Move from -50% (center) to max 175% (stop at 175)
                const translateY = Math.min(-50 + (progress * 3200), 270);
                section3H1.style.transform = `translate(-50%, ${translateY}%)`;
            } else {
                section3H1.style.transform = `translate(-50%, -50%)`;
            }
        }
    }

    // Add scroll event listener with throttling for performance
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Initial call
    handleScroll();

    // FAQ Accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const answer = faqItem.querySelector('.faq-answer');
            const icon = this.querySelector('.faq-icon');
            
            // Toggle active class
            answer.classList.toggle('active');
            
            // Toggle rotation for icon (rotate right)
            if (answer.classList.contains('active')) {
                icon.style.transform = 'rotate(-180deg)';
            } else {
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });

    // Category button functionality
    const categoryButtons = document.querySelectorAll('.section6 .list-btn .btn');
    const faqItems = document.querySelectorAll('.faq-item');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get selected category
            const selectedCategory = this.getAttribute('data-category');
            
            // Show/hide FAQ items based on category
            faqItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (itemCategory === selectedCategory) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
                
                // Reset all answers to closed state
                const answer = item.querySelector('.faq-answer');
                const icon = item.querySelector('.faq-icon');
                answer.classList.remove('active');
                icon.style.transform = 'rotate(0deg)';
            });
        });
    });
});
