document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 80,
        easing: 'ease-out-cubic'
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Accordion Logic
    const accordions = document.querySelectorAll('.accordion-header');
    accordions.forEach(acc => {
        acc.addEventListener('click', () => {
            const item = acc.parentElement;
            // Close others if needed (optional, keeping multi-open for now)
            item.classList.toggle('active');

            const span = acc.querySelector('span');
            if (item.classList.contains('active')) {
                span.textContent = "-";
            } else {
                span.textContent = "+";
            }
        });
    });

    // Sticky CTA Logic
    const stickyCta = document.getElementById('sticky-cta');
    const heroBtn = document.querySelector('.hero-cta .primary-btn');

    if (stickyCta && heroBtn) {
        window.addEventListener('scroll', () => {
            const heroBtnRect = heroBtn.getBoundingClientRect();
            if (heroBtnRect.bottom < 0) {
                stickyCta.classList.add('visible');
            } else {
                stickyCta.classList.remove('visible');
            }
        });
    }

    // Hybrid Marquee Logic
    const marquee = document.querySelector('.proof-marquee');
    const group = document.querySelector('.proof-group');

    if (marquee && group) {
        let scrollAmount = 0;
        let isHovered = false;
        // Speed in px per frame. Adjust for smoothness (0.5 is slow/smooth)
        const speed = 0.5;

        function startMarquee() {
            // If user is hovering or touching, don't auto-scroll
            if (!isHovered) {
                scrollAmount += speed;

                // If we've scrolled past the first group width, reset to 0
                // This creates the seamless loop illusion
                // Note: floating point errors can accumulate, so strict resetting is key
                if (scrollAmount >= group.scrollWidth) { // Changed to scrollWidth to be safer
                    scrollAmount = 0;
                }

                marquee.scrollLeft = scrollAmount;
            } else {
                // If hovered, we sync our internal counter to the current scroll position
                // so it doesn't jump when mouse leaves
                scrollAmount = marquee.scrollLeft;
            }

            requestAnimationFrame(startMarquee);
        }

        // Event Listeners for Pause
        marquee.addEventListener('mouseenter', () => { isHovered = true; });
        marquee.addEventListener('mouseleave', () => { isHovered = false; });
        marquee.addEventListener('touchstart', () => { isHovered = true; }, { passive: true });
        marquee.addEventListener('touchend', () => {
            // Small delay to allow swipe momentum to finish before resuming (optional)
            setTimeout(() => { isHovered = false; }, 1000);
        });

        startMarquee();
    }

    console.log("Rashmi Landing Page (Restructured) Loaded");
});
