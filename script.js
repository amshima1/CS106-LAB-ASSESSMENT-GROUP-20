/**
 * Onyx—Adire E-commerce Logic
 * Handles Sidenav and UI Interactions
 */

let isNavOpen = false;

/**
 * Toggles the side navigation menu
 * @param {boolean} forceClose - Optional: pass true to ensure the menu closes
 */
function toggleNav() {
    const sidenav = document.getElementById("mySidenav");
    const overlay = document.getElementById("overlay");

    if (!isNavOpen) {
        // OPEN NAV
        sidenav.style.width = "280px";
        overlay.style.display = "block";
        isNavOpen = true;
    } else {
        // CLOSE NAV
        sidenav.style.width = "0";
        overlay.style.display = "none";
        isNavOpen = false;
    }
}

// Close navigation if the user clicks the overlay (the darkened area)
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById("overlay");
    if (overlay) {
        overlay.addEventListener('click', toggleNav);
    }
});

/**
 * Newsletter Form Logic (Placeholder)
 * You can expand this later to connect to a database
 */
const subscribeBtn = document.querySelector('.subscribe-btn');
if (subscribeBtn) {
    subscribeBtn.addEventListener('click', () => {
        const emailInput = document.querySelector('.email-input');
        if (emailInput.value.includes('@')) {
            alert("Thank you for joining the Onyx—Adire movement!");
            emailInput.value = "";
        } else {
            alert("Please enter a valid email address.");
        }
    });
}
