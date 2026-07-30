/* =======================================
   1. ADMIN AREA (Yahan Apni Videos Daal)
   ======================================= */
// Ye teri main list hai. Jaise jaise nai video daalni ho, yahan add karte rehna.
const baseVideos = [
    {
        id: 1,
        title: "My First Private Video",
        thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=500&q=60", 
        videoUrl: "https://streamtape.com/e/dKeYKjo4Pgi0VW/",
        views: 1500
    },
    {
        id: 2,
        title: "Another Exclusive Content",
        thumbnail: "https://images.unsplash.com/photo-1593941707882-a5bba14938cb?auto=format&fit=crop&w=500&q=60", 
        videoUrl: "https://streamtape.com/e/dKeYKjo4Pgi0VW/",
        views: 320
    }
];

// Bhai, grid bhara-bhara dikhe, isliye maine upar wali 2 videos ko copy karke total 100 videos ka data bana diya hai (Testing ke liye). 
// Jab tere paas sach mein 50+ videos ho jayein, toh is 'for' loop ko delete kar dena.
const allVideos = [];
for(let i=0; i<100; i++) {
    let clone = { ...baseVideos[i % baseVideos.length] };
    clone.id = i + 1;
    clone.title = clone.title + " Part " + (i + 1);
    allVideos.push(clone);
}


/* =======================================
   2. SEARCH LOGIC (Icon Dabane pe Khulega)
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

    // Type karte hi search chalega
    searchInput.addEventListener('input', (e) => {
        const keyword = e.target.value.toLowerCase();
        const filtered = allVideos.filter(v => v.title.toLowerCase().includes(keyword));
        renderGrid(filtered, document.getElementById('video-grid'));
        document.getElementById('pagination').innerHTML = ''; // Search ke time pagination hide
    });
}


/* =======================================
   3. HOME PAGE (Pagination & 50 Videos)
   ======================================= */
const itemsPerPage = 50; 
let currentPage = 1;

function renderHome() {
    const grid = document.getElementById('video-grid');
    const pagination = document.getElementById('pagination');
    if(!grid || !pagination) return;

    // Kahan se kahan tak videos dikhani hain
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

    // Prev Button
    if(currentPage > 1) {
        let btn = document.createElement('button');
        btn.className = 'page-btn';
        btn.innerText = 'Prev';
        btn.onclick = () => { currentPage--; renderHome(); window.scrollTo(0,0); };
        container.appendChild(btn);
    }

    // Numbers (1 se 8 tak ya jitne hain)
    let maxPages = Math.min(totalPages, 8); 
    for(let i = 1; i <= maxPages; i++) {
        let btn = document.createElement('button');
        btn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
        btn.innerText = i;
        btn.onclick = () => { currentPage = i; renderHome(); window.scrollTo(0,0); };
        container.appendChild(btn);
    }

    // Next Button
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
        // Smart Local Views: Agar banda video dekhta hai, toh memory mein view +1 ho jata hai
        let savedViews = localStorage.getItem(`views_${video.id}`) || video.views;

        const card = document.createElement('div');
        card.className = 'video-card';
        card.onclick = () => { window.location.href = `video.html?id=${video.id}`; };
        card.innerHTML = `
            <div class="thumbnail"><img src="${video.thumbnail}" alt="Thumb"></div>
            <div class="video-info">
                <h3>${video.title}</h3>
                <p>${savedViews} Views</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// Start Home Page
renderHome();


/* =======================================
   4. INNER PAGE (Player, Views, Share)
   ======================================= */
const urlParams = new URLSearchParams(window.location.search);
const videoId = urlParams.get('id');

if (videoId) {
    const currentVideo = allVideos.find(v => v.id == videoId);
    
    if (currentVideo) {
        // Views badhane ka logic (+1 Realtime Feel)
        let views = parseInt(localStorage.getItem(`views_${currentVideo.id}`) || currentVideo.views);
        views += 1; 
        localStorage.setItem(`views_${currentVideo.id}`, views); // Memory mein save

        // Player Set karna
        document.getElementById('main-player').src = currentVideo.videoUrl;
        document.getElementById('video-title').innerText = currentVideo.title;
        document.getElementById('video-stats').innerText = `${views} Views`;

        // Share Button Logic
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

        // 16 Latest Videos Dikhana
        const relatedGrid = document.getElementById('related-grid');
        if(relatedGrid) {
            // Is video ko chhod kar baaki 16 nikal lo
            const otherVideos = allVideos.filter(v => v.id != videoId).slice(0, 16);
            renderGrid(otherVideos, relatedGrid);
        }
    }
}
