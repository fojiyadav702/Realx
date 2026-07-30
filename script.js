
/* =======================================
   1. ADMIN AREA (Teri 19 Videos)
   ======================================= */
const allVideos = [
    { id: 1, title: "RealX leak 1", url: "https://streamtape.com/e/OXvQy4ZLr3iZqme/70206.mp4", views: 2450 },
    { id: 2, title: "RealX leak 2", url: "https://streamtape.com/e/VWpKOD7D39UKWr9/70234.mp4", views: 1890 },
    { id: 3, title: "RealX leak 3", url: "https://streamtape.com/e/KQgW9YK3dgS0kvW/70228.mp4", views: 3200 },
    { id: 4, title: "RealX leak 4", url: "https://streamtape.com/e/OWG66YM6ggHZJr0/70225.mp4", views: 4120 },
    { id: 5, title: "RealX leak 5", url: "https://streamtape.com/e/eoqoy7zvMLtwYk/70222.mp4", views: 1560 },
    { id: 6, title: "RealX leak 6", url: "https://streamtape.com/e/GJVwLAdmrOf132Z/70237_%281%29.mp4", views: 2800 },
    { id: 7, title: "RealX leak 7", url: "https://streamtape.com/e/DGJVYzPgRLUkjeW/70232.mp4", views: 1950 },
    { id: 8, title: "RealX leak 8", url: "https://streamtape.com/e/MX9gOj2JP2CmgQd/70229.mp4", views: 3400 },
    { id: 9, title: "RealX leak 9", url: "https://streamtape.com/e/86mvWg0XVjH841/70211.mp4", views: 2100 },
    { id: 10, title: "RealX leak 10", url: "https://streamtape.com/e/9P4My7ByQRua04V/70702.mp4", views: 4500 },
    { id: 11, title: "RealX leak 11", url: "https://streamtape.com/e/3J1a6A2jQZId7B2/70237.mp4", views: 1250 },
    { id: 12, title: "RealX leak 12", url: "https://streamtape.com/e/79e7zXAVVXCAzGK/70700.mp4", views: 3100 },
    { id: 13, title: "RealX leak 13", url: "https://streamtape.com/e/vBbk6O68zWtPdo/70690.mp4", views: 2750 },
    { id: 14, title: "RealX leak 14", url: "https://streamtape.com/e/8v8P8vejVxcoxwz/70689.mp4", views: 1840 },
    { id: 15, title: "RealX leak 15", url: "https://streamtape.com/e/ZJdQpjm7dPcqW32/70683_%281%29.mp4", views: 3900 },
    { id: 16, title: "RealX leak 16", url: "https://streamtape.com/e/OoXpPWD3gzSZqmK/70202.mp4", views: 2200 },
    { id: 17, title: "RealX leak 17", url: "https://streamtape.com/e/P7Rm1YmwqgC0pZR/70683.mp4", views: 4600 },
    { id: 18, title: "RealX leak 18", url: "https://streamtape.com/e/rlYXam2Okysbq0w/70196.mp4", views: 1350 },
    { id: 19, title: "RealX leak 19", url: "https://streamtape.com/e/jr1M2qGw0GFzZD7/70234_%281%29.mp4", views: 2980 }
];

/* =======================================
   2. SEARCH LOGIC
   ======================================= */
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');

if(searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
        searchInput.classList.toggle('hidden');
        if(!searchInput.classList.contains('hidden')) {
            searchInput.focus();
        }
    });

    searchInput.addEventListener('input', (e) => {
        const keyword = e.target.value.toLowerCase();
        const filtered = allVideos.filter(v => v.title.toLowerCase().includes(keyword));
        renderGrid(filtered, document.getElementById('video-grid'));
        document.getElementById('pagination').innerHTML = ''; 
    });
}

/* =======================================
   3. HOME PAGE (Transparent Sheesha Hack)
   ======================================= */
