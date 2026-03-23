/* --- 1. MOBILE NAVIGATION LOGIC --- */
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    // Toggles the 'active' class which controls visibility in your style.css
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

/* --- 2. LIVE FOOTER CLOCK --- */
function updateClock() {
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        const now = new Date();
        // Formats time to match the 24-hour style seen on your Android status bar
        const timeString = now.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit',
            hour12: false 
        });
        clockElement.textContent = timeString;
    }
}
// Update every second
setInterval(updateClock, 1000);
updateClock();

/* --- 3. CHATBOT INTERACTION --- */
function toggleChat() {
    const chatBody = document.getElementById('chat-body');
    const chatFooter = document.querySelector('.chat-footer');
    const chatIcon = document.getElementById('chat-icon');
    
    if (chatBody && chatFooter) {
        // Toggle display between none and block/flex
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

    // Append User Message
    const userDiv = document.createElement('div');
    userDiv.style.cssText = "background: #cc0000; color: white; margin: 8px; padding: 10px; border-radius: 10px; align-self: flex-end; text-align: right; margin-left: auto; max-width: 85%; font-size: 0.85rem;";
    userDiv.innerText = userText;
    chatBody.appendChild(userDiv);

    // Clear the input field
    input.value = "";

    // Bot Response Logic
    setTimeout(() => {
        const botDiv = document.createElement('div');
        botDiv.style.cssText = "background: #eeeeee; color: #333; margin: 8px; padding: 10px; border-radius: 10px; align-self: flex-start; margin-right: auto; max-width: 85%; font-size: 0.85rem;";
        
        const lowerText = userText.toLowerCase();

        // Custom responses based on Onyx-Adire's services
        if (lowerText.includes("price") || lowerText.includes("cost")) {
            botDiv.innerText = "Our luxury Adire pieces range from ₦45,000 to ₦150,000. Which item can I price for you?";
        } else if (lowerText.includes("shipping") || lowerText.includes("delivery")) {
            botDiv.innerText = "We ship across Nigeria and internationally! Delivery times depend on your location.";
        } else if (lowerText.includes("appointment") || lowerText.includes("bespoke")) {
            botDiv.innerText = "You can book a fitting session via our 'Inquiries' page or message us directly on WhatsApp.";
        } else {
            botDiv.innerText = "Thanks for contacting Onyx-Adire! A member of our team will be with you shortly.";
        }

        chatBody.appendChild(botDiv);
        // Auto-scroll to the bottom of the chat
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 700);
}

/* --- 4. EVENT LISTENERS --- */
document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('user-input');
    if (userInput) {
        // Allows sending messages by pressing 'Enter' on mobile keyboards
        userInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
});
