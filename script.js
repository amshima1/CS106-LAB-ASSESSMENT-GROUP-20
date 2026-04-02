document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic Greeting (DOM manipulation)
    const welcomeMsg = document.getElementById('welcome-msg');
    if (welcomeMsg) {
        const hours = new Date().getHours();
        welcomeMsg.innerText = hours < 12 ? "Good Morning from Onyx—Adire" : "Welcome to the Onyx—Adire Collection";
    }

    // 2. Page Activity Tracker
    console.log(`Current Page: ${window.location.pathname}`);

    // 3. Appointment Form Logic
    const form = document.querySelector('#booking-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Success! Your Onyx—Adire appointment is being processed.");
        });
    }
});
