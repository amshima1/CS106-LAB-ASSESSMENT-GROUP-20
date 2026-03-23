/**
 * 1. MOBILE NAVIGATION LOGIC
 * Toggles the 'active' class on the menu drawer.
 * Works with the top-left hamburger icon structure.
 */
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

/**
 * 2. LIVE FOOTER CLOCK
 * Displays time in a professional 24-hour format.
 */
function updateClock() {
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit',
            hour12: false 
        });
        clockElement.textContent = timeString;
    }
}
// Initialize and set interval
setInterval(updateClock, 1000);
updateClock();

/**
 * 3. ONYX-ADIRE ASSISTANT (CHATBOT)
 * Handles visibility and the luxury-themed automated responses.
 */
function toggleChat() {
    const chatBody = document.getElementById('chat-body');
    const chatFooter = document.querySelector('.chat-footer');
    const chatIcon = document.getElementById('chat-icon');
    
    if (chatBody && chatFooter) {
        if (chatBody.style.display === "none" || chatBody.style.display === "") {
            chatBody.style.display = "block";
            chatFooter.style.display = "flex";
            chatIcon.innerText = "▼";
        } else {
            chatBody.style.display = "none";
            chatFooter.style.display = "none";
            chatIcon.innerText = "▲";
        }
    }
}

function sendMessage() {
    const input = document.getElementById('user-input');
    const chatBody = document.getElementById('chat-body');
    
    if (!input || !chatBody || input.value.trim() === "") return;

    const userText = input.value.trim();

    // User Message (Red background, white text)
    const userDiv = document.createElement('div');
    userDiv.style.cssText = "background: #cc0000; color: #ffffff; margin: 8px; padding: 10px; border-radius: 12px; align-self: flex-end; text-align: right; margin-left: auto; max-width: 80%; font-size: 0.85rem; font-family: sans-serif;";
    userDiv.innerText = userText;
    chatBody.appendChild(userDiv);

    input.value = "";

    // Bot Response Logic
    setTimeout(() => {
        const botDiv = document.createElement('div');
        // Bot Message (White background, red border)
        botDiv.style.cssText = "background: #ffffff; color: #cc0000; border: 1px solid #cc0000; margin: 8px; padding: 10px; border-radius: 12px; align-self: flex-start; margin-right: auto; max-width: 80%; font-size: 0.85rem; font-family: sans-serif;";
        
        const lowerText = userText.toLowerCase();

        if (lowerText.includes("price") || lowerText.includes("cost") || lowerText.includes("how much")) {
            botDiv.innerText = "Our luxury Adire pieces are priced between ₦45,000 and ₦150,000. Each piece is handcrafted for excellence.";
        } else if (lowerText.includes("delivery") || lowerText.includes("shipping")) {
            botDiv.innerText = "We offer nationwide delivery across Nigeria and premium international shipping options.";
        } else if (lowerText.includes("location") || lowerText.includes("where")) {
            botDiv.innerText = "Onyx-Adire is based in Nigeria. You can book a virtual or physical appointment for custom fittings!";
        } else {
            botDiv.innerText = "Welcome to Onyx-Adire. A personal stylist will be with you shortly. You can also use the WhatsApp bar for instant chat!";
        }

        chatBody.appendChild(botDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 600);
}

/**
 * 4. KEYBOARD & LOAD LISTENERS
 */
document.addEventListener('DOMContentLoaded', () => {
    // Listen for 'Enter' key on mobile keyboards
    const userInput = document.getElementById('user-input');
    if (userInput) {
        userInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    // Ensure the menu drawer closes if the window is resized (Safety for mobile)
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            const navMenu = document.getElementById('nav-menu');
            if (navMenu) navMenu.classList.remove('active');
        }
    });
});
