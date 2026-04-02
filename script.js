document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('side-menu');
    document.getElementById('nav-open').onclick = () => menu.classList.add('active');
    document.getElementById('nav-close').onclick = () => menu.classList.remove('active');
});
