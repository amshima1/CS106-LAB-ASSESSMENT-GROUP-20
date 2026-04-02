document.addEventListener('DOMContentLoaded', () => {
    const navOpen = document.getElementById('nav-open');
    const navClose = document.getElementById('nav-close');
    const sideMenu = document.getElementById('side-menu');

    navOpen.onclick = () => sideMenu.classList.add('active');
    navClose.onclick = () => sideMenu.classList.remove('active');

    // Close when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.onclick = () => sideMenu.classList.remove('active');
    });
});
