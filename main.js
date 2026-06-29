// Main application script
document.addEventListener('DOMContentLoaded', () => {
    // Initialize intersection observer for fade-in animations
    setupIntersectionObserver();
});

/**
 * Setup intersection observer for fade-in animations
 */
function setupIntersectionObserver() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observerInstance.unobserve(entry.target); // Run animation once
            }
        });
    }, observerOptions);

    // Observe all fade-in sections
    document.querySelectorAll('.fade-in-section').forEach(section => {
        observer.observe(section);
    });
}
