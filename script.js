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

    console.log("Rashmi Landing Page (Restructured) Loaded");
});
