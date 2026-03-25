/**
 * Onyx—Adire Official Performance Script
 * Features: Optimized Hamburger, Full-Image Modal, and Smart "Recently Viewed"
 */

// 1. IMPROVED NAVIGATION PERFORMANCE
function toggleNav() {
    const sideNav = document.getElementById("mySidenav");
    const overlay = document.getElementById("overlay");
    const mainContent = document.getElementById("main-content");
    
    // Check current state
    if (sideNav.style.width === "280px") {
        sideNav.style.width = "0";
        overlay.style.display = "none";
        if (mainContent) mainContent.style.filter = "none"; // Remove blur
        document.body.style.overflow = "auto"; // Re-enable scroll
    } else {
        sideNav.style.width = "280px";
        overlay.style.display = "block";
        if (mainContent) mainContent.style.filter = "blur(4px)"; // Performance focus blur
        document.body.style.overflow = "hidden"; // Prevent background scroll
    }
}

// 2. PRODUCT MODAL (POPUP) LOGIC
function openProduct(name, price, img) {
    const modal = document.getElementById('productModal');
    const modalImg = document.getElementById('modalImg');
    const modalName = document.getElementById('modalName');
    const modalPrice = document.getElementById('modalPrice');
    
    // Update Content
    modalImg.src = img;
    modalName.innerText = name;
    modalPrice.innerText = price;

    // Configure WhatsApp Ordering
    const whatsappBtn = document.querySelector('#productModal .subscribe-btn');
    const myNumber = "234XXXXXXXXXX"; // REPLACEME: Your actual WhatsApp number
    const text = encodeURIComponent(`Hello Onyx—Adire, I'm interested in ordering: ${name} (${price}). Is it available?`);
    
    whatsappBtn.onclick = () => {
        window.open(`https://wa.me/${myNumber}?text=${text}`, '_blank');
    };

    // Show Modal & Lock Scroll
    modal.style.display = "block";
    document.body.style.overflow = "hidden";

    // Save to Recently Viewed
    saveRecent(name, img);
}

function closeModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Re-enable scroll
}

// 3. SMART RECENTLY VIEWED (NO BROKEN IMAGES)
function saveRecent(name, img) {
    // Only save if it's a valid Onyx-Adire product image
    if (!img.toLowerCase().includes('onyx-adire')) return;

    let items = JSON.parse(localStorage.getItem('onyx_v3_recent')) || [];

    // Avoid duplicates
    const exists = items.find(i => i.name === name);
    if (!exists) {
        items.unshift({ name, img });
        if (items.length > 2) items.pop(); // Keep only the latest 2 pieces
        localStorage.setItem('onyx_v3_recent', JSON.stringify(items));
        renderRecent();
    }
}

function renderRecent() {
    const items = JSON.parse(localStorage.getItem('onyx_v3_recent')) || [];
    const section = document.getElementById('recent-section');
    const grid = document.getElementById('recent-grid');

    // Only show section if there are valid items
    if (items.length === 0) {
        if (section) section.style.display = "none";
        return;
    }

    if (section) section.style.display = "block";
    if (grid) {
        grid.innerHTML = items.map(item => `
            <div class="gallery-card" onclick="openProduct('${item.name}', 'View Piece', '${item.img}')">
                <img src="${item.img}" style="height: 140px; object-fit: cover; border-radius: 2px;">
                <div class="card-info" style="text-align: center;">
                    <span class="item-name" style="font-size: 10px; color: #1a1a1a;">${item.name}</span>
                </div>
            </div>
        `).join('');
    }
}

// 4. GLOBAL INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    renderRecent();

    // Close elements when clicking the dark overlay
    window.onclick = function(event) {
        const modal = document.getElementById('productModal');
        const overlay = document.getElementById('overlay');
        
        if (event.target == modal) closeModal();
        if (event.target == overlay) toggleNav();
    };
});
