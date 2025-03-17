export function initMenuToggle() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navContent = document.querySelector('.nav-content');
    const menuIcon = document.querySelector('.menu-icon');

    menuToggle.addEventListener('click', () => {
        navContent.classList.toggle('active');

        menuIcon.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.main-nav') && navContent.classList.contains('active')) {
            navContent.classList.remove('active');
            menuIcon.classList.remove('active');
        }
    });
}