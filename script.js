/* ONYX—ADIRE | Master Script
   Features: 47-Item Grid, Hero Slider (10, 18, 39), & Randomizer Logic
*/

document.addEventListener('DOMContentLoaded', () => {

    // 1. SIDE NAVIGATION (With Internal X)
    const sideMenu = document.getElementById('side-menu');
    const openBtn = document.getElementById('nav-open');
    const closeBtn = document.getElementById('nav-close');

    if (openBtn) {
        openBtn.onclick = () => sideMenu.classList.add('active');
    }

    if (closeBtn) {
        closeBtn.onclick = () => sideMenu.classList.remove('active');
    }

    // 2. SUPER HERO SLIDER (Specifically for 10, 18, 39)
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function rotateHero() {
        if (slides.length === 0) return;
        
        // Reset all to invisible
        slides.forEach(s => s.style.opacity = 0);
        
        // Show current
        slides[currentSlide].style.opacity = 1;
        
        // Increment
        currentSlide = (currentSlide + 1) % slides.length;
    }

    if (slides.length > 0) {
        rotateHero(); // Run immediately
        setInterval(rotateHero, 4000); // Rotate every 4 seconds
    }

    // 3. LIGHTBOX & RANDOMIZER (All 47 Items)
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.querySelector('.lightbox-img');
    const lbCap = document.querySelector('.lightbox-caption');
    const sugRow = document.getElementById('suggestion-row');

    // Master Array for 47 Items
    const allProducts = Array.from({ length: 47 }, (_, i) => ({
        src: `Onyx-Adire${i + 1}.jpg`,
        name: `Onyx ${i + 1}`
    }));

    window.openLightbox = (src, name) => {
        if (!lightbox) return;

        lightbox.style.display = 'flex';
        lbImg.src = src;
        lbCap.innerText = name;
        document.body.style.overflow = 'hidden'; // Stop background scrolling

        generateRandomSuggestions(src);
        updateHistory(src, name);
    };

    // Picks 4 random items from the 46 remaining
    function generateRandomSuggestions(currentSrc) {
        if (!sugRow) return;
        sugRow.innerHTML = '';

        // Filter out the one we are looking at
        const pool = allProducts.filter(p => !currentSrc.includes(p.src));
        
        // Shuffle and Slice
        const shuffled = pool.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 4);

        selected.forEach(item => {
            const div = document.createElement('div');
            div.className = 'suggestion-item';
            div.innerHTML = `
                <img src="${item.src}" alt="${item.name}">
                <p>${item.name}</p>
            `;
            // Internal click to update lightbox without closing it
            div.onclick = (e) => {
                e.stopPropagation();
                openLightbox(item.src, item.name);
                lightbox.scrollTo({ top: 0, behavior: 'smooth' });
            };
            sugRow.appendChild(div);
        });
    }

    // 4. RECENTLY VIEWED MEMORY
    let history = JSON.parse(localStorage.getItem('onyxHistory')) || [];

    function updateHistory(src, name) {
        const exists = history.find(h => h.src === src);
        if (!exists) {
            history.unshift({ src, name });
            if (history.length > 8) history.pop();
            localStorage.setItem('onyxHistory', JSON.stringify(history));
            renderHistoryUI();
        }
    }

    function renderHistoryUI() {
        const container = document.getElementById('recent-view-container');
        const section = document.getElementById('recent-section');
        if (!container || history.length === 0) return;

        section.style.display = 'block';
        container.innerHTML = '';
        history.forEach(item => {
            container.innerHTML += `
                <div class="grid-item">
                    <img src="${item.src}" class="clickable-img" onclick="openLightbox('${item.src}', '${item.name}')">
                    <div class="product-info"><h3>${item.name}</h3></div>
                </div>`;
        });
    }

    // 5. GLOBAL EVENT LISTENERS
    
    // Close Lightbox
    const closeLb = document.querySelector('.close-lightbox');
    if (closeLb) {
        closeLb.onclick = () => {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        };
    }

    // Close on dark background click
    window.onclick = (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };

    // Binding for the main grid items (uses Event Delegation)
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('clickable-img')) {
            const name = e.target.getAttribute('data-name') || "Onyx Item";
            openLightbox(e.target.src, name);
        }
    });

    renderHistoryUI();
});
