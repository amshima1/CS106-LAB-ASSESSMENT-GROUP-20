document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('side-menu');
    const openBtn = document.getElementById('nav-open');
    const closeBtn = document.getElementById('nav-close');

    // Menu Controls
    if (openBtn) openBtn.onclick = () => menu.classList.add('active');
    if (closeBtn) closeBtn.onclick = () => menu.classList.remove('active');

    // Lightbox & History Logic
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    
    let recentlyViewed = JSON.parse(localStorage.getItem('onyxRecent')) || [];

    function updateRecentUI() {
        const container = document.getElementById('recent-view-container');
        const section = document.getElementById('recent-section');
        if (recentlyViewed.length === 0) return;
        
        section.style.display = 'block';
        container.innerHTML = '';
        recentlyViewed.forEach(item => {
            container.innerHTML += `
                <div class="grid-item">
                    <img src="${item.src}" class="clickable-img" onclick="openLightbox('${item.src}', '${item.name}')">
                    <div class="product-info"><h3 style="color:#cc0000">${item.name}</h3></div>
                </div>`;
        });
    }

    window.openLightbox = (src, name) => {
        lightbox.style.display = 'flex';
        lightboxImg.src = src;
        lightboxCaption.innerText = name;
        document.body.style.overflow = 'hidden';

        const exists = recentlyViewed.find(i => i.src === src);
        if (!exists) {
            recentlyViewed.unshift({ src, name });
            if (recentlyViewed.length > 5) recentlyViewed.pop();
            localStorage.setItem('onyxRecent', JSON.stringify(recentlyViewed));
            updateRecentUI();
        }
    };

    document.querySelectorAll('.clickable-img').forEach(img => {
        img.onclick = () => {
            const name = img.nextElementSibling.querySelector('h3').innerText;
            openLightbox(img.src, name);
        };
    });

    document.querySelector('.close-lightbox').onclick = () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    updateRecentUI();
});
