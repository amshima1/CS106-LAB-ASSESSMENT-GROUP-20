document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("mobile-menu");
    const openBtn = document.getElementById("hamburger-btn");
    const closeBtn = document.getElementById("close-btn");
    const welcomeMsg = document.getElementById("welcome-text");

    // Hamburger Controls
    if(openBtn) openBtn.onclick = () => { menu.style.width = "250px"; };
    if(closeBtn) closeBtn.onclick = () => { menu.style.width = "0"; };

    // Dynamic Greeting
    const hour = new Date().getHours();
    if (hour < 12) welcomeMsg.textContent = "Good Morning";
    else if (hour < 18) welcomeMsg.textContent = "Good Afternoon";
    else welcomeMsg.textContent = "Good Evening";
});
