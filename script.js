document.addEventListener('DOMContentLoaded', () => {
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
            const body = acc.nextElementSibling;
            if (body.style.display === "block") {
                body.style.display = "none";
                acc.querySelector('span').textContent = "+";
            } else {
                body.style.display = "block";
                acc.querySelector('span').textContent = "-";
            }
        });
    });

    console.log("Rashmi Landing Page (Restructured) Loaded");
});
