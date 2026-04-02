/* ONYX—ADIRE | Master Script - Final Stability Version */

document.addEventListener('DOMContentLoaded', () => {
    const sideMenu = document.getElementById('side-menu');
    const openBtn = document.getElementById('nav-open');
    const closeBtn = document.getElementById('nav-close');
    const lightbox = document.getElementById('lightbox');

    // 1. NAVIGATION LOGIC
    if (openBtn && sideMenu) {
        openBtn.onclick = () => sideMenu.classList.add('active');
    }
    if (closeBtn && sideMenu) {
        closeBtn.onclick = () => sideMenu.classList.remove('active');
    }

    // 2. THE MASTER LIGHTBOX FUNCTION
    window.openLightbox = function(src, name) {
        const lbImg = document.querySelector('.lightbox-img');
        const lbCap = document.querySelector('.lightbox-caption');

        if (lightbox && lbImg) {
            lightbox.style.display = 'flex';
            lbImg.src = src;
            lbCap.innerText = name || "Onyx Selection";
            document.body.style.overflow = 'hidden'; // Stop background scroll
            
            // Trigger suggestions if function exists
            if (window.generateRandomSuggestions) {
                window.generateRandomSuggestions(src);
            }
        }
    };

    // 3. CLOSE LIGHTBOX LOGIC
    const closeLb = document.querySelector('.close-lightbox');
    if (closeLb) {
        closeLb.onclick = () => {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        };
    }

    // 4. GLOBAL CLICK LISTENER (The Fix)
    // This catches clicks on ANY image with the class 'clickable-img'
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('clickable-img')) {
            const src = e.target.getAttribute('src');
            const name = e.target.getAttribute('data-name');
            window.openLightbox(src, name);
        }
    });
});
