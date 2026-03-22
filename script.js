document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('close-btn');

    // Menu Toggle
    if (menuBtn && mobileMenu) {
        menuBtn.onclick = () => {
            mobileMenu.style.display = 'flex';
        };
    }

    if (closeBtn) {
        closeBtn.onclick = () => {
            mobileMenu.style.display = 'none';
        };
    }

    // Optional: Auto-close menu when a link is clicked
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.onclick = () => {
            mobileMenu.style.display = 'none';
        };
    });
});
