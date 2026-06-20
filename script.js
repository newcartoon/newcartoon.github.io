document.addEventListener("DOMContentLoaded", () => {
    // Scroll tracking optimization for character reveal entry
    const characterCards = document.querySelectorAll(".char-card");
    
    const revealSettings = {
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px"
    };

    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, revealSettings);

    characterCards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(25px)";
        card.style.transition = "opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        cardObserver.observe(card);
    });
});