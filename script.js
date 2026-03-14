document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("mobile-menu");
    const openBtn = document.getElementById("hamburger-btn");
    const closeBtn = document.getElementById("close-btn");
    const welcomeMsg = document.getElementById("welcome-text");

    // 1. Hamburger Controls
    openBtn.onclick = () => { menu.style.width = "250px"; };
    closeBtn.onclick = () => { menu.style.width = "0"; };

    // 2. Greeting Logic
    const hour = new Date().getHours();
    if (hour < 12) welcomeMsg.textContent = "Good Morning";
    else if (hour < 18) welcomeMsg.textContent = "Good Afternoon";
    else welcomeMsg.textContent = "Good Evening";
});
