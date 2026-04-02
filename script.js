document.addEventListener('DOMContentLoaded', () => {
    const navOpen = document.getElementById('nav-open');
    const navClose = document.getElementById('nav-close');
    const sideMenu = document.getElementById('side-menu');

    // Open the side menu
    navOpen.addEventListener('click', () => {
        sideMenu.classList.add('active');
    });

    // Close the side menu
    navClose.addEventListener('click', () => {
        sideMenu.classList.remove('active');
    });

    // Close menu if a user clicks a link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            sideMenu.classList.remove('active');
        });
    });
});
