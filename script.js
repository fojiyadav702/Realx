/* =======================================
   1. ADMIN AREA (Yahan Apni Videos Daal)
   ======================================= */
// Ab yahan sirf wahi box aayenge jo tu khud yahan likhega. Faltu ka ek bhi box nahi aayega!
const allVideos = [
    {
        id: 1,
        title: "My First Private Video",
        thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=500&q=60", 
        videoUrl: "https://streamtape.com/e/dKeYKjo4Pgi0VW/",
        views: 1500
    }
    // Agli video daalni ho toh yahan comma (,) lagakar add kar dena.
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
   3. HOME PAGE (Pagination & Grid)
   ======================================= */
const itemsPerPage = 50; 
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

    let maxPages = Math.min(totalPages, 8); 
    for(let i = 1; i <= maxPages; i++) {
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
        
        // 🔥 Thumbnail Jugaad: Agar photo fail hui, toh RealX likha aayega 🔥
        card.innerHTML = `
            <div class="thumbnail" style="position: relative;">
                <img src="${video.thumbnail}" alt="${video.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="fallback-thumb" style="display: none; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #1a1a1a; align-items: center; justify-content: center; color: #e50914; font-size: 24px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">RealX</div>
            </div>
            <div class="video-info">
                <h3>${video.title}</h3>
                <p>${savedViews} Views</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// Start
renderHome();


/* =======================================
   4. INNER PAGE (Player)
   ======================================= */
const urlParams = new URLSearchParams(window.location.search);
const videoId = urlParams.get('id');

if (videoId) {
    const currentVideo = allVideos.find(v => v.id == videoId);
    
    if (currentVideo) {
        let views = parseInt(localStorage.getItem(`views_${currentVideo.id}`) || currentVideo.views);
        views += 1; 
        localStorage.setItem(`views_${currentVideo.id}`, views); 

        document.getElementById('main-player').src = currentVideo.videoUrl;
        document.getElementById('video-title').innerText = currentVideo.title;
        document.getElementById('video-stats').innerText = `${views} Views`;

        const shareBtn = document.getElementById('share-btn');
        if(shareBtn) {
            shareBtn.onclick = () => {
                if(navigator.share) {
                    navigator.share({ title: currentVideo.title, url: window.location.href });
                } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Link Copied to Clipboard!");
                }
            };
        }

        const relatedGrid = document.getElementById('related-grid');
        if(relatedGrid) {
            const otherVideos = allVideos.filter(v => v.id != videoId).slice(0, 16);
            renderGrid(otherVideos, relatedGrid);
        }
    }
}
