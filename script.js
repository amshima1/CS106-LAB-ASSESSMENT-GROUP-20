document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('side-menu');
    const openBtn = document.getElementById('nav-open');
    const closeBtn = document.getElementById('nav-close');

    // Open/Close Side Menu
    if (openBtn) {
        openBtn.onclick = () => menu.classList.add('active');
    }
    if (closeBtn) {
        closeBtn.onclick = () => menu.classList.remove('active');
    }

    // Auto-close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.onclick = () => menu.classList.remove('active');
    });
});
