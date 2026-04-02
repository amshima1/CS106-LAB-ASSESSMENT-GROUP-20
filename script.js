document.addEventListener('DOMContentLoaded', () => {
    const navOpen = document.getElementById('nav-open');
    const navClose = document.getElementById('nav-close');
    const sideMenu = document.getElementById('side-menu');

    // Menu Interactions
    navOpen.onclick = () => sideMenu.classList.add('active');
    navClose.onclick = () => sideMenu.classList.remove('active');

    // Auto-close menu when a link is clicked
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.onclick = () => sideMenu.classList.remove('active');
    });

    console.log("Onyx—Adire: Minimalist DOM Initialized.");
});
