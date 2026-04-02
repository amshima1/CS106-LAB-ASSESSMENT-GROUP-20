document.addEventListener('DOMContentLoaded', () => {
    const navOpen = document.getElementById('nav-open');
    const navClose = document.getElementById('nav-close');
    const sideMenu = document.getElementById('side-menu');

    // Slide-out Toggle
    navOpen.addEventListener('click', () => {
        sideMenu.classList.add('active');
    });

    navClose.addEventListener('click', () => {
        sideMenu.classList.remove('active');
    });

    // Feature: Dynamic Greeting Based on Time
    const greeting = document.getElementById('greeting');
    const hour = new Date().getHours();
    
    if (greeting) {
        if (hour < 12) greeting.innerText = "Good Morning | Onyx—Adire";
        else if (hour < 18) greeting.innerText = "Good Afternoon | Onyx—Adire";
        else greeting.innerText = "Good Evening | Onyx—Adire";
    }

    console.log("Onyx—Adire DOM structure initialized.");
});
