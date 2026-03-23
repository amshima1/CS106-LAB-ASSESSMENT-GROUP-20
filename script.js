/* --- 1. CORE NAVIGATION & CLOCK --- */
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) navMenu.classList.toggle('active');
}

function updateClock() {
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        const now = new Date();
        clockElement.textContent = now.toLocaleTimeString([], { hour12: false });
    }
}
setInterval(updateClock, 1000);
updateClock();

/* --- 2. NEW: SCROLL REVEAL ANIMATION --- */
// This makes product cards slide up into view as you scroll
const revealProducts = () => {
    const cards = document.querySelectorAll('.product-card');
    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
};

/* --- 3. NEW: INTERACTIVE BUTTON FEEDBACK --- */
// Adds a simple confirmation when a user clicks 'Book Appointment'
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('book-btn')) {
        const productName = e.target.parentElement.querySelector('h3').innerText;
        console.log(`Booking initiated for: ${productName}`);
        // You can replace this with a custom modal later
    }
});

/* --- 4. INITIALIZATION --- */
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.product-card');
    
    // Set initial state for animation
    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.6s ease-out";
    });

    window.addEventListener('scroll', revealProducts);
    revealProducts(); // Run once on load
});
