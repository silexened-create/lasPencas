document.addEventListener('DOMContentLoaded', () => {
    // Reviews Data
    const reviews = [
        {
            name: "German Escobedo",
            rating: 5,
            text: "¡Delicioso! 🌟 100% recomendable."
        },
        {
            name: "Steven Holzworth",
            rating: 5,
            text: "The tacos were fantastic and the staff are very kind and respectful."
        },
        {
            name: "Tiktiktok G.",
            rating: 5,
            text: "Love their Birria and lamb Tacos. Highly recommend it if you love lamb."
        },
        {
            name: "Tacitus Kilgore",
            rating: 5,
            text: "La que no falla es la de borrego… recomiendo que se vayan por la de borrego."
        }
    ];

    // Render Reviews
    const reviewsContainer = document.getElementById('reviews-container');

    reviews.forEach(review => {
        const card = document.createElement('div');
        card.className = 'review-card';

        const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
        const initial = review.name.charAt(0);

        card.innerHTML = `
            <div class="stars">${stars}</div>
            <p class="review-text">"${review.text}"</p>
            <div class="review-author">
                <div class="author-avatar">${initial}</div>
                <span>${review.name}</span>
            </div>
        `;

        reviewsContainer.appendChild(card);
    });

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            navLinks.classList.remove('active'); // Close mobile menu on click

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple Form Handling (Prevent default for demo)
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
        form.reset();
    });
});
