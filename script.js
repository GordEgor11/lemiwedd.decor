const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.18,
        rootMargin: '0px 0px -30px 0px'
    }
);

revealItems.forEach(item => revealObserver.observe(item));

const form = document.querySelector('.contact-form');

if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        alert('Спасибо! Мы получили заявку и скоро свяжемся с вами.');
        form.reset();
    });
}
