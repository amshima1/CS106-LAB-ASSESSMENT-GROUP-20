document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('side-menu');
    const openBtn = document.getElementById('nav-open');
    const closeBtn = document.getElementById('nav-close');

    // Toggle Menu
    openBtn.onclick = () => menu.classList.add('active');
    closeBtn.onclick = () => menu.classList.remove('active');

    // Auto-close menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.onclick = () => menu.classList.remove('active');
    });
});
