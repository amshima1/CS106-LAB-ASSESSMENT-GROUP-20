/* ONYX—ADIRE | Master Script
   Functionality: Nav Toggle, Hero Slider, Lightbox, & Recently Viewed Logic
*/

document.addEventListener('DOMContentLoaded', () => {
    // 1. NAVIGATION DRAWER LOGIC
    const sideMenu = document.getElementById('side-menu');
    const openNav = document.getElementById('nav-open');
    const closeNav = document.getElementById('nav-close');

    if (openNav && sideMenu) {
        openNav.onclick = () => {
            sideMenu.classList.add('active');
            // Note: We don't lock body scroll here to ensure the sticky header 
            // stays interactive and visible as requested.
        };
    }

    if (closeNav && sideMenu) {
        closeNav.onclick = () => {
            sideMenu.classList.remove('active');
        };
    }

    // 2. LIGHTBOX & RECENTLY VIEWED MEMORY
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    
    // Load history from browser storage
    let recentlyViewed = JSON.parse(localStorage.getItem('onyxRecent')) || [];

    // Function to render the "Recently Viewed" section
    function updateRecentUI() {
        const container = document.getElementById('recent-view-container');
        const section = document.getElementById('recent-section');
        
        if (!container || recentlyViewed.length === 0) return;
        
        section.style.display = 'block';
        container.innerHTML = ''; 
        
        recentlyViewed.forEach(item => {
            container.innerHTML += `
                <div class="grid-item">
                    <img src="${item.src}" class="clickable-img" onclick="openLightbox('${item.src}', '${item.name}')">
                    <div class="product-info">
                        <h3 style="color:#cc0000; font-size: 0.7rem; text-transform: uppercase;">${item.name}</h3>
                    </div>
                </div>`;
        });
    }

    // Global function to open the Lightbox
    window.openLightbox = (src, name) => {
        if (!lightbox || !lightboxImg) return;

        lightbox.style.display = 'flex';
        lightboxImg.src = src;
        lightboxCaption.innerText = name;
        document.body.style.overflow = 'hidden'; // Lock scroll only when looking at a photo

        // Add to "Recently Viewed" logic
        const alreadyExists = recentlyViewed.find(i => i.src === src);
        if (!alreadyExists) {
            recentlyViewed.unshift({ src, name });
            if (recentlyViewed.length > 6) recentlyViewed.pop(); // Keep list short
            localStorage.setItem('onyxRecent', JSON.stringify(recentlyViewed));
            updateRecentUI();
        }
    };

    // 3. ATTACH CLICK EVENTS TO ALL 20 COLLECTION IMAGES
    const allImages = document.querySelectorAll('.main-content .clickable-img');
    allImages.forEach(img => {
        img.addEventListener('click', () => {
            // Find the name in the <h3> tag directly after the image
            const productInfo = img.nextElementSibling;
            if (productInfo) {
                const name = productInfo.querySelector('h3').innerText;
                openLightbox(img.src, name);
            }
        });
    });

    // Close Lightbox on 'X' click
    const closeLightboxBtn = document.querySelector('.close-lightbox');
    if (closeLightboxBtn) {
        closeLightboxBtn.onclick = () => {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        };
    }

    // Close Lightbox if user clicks on the black background
    window.onclick = (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };

    // Initialize UI
    updateRecentUI();
});
