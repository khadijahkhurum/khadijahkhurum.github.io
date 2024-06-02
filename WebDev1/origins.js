document.querySelectorAll('section').forEach(section => {
    section.addEventListener('mouseenter', () => {
        section.querySelector('.content').style.opacity = '1';
    });
    section.addEventListener('mouseleave', () => {
        section.querySelector('.content').style.opacity = '0.8';
    });
});
