document.addEventListener('DOMContentLoaded', () => {
    const openMenu = document.getElementById('menu-icon');
    const closeMenu = document.getElementById('close-nav');
    const sideNav = document.getElementById('side-nav');

    if (openMenu) {
        openMenu.onclick = () => {
            sideNav.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Stop page scroll
        };
    }

    if (closeMenu) {
        closeMenu.onclick = () => {
            sideNav.style.display = 'none';
            document.body.style.overflow = 'auto'; // Resume scroll
        };
    }
});
