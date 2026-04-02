document.addEventListener('DOMContentLoaded', () => {
    // Feature 1: Hamburger Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');

    menuToggle.addEventListener('click', () => {
        sideMenu.classList.toggle('show');
        
        // Bonus: Hamburger to 'X' animation logic could go here
    });

    // Feature 2: Dynamic Greeting for Onyx-Adire
    const greeting = document.getElementById('dynamic-greeting');
    const hour = new Date().getHours();
    
    if (hour < 12) greeting.innerText = "Good Morning | Onyx—Adire";
    else if (hour < 18) greeting.innerText = "Good Afternoon | Onyx—Adire";
    else greeting.innerText = "Good Evening | Onyx—Adire";

    // Feature 3: Close menu when clicking a link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => sideMenu.classList.remove('show'));
    });
});
