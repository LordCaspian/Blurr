const switcher = document.querySelectorAll('.faq-toggle');

switcher.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
    });
});
