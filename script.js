document.addEventListener('DOMContentLoaded', () => {
    const navOpen = document.getElementById('nav-open');
    const navClose = document.getElementById('nav-close');
    const sideMenu = document.getElementById('side-menu');

    if (navOpen) {
        navOpen.onclick = () => sideMenu.classList.add('active');
    }

    if (navClose) {
        navClose.onclick = () => sideMenu.classList.remove('active');
    }

    // Close menu when clicking outside
    window.onclick = (event) => {
        if (event.target == sideMenu) {
            sideMenu.classList.remove('active');
        }
    };
});
