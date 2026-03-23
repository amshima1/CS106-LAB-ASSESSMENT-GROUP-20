/**
 * ONYX-ADIRE INTERACTIVE SCRIPT
 * Functionality: Mobile Menu, Digital Clock, and Image Interactions
 */

// 1. HAMBURGER MENU TOGGLE
// This opens and closes the menu when the 3-line icon is clicked
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    if (menu) {
        menu.classList.toggle('show-menu');
    }
}

// 2. CLOSE MENU ON OUTSIDE CLICK
// If the user clicks anywhere else on the screen, the menu closes automatically
window.addEventListener('click', function(event) {
    const menu = document.getElementById('nav-menu');
    const menuIcon = document.querySelector('.menu-icon');
    
    // Check if the click was outside the menu and the hamburger icon
    if (menu && menu.classList.contains('show-menu')) {
        if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
            menu.classList.remove('show-menu');
        }
    }
});

// 3. REAL-TIME DIGITAL CLOCK
// Displays the current time in the footer as seen in your layout
function updateClock() {
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
}

// Update the clock every second
setInterval(updateClock, 1000);

// 4. MARQUEE HOVER EFFECT
// Slows down the announcement bar when the user wants to read it
const marquee = document.querySelector('marquee');
if (marquee) {
    marquee.addEventListener('mouseover', () => marquee.stop());
    marquee.addEventListener('mouseout', () => marquee.start());
}

// 5. INITIALIZE ON LOAD
document.addEventListener('DOMContentLoaded', () => {
    updateClock(); // Start clock immediately
    
    // Optional: Log interest in items for your freelance portfolio metrics
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', () => {
            const productName = card.querySelector('h3').innerText;
            console.log("Customer viewing:", productName);
        });
    });
});
