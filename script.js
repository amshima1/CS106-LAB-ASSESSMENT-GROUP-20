// JavaScript Features for Onyx-Adire
document.addEventListener("DOMContentLoaded", () => {
    // Feature 1: Dynamic Greeting
    const hour = new Date().getHours();
    let greeting = hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";
    console.log(`${greeting}! Welcome to Onyx-Adire.`);

    // Feature 2: Simple Alert on Booking
    const form = document.querySelector("#bookingForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thank you! Your appointment request for Onyx-Adire has been received.");
        });
    }
});
