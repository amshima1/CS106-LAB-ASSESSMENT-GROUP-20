/**
 * Onyx—Adire E-commerce Logic
 * Handles: Navigation, Product Modal, Recently Viewed (Local Storage), and WhatsApp Integration
 */

// 1. Navigation Logic
function toggleNav() {
    const sideNav = document.getElementById("mySidenav");
    const overlay = document.getElementById("overlay");
    
    if (sideNav.style.width === "280px") {
        sideNav.style.width = "0";
        overlay.style.display = "none";
    } else {
        sideNav.style.width = "280px";
        overlay.style.display = "block";
    }
}

// 2. Product Modal Logic
function openProduct(name, price, img) {
    // Update Modal Content
    document.getElementById('modalName').innerText = name;
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('modalImg').src = img;
    
    // Set up the WhatsApp button inside the modal
    const whatsappBtn = document.querySelector('#productModal .subscribe-btn');
    const phoneNumber = "234XXXXXXXXXX"; // REPLACEME: Your actual WhatsApp number
    const message = encodeURIComponent(`Hello Onyx—Adire, I am interested in ordering the ${name} (${price}). Is it available?`);
    
    whatsappBtn.onclick = function() {
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    // Show Modal
    document.getElementById('productModal').style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent background scroll

    // Save to Recently Viewed
    saveRecent(name, img);
}

function closeModal() {
    document.getElementById('productModal').style.display = "none";
    document.body.style.overflow = "auto"; // Re-enable scroll
}

// 3. Recently Viewed Logic (Using LocalStorage)
function saveRecent(name, img) {
    let recentItems = JSON.parse(localStorage.getItem('onyx_recent')) || [];

    // Check if item already exists to avoid duplicates
    const exists = recentItems.find(item => item.name === name);
    
    if (!exists) {
        // Add new item to the beginning of the array
        recentItems.unshift({ name, img });
        
        // Keep only the last 4 items
        if (recentItems.length > 4) {
            recentItems.pop();
        }
        
        localStorage.setItem('onyx_recent', JSON.stringify(recentItems));
        renderRecent();
    }
}

function renderRecent() {
    const recentItems = JSON.parse(localStorage.getItem('onyx_recent')) || [];
    const recentGrid = document.getElementById('recent-grid');
    const recentSection = document.getElementById('recent-section');

    if (recentItems.length === 0) {
        if (recentSection) recentSection.style.display = "none";
        return;
    }

    if (recentSection) recentSection.style.display = "block";
    
    if (recentGrid) {
        recentGrid.innerHTML = recentItems.map(item => `
            <div class="gallery-card" onclick="openProduct('${item.name}', 'View Details', '${item.img}')">
                <img src="${item.img}" style="height: 150px; object-fit: cover;">
                <div class="card-info" style="justify-content: center; text-align: center;">
                    <span class="item-name" style="font-size: 10px;">${item.name}</span>
                </div>
            </div>
        `).join('');
    }
}

// 4. Global Event Listeners
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    const overlay = document.getElementById('overlay');
    
    // Close modal if user clicks outside of the content box
    if (event.target == modal) {
        closeModal();
    }
    
    // Close sidenav if user clicks the overlay
    if (event.target == overlay) {
        toggleNav();
    }
};

// Initialize Recently Viewed on page load
document.addEventListener('DOMContentLoaded', renderRecent);