const itemsPerPage = 12; // Ek page par sirf 12 video taaki site fast chale
let currentPage = 1;

function renderHome() {
    const grid = document.getElementById('video-grid');
    const pagination = document.getElementById('pagination');
    if(!grid || !pagination) return;

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedVideos = allVideos.slice(start, end);

    renderGrid(paginatedVideos, grid);
    renderPagination(allVideos.length, pagination);
}

function renderPagination(totalItems, container) {
    container.innerHTML = '';
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    if(totalPages <= 1) return;

    if(currentPage > 1) {
        let btn = document.createElement('button');
        btn.className = 'page-btn';
        btn.innerText = 'Prev';
        btn.onclick = () => { currentPage--; renderHome(); window.scrollTo(0,0); };
        container.appendChild(btn);
    }

    for(let i = 1; i <= Math.min(totalPages, 8); i++) {
        let btn = document.createElement('button');
        btn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
        btn.innerText = i;
        btn.onclick = () => { currentPage = i; renderHome(); window.scrollTo(0,0); };
        container.appendChild(btn);
    }

    if(currentPage < totalPages) {
        let btn = document.createElement('button');
        btn.className = 'page-btn';
        btn.innerText = 'Next';
        btn.onclick = () => { currentPage++; renderHome(); window.scrollTo(0,0); };
        container.appendChild(btn);
    }
}

function renderGrid(videos, container) {
    container.innerHTML = '';
    videos.forEach(video => {
        let savedViews = localStorage.getItem(`views_${video.id}`) || video.views;

        const card = document.createElement('a'); 
        card.href = `video.html?id=${video.id}`; 
        card.className = 'video-card';
        card.style.textDecoration = 'none'; 
        card.style.display = 'block';
        card.style.position = 'relative'; 
        
        card.innerHTML = `
            <div style="position: relative; width: 100%; height: 180px; overflow: hidden; border-radius: 8px 8px 0 0; background: #000;">
                <!-- Asli Streamtape Player (Thumbnail ke liye) -->
                <iframe src="${video.url}" width="100%" height="100%" frameborder="0" scrolling="no" style="pointer-events: none;"></iframe>
                <!-- Sheesha (Andar page par bhejney ke liye) -->
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: transparent; z-index: 10;"></div>
            </div>
            
            <div class="video-info" style="padding: 15px; background: #1a1a1a;">
                <h3 style="color: #fff; margin-bottom: 5px; font-size: 16px;">${video.title}</h3>
                <p style="color: #888; font-size: 14px;">${savedViews} Views</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// Home page start karna
renderHome();

/* =======================================
   4. INNER PAGE (Main Video Player)
   ======================================= */
const urlParams = new URLSearchParams(window.location.search);
const videoId = urlParams.get('id');

if (videoId) {
    const currentVideo = allVideos.find(v => v.id == videoId);
    
    if (currentVideo) {
        let views = parseInt(localStorage.getItem(`views_${currentVideo.id}`) || currentVideo.views);
        views += 1; 
        localStorage.setItem(`views_${currentVideo.id}`, views); 

        const playerElement = document.getElementById('main-player');
        if(playerElement) {
            playerElement.src = currentVideo.url;
        }
        
        const titleElement = document.getElementById('video-title');
        if(titleElement) {
            titleElement.innerText = currentVideo.title;
        }

        const statsElement = document.getElementById('video-stats');
        if(statsElement) {
            statsElement.innerText = `${views} Views`;
        }

        const shareBtn = document.getElementById('share-btn');
        if(shareBtn) {
            shareBtn.onclick = () => {
                navigator.clipboard.writeText(window.location.href);
                alert("Link Copied!");
            };
        }

        const relatedGrid = document.getElementById('related-grid');
        if(relatedGrid) {
            // Baaki videos suggestion mein dikhane ke liye
            const otherVideos = allVideos.filter(v => v.id != videoId).slice(0, 12);
            renderGrid(otherVideos, relatedGrid);
        }
    }
}
