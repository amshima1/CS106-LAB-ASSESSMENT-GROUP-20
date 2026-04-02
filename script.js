/* ONYX—ADIRE | Master Script
   Features: Fixed Nav Logic, Hero Slider (10, 18, 39), & 47-Item Randomizer
*/

document.addEventListener('DOMContentLoaded', () => {

    // 1. SIDE NAVIGATION (Adjusted for Fixed Announcement Bar)
    const sideMenu = document.getElementById('side-menu');
    const openBtn = document.getElementById('nav-open');
    const closeBtn = document.getElementById('nav-close');
    const BAR_HEIGHT = 35; // Matches the CSS --bar-height

    if (openBtn && sideMenu) {
        openBtn.onclick = () => {
            sideMenu.style.top = `${BAR_HEIGHT}px`;
            sideMenu.style.height = `calc(100vh - ${BAR_HEIGHT}px)`;
            sideMenu.classList.add('active');
        };
    }

    if (closeBtn && sideMenu) {
        closeBtn.onclick = () => {
            sideMenu.classList.remove('active');
        };
    }

    // 2. SUPER HERO SLIDER (Specifically for 10, 18, 39)
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function rotateHero() {
        if (slides.length === 0) return;
        slides.forEach(s => s.style.opacity = 0);
        slides[currentSlide].style.opacity = 1;
        currentSlide = (currentSlide + 1) % slides.length;
    }

    if (slides.length > 0) {
        rotateHero(); 
        setInterval(rotateHero, 4000); 
    }

    // 3. LIGHTBOX & 47-ITEM RANDOMIZER
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.querySelector('.lightbox-img');
    const lbCap = document.querySelector('.lightbox-caption');
    const sugRow = document.getElementById('suggestion-row');

    // Generate Master Data for all 47 Items
    const allProducts = Array.from({ length: 47 }, (_, i) => ({
        src: `Onyx-Adire${i + 1}.jpg`,
        name: `Onyx ${i + 1}`
    }));

    window.openLightbox = (src, name) => {
        if (!lightbox) return;

        lightbox.style.display = 'flex';
        lbImg.src = src;
        lbCap.innerText = name;
        document.body.style.overflow = 'hidden'; 

        generateRandomSuggestions(src);
        updateHistory(src, name);
    };

    function generateRandomSuggestions(currentSrc) {
        if (!sugRow) return;
        sugRow.innerHTML = '';

        // Filter out current image and pick 4 random ones
        const pool = allProducts.filter(p => !currentSrc.includes(p.src));
        const shuffled = pool.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 4);

        selected.forEach(item => {
            const div = document.createElement('div');
            div.className = 'suggestion-item';
            div.innerHTML = `
                <img src="${item.src}" alt="${item.name}">
                <p>${item.name}</p>
            `;
            div.onclick = (e) => {
                e.stopPropagation();
                openLightbox(item.src, item.name);
                lightbox.scrollTo({ top: 0, behavior: 'smooth' });
            };
            sugRow.appendChild(div);
        });
    }

    // 4. RECENTLY VIEWED (LocalStorage Memory)
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
    const closeLb = document.querySelector('.close-lightbox');
    if (closeLb) {
        closeLb.onclick = () => {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        };
    }

    window.onclick = (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };

    // Binding for the dynamically generated grid
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('clickable-img')) {
            const name = e.target.getAttribute('data-name') || "Onyx Item";
            openLightbox(e.target.src, name);
        }
    });

    renderHistoryUI();
});
