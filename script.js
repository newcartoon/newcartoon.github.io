document.addEventListener("DOMContentLoaded", () => {
    // 1. YouTube Lazy-Loading Player Facade Swap
    const videoFacade = document.getElementById("videoFacade");
    
    if (videoFacade) {
        videoFacade.addEventListener("click", function() {
            const videoId = this.getAttribute("data-video-id");
            
            // Create target live YouTube Frame component
            const iframe = document.createElement("iframe");
            iframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}?autoplay=1`);
            iframe.setAttribute("title", "Benny & Friends Adventure | Kids Cartoon New Episode");
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
            iframe.setAttribute("allowfullscreen", "1");
            
            // Remove facade layout styling indicators and insert active frame
            this.innerHTML = "";
            this.appendChild(iframe);
        });
    }

    // 2. Scroll Tracking Observation for Card Entry Effects
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
