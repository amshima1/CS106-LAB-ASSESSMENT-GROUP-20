/* --- 1. MOBILE NAVIGATION TOGGLE --- */
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    // Simple toggle for the 'active' class to show/hide the menu on Android/iOS
    if (navMenu.style.display === "flex") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "flex";
        navMenu.style.flexDirection = "column";
    }
}

/* --- 2. LIVE FOOTER CLOCK --- */
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    // Format to 24-hour style as seen in your mobile status bar
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    clockElement.textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();

/* --- 3. CHATBOT LOGIC --- */
function toggleChat() {
    const chatBody = document.getElementById('chat-body');
    const chatFooter = document.querySelector('.chat-footer');
    const chatIcon = document.getElementById('chat-icon');
    
    // Toggle visibility of the chat interface
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

function sendMessage() {
    const input = document.getElementById('user-input');
    const chatBody = document.getElementById('chat-body');
    const messageText = input.value.trim();
    
    if (messageText === "") return;

    // Append User Message
    const userDiv = document.createElement('div');
    userDiv.className = "message user";
    userDiv.style.cssText = "background: #cc0000; color: white; margin: 5px; padding: 10px; border-radius: 8px; align-self: flex-end; text-align: right;";
    userDiv.innerText = messageText;
    chatBody.appendChild(userDiv);

    // Clear input immediately
    input.value = "";

    // Generate Bot Response
    setTimeout(() => {
        const botDiv = document.createElement('div');
        botDiv.className = "message bot";
        botDiv.style.cssText = "background: #f1f1f1; color: #333; margin: 5px; padding: 10px; border-radius: 8px; align-self: flex-start;";
        
        const lowerText = messageText.toLowerCase();

        // Custom Responses for Onyx-Adire
        if (lowerText.includes("price") || lowerText.includes("cost") || lowerText.includes("how much")) {
            botDiv.innerText = "Our luxury Adire sets range from ₦45,000 to ₦150,000. Check our catalog for specific prices!";
        } else if (lowerText.includes("location") || lowerText.includes("where")) {
            botDiv.innerText = "We are based in Nigeria and ship globally. Would you like to see our shipping rates?";
        } else if (lowerText.includes("bespoke") || lowerText.includes("custom")) {
            botDiv.innerText = "We specialize in bespoke traditional wear. Please use the 'Book Appointment' button or WhatsApp us for measurements!";
        } else {
            botDiv.innerText = "Thank you for reaching out to Onyx-Adire. A stylist will be with you shortly, or you can use the WhatsApp button for instant chat.";
        }

        chatBody.appendChild(botDiv);
        chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll to bottom
    }, 800);
}

// Allow "Enter" key to send messages
document.getElementById('user-input')?.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
