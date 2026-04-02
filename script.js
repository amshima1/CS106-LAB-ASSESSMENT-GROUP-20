document.addEventListener('DOMContentLoaded', () => {
    const navOpen = document.getElementById('nav-open');
    const navClose = document.getElementById('nav-close');
    const sideMenu = document.getElementById('side-menu');

    // Open Menu
    navOpen.onclick = () => {
        sideMenu.classList.add('active');
    };

    // Close Menu
    navClose.onclick = () => {
        sideMenu.classList.remove('active');
    };

    // Auto-close menu when clicking a link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.onclick = () => sideMenu.classList.remove('active');
    });

    // Dynamic Greeting
    const greeting = document.getElementById('greeting');
    const hour = new Date().getHours();
    if (greeting) {
        greeting.innerText = hour < 12 ? "Good Morning | Onyx—Adire" : 
                            hour < 18 ? "Good Afternoon | Onyx—Adire" : 
                            "Good Evening | Onyx—Adire";
    }
});
