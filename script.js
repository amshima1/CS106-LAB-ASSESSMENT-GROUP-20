/**
 * 1. MOBILE NAVIGATION LOGIC
 * Toggles the 'active' class on the menu-links drawer.
 * Positioned for the top-left hamburger icon.
 */
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

/**
 * 2. LIVE FOOTER CLOCK
 * Updates every second to display the current time.
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
setInterval(updateClock, 1000);
updateClock();

/**
 * 3. CHATBOT INTERACTION
 * Manages the visibility and automated responses of the Onyx-Adire Assistant.
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

    // Create User Message Bubble
    const userDiv = document.createElement('div');
    userDiv.className = "message user";
    // Inline styling to ensure Red & White theme consistency
    userDiv.style.cssText = "background: #cc0000; color: #ffffff; margin: 8px; padding: 10px; border-radius: 10px; align-self: flex-end; text-align: right; margin-left: auto; max-width: 80%; font-size: 0.85rem; font-family: sans-serif;";
    userDiv.innerText = userText;
    chatBody.appendChild(userDiv);

    input.value = "";

    // Automated Bot Response
    setTimeout(() => {
        const botDiv = document.createElement('div');
        botDiv.className = "message bot";
        botDiv.style.cssText = "background: #f4f4f4; color: #cc0000; border: 1px solid #cc0000; margin: 8px; padding: 10px; border-radius: 10px; align-self: flex-start; margin-right: auto; max-width: 80%; font-size: 0.85rem; font-family: sans-serif;";
        
        const lowerText = userText.toLowerCase();

        if (lowerText.includes("price") || lowerText.includes("how much")) {
            botDiv.innerText = "Our luxury Adire pieces range from ₦45,000 to ₦150,000. Check the catalog for specific prices!";
        } else if (lowerText.includes("delivery") || lowerText.includes("ship")) {
            botDiv.innerText = "We offer nationwide delivery within Nigeria and international shipping for our diaspora clients.";
        } else if (lowerText.includes("bespoke") || lowerText.includes("custom")) {
            botDiv.innerText = "We love creating custom pieces! Please use the 'Book Appointment' button or WhatsApp us for measurements.";
        } else {
            botDiv.innerText = "Welcome to Onyx-Adire. A stylist will be with you shortly. You can also click the WhatsApp icon for instant chat!";
        }

        chatBody.appendChild(botDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 600);
}

/**
 * 4. EVENT LISTENERS
 * Ensures the 'Enter' key works on mobile keyboards.
 */
document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('user-input');
    if (userInput) {
        userInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    // Ensure Chatbot starts hidden
    const chatBody = document.getElementById('chat-body');
    if (chatBody) chatBody.style.display = "none";
});
