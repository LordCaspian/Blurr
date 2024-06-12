document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.sound-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const sound = new Audio(button.getAttribute('data-sound'));
            sound.play();
        });
    });
});
