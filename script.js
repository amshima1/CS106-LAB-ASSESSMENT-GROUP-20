/* ONYX—ADIRE | Master Script
   Features: Hero Slider (10, 18, 39), Randomizer (1-47), & Nav Control
*/

document.addEventListener('DOMContentLoaded', () => {

    // 1. NAVIGATION DRAWER
    const sideMenu = document.getElementById('side-menu');
    const openBtn = document.getElementById('nav-open');
    const closeBtn = document.getElementById('nav-close');

    if (openBtn) openBtn.onclick = () => sideMenu.classList.add('active');
    if (closeBtn) closeBtn.onclick = () => sideMenu.classList.remove('active');

    // 2. HERO SLIDER LOGIC (Specifically for 10, 18, 39)
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function nextSlide() {
        if (slides.length === 0) return;
        slides[currentSlide].style.opacity = 0;
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.opacity = 1;
    }

    if (slides.length > 0) {
        // Set first image active
        slides[0].style.opacity = 1;
        setInterval(nextSlide, 4000); // 4 seconds per slide
    }

    // 3. LIGHTBOX & RANDOMIZER (Full 47 Items)
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const suggestionRow = document.getElementById('suggestion-row');

    // Create the master list of 47 products
    const allProducts = Array.from({ length: 47 }, (_, i) => ({
        src: `Onyx-Adire${i + 1}.jpg`,
        name: `Onyx ${i + 1}`
    }));

    // Function to open the Lightbox
    window.openLightbox = (src, name) => {
        if (!lightbox) return;
        
        lightbox.style.display = 'flex';
        lightboxImg.src = src;
        lightboxCaption.innerText = name;
        document.body.style.overflow = 'hidden'; // Prevent background scrolling

        // Trigger the 4-item randomizer
        generateRandomSuggestions(src);
        
        // Save to Recently Viewed
        saveToRecent(src, name);
    };

    // The Randomizer: Picks 4 from the 46 remaining items
    function generateRandomSuggestions(currentSrc) {
        if (!suggestionRow) return;
        suggestionRow.innerHTML = '';

        // Remove the current image from the pool
        const pool = allProducts.filter(p => !currentSrc.includes(p.src));
        
        // Shuffle pool and take 4
        const shuffled = pool.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 4);

        selected.forEach(item => {
            const div = document.createElement('div');
            div.className = 'suggestion-item';
            div.innerHTML = `
                <img src="${item.src}" alt="${item.name}">
                <p>${item.name}</p>
            `;
            // Click suggestion to update lightbox
            div.onclick = (e) => {
                e.stopPropagation();
                openLightbox(item.src, item.name);
            };
            suggestionRow.appendChild(div);
        });
    }

    // 4. RECENTLY VIEWED MEMORY
    let recentlyViewed = JSON.parse(localStorage.getItem('onyxRecent')) || [];

    function saveToRecent(src, name) {
        const exists = recentlyViewed.find(i => i.src === src);
        if (!exists) {
            recentlyViewed.unshift({ src, name });
            if (recentlyViewed.length > 6) recentlyViewed.pop();
            localStorage.setItem('onyxRecent', JSON.stringify(recentlyViewed));
            updateRecentUI();
        }
    }

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
                    <div class="product-info"><h3>${item.name}</h3></div>
                </div>`;
        });
    }

    // 5. EVENT BINDING FOR MAIN GRID
    // We use a slight delay to ensure the HTML-generated grid is ready
    setTimeout(() => {
        document.querySelectorAll('.clickable-img').forEach(img => {
            img.onclick = () => {
                const parent = img.closest('.grid-item');
                const title = parent ? parent.querySelector('h3').innerText : "Onyx Item";
                openLightbox(img.src, title);
            };
        });
    }, 100);

    // Close Lightbox
    const closeLightbox = document.querySelector('.close-lightbox');
    if (closeLightbox) {
        closeLightbox.onclick = () => {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        };
    }

    // Close on background click
    window.onclick = (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };

    updateRecentUI();
});
