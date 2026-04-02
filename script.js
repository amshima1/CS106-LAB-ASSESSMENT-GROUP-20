document.addEventListener('DOMContentLoaded', () => {
    // Feature 1: Dynamic Greeting (DOM Manipulation)
    const greetingElement = document.getElementById('dynamic-greeting');
    const currentHour = new Date().getHours();
    
    if (currentHour < 12) {
        greetingElement.textContent = "Good Morning, Welcome to Onyx—Adire";
    } else if (currentHour < 18) {
        greetingElement.textContent = "Good Afternoon, Welcome to Onyx—Adire";
    } else {
        greetingElement.textContent = "Good Evening, Welcome to Onyx—Adire";
    }

    // Feature 2: Interactive Header Effect
    const header = document.querySelector('header h1');
    header.addEventListener('mouseover', () => {
        header.style.color = '#ffffff';
        header.style.cursor = 'pointer';
    });
    header.addEventListener('mouseout', () => {
        header.style.color = '#d4af37';
    });

    // Feature 3: Scroll-to-Top Logic (Useful for all pages)
    console.log("Onyx—Adire Script Initialized.");
});
