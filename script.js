document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const slideMenu = document.getElementById('slide-menu');

    // Open Slide-out Menu
    menuToggle.addEventListener('click', () => {
        slideMenu.classList.add('show');
    });

    // Close Slide-out Menu
    closeMenu.addEventListener('click', () => {
        slideMenu.classList.remove('show');
    });

    // Dynamic Greeting Feature
    const greeting = document.getElementById('dynamic-greeting');
    const hour = new Date().getHours();
    if (greeting) {
        if (hour < 12) greeting.innerText = "Good Morning | Onyx—Adire";
        else if (hour < 18) greeting.innerText = "Good Afternoon | Onyx—Adire";
        else greeting.innerText = "Good Evening | Onyx—Adire";
    }
});
