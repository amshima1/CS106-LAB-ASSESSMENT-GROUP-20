document.addEventListener('DOMContentLoaded', () => {
    const navOpen = document.getElementById('nav-open');
    const navClose = document.getElementById('nav-close');
    const sideMenu = document.getElementById('side-menu');

    // Slide-out Toggle logic
    navOpen.onclick = () => sideMenu.classList.add('active');
    navClose.onclick = () => sideMenu.classList.remove('active');

    // Greeting Feature
    const greeting = document.getElementById('greeting');
    const hour = new Date().getHours();
    
    if (greeting) {
        if (hour < 12) greeting.innerText = "Good Morning | Onyx—Adire";
        else if (hour < 18) greeting.innerText = "Good Afternoon | Onyx—Adire";
        else greeting.innerText = "Good Evening | Onyx—Adire";
    }
});
