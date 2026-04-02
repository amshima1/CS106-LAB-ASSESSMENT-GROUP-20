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

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.onclick = () => sideMenu.classList.remove('active');
    });
});
