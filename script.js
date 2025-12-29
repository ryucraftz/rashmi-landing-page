document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS with optimized settings
    AOS.init({
        duration: 800,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic',
        delay: 100,
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Accordion Logic with improved animation
    const accordions = document.querySelectorAll('.accordion-header');
    accordions.forEach(acc => {
        acc.addEventListener('click', () => {
            const item = acc.parentElement;
            const wasActive = item.classList.contains('active');

            // Optional: Close other accordions (single open at a time)
            // accordions.forEach(other => {
            //     if (other !== acc) other.parentElement.classList.remove('active');
            // });

            item.classList.toggle('active');

            const span = acc.querySelector('span');
            if (!wasActive) {
                span.textContent = "-";
            } else {
                span.textContent = "+";
            }
        });
    });

    // Sticky CTA Logic with throttle for performance
    const stickyCta = document.getElementById('sticky-cta');
    const heroBtn = document.querySelector('.hero-cta .primary-btn');

    if (stickyCta && heroBtn) {
        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const heroBtnRect = heroBtn.getBoundingClientRect();
                    if (heroBtnRect.bottom < 0) {
                        stickyCta.classList.add('visible');
                    } else {
                        stickyCta.classList.remove('visible');
                    }
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    // Add stagger effect to module items
    const moduleItems = document.querySelectorAll('.module-item');
    moduleItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.15}s`;
    });

    // Add entrance animation to chat bubbles
    const chatBubbles = document.querySelectorAll('.chat-bubble');
    chatBubbles.forEach((bubble, index) => {
        bubble.style.opacity = '0';
        bubble.style.transform = 'translateY(20px)';
        bubble.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

        setTimeout(() => {
            bubble.style.opacity = '1';
            bubble.style.transform = 'translateY(0)';
        }, index * 150);
    });

    console.log("Rashmi Landing Page - Optimized & Loaded ✨");
});
