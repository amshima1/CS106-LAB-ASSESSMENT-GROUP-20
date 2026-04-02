document.addEventListener('DOMContentLoaded', () => {
    const navOpen = document.getElementById('nav-open');
    const navClose = document.getElementById('nav-close');
    const sideMenu = document.getElementById('side-menu');

    // 1. Open the menu
    if (navOpen) {
        navOpen.addEventListener('click', () => {
            sideMenu.classList.add('active');
        });
    }

    // 2. Close the menu
    if (navClose) {
        navClose.addEventListener('click', () => {
            sideMenu.classList.remove('active');
        });
    }

    // 3. Close if a link is clicked
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            sideMenu.classList.remove('active');
        });
    });
});
