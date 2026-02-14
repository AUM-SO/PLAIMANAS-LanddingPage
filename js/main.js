// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
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
