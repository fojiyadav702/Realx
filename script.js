// 1. Data Base
const videos = [
    {
        id: 1,
        title: "My First Video (Google Drive Link)",
        thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=500&q=60",
        videoUrl: "https://drive.google.com/uc?export=download&id=1e8Y2Cwky3FIoOsPPFcSkmp1Wjg7Bokrd",
        duration: "10:05",
        views: "1.2K Views",
        uploaded: "Just now"
    },
    {
        id: 2,
        title: "Future of EV Motors & Global Market",
        thumbnail: "https://images.unsplash.com/photo-1593941707882-a5bba14938cb?auto=format&fit=crop&w=500&q=60",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        duration: "08:30",
        views: "3.5K Views",
        uploaded: "2 days ago"
    },
    {
        id: 3,
        title: "Mastering AI Video Production Prompts",
        thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=500&q=60",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        duration: "15:20",
        views: "850 Views",
        uploaded: "1 week ago"
    },
    {
        id: 4,
        title: "Cinematic Travel Vlog: The Ultimate Journey",
        thumbnail: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=500&q=60",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        duration: "12:45",
        views: "2.1K Views",
        uploaded: "2 weeks ago"
    }
];

// 2. Sidebar Open/Close Logic
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', () => {
        sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0px';
    });
}

// 3. Home Page Video Load Logic
const videoGrid = document.getElementById('video-grid');
function loadVideos(videoList) {
    if (!videoGrid) return;
    videoGrid.innerHTML = '';
    videoList.forEach(video => {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.onclick = () => { window.location.href = `video.html?id=${video.id}`; };
        card.innerHTML = `
            <div class="thumbnail">
                <img src="${video.thumbnail}" alt="Thumbnail">
                <span class="duration">${video.duration}</span>
            </div>
            <div class="video-info">
                <h3>${video.title}</h3>
                <p>${video.views} • ${video.uploaded}</p>
            </div>
        `;
        videoGrid.appendChild(card);
    });
}

// Search Feature
const searchInput = document.getElementById('search-input');
if (searchInput && videoGrid) {
    searchInput.addEventListener('input', (e) => {
        const keyword = e.target.value.toLowerCase();
        const filtered = videos.filter(v => v.title.toLowerCase().includes(keyword));
        loadVideos(filtered);
    });
}

// Initial Load on Home Page
if (videoGrid) loadVideos(videos);

// 4. Video Player Page Logic
const urlParams = new URLSearchParams(window.location.search);
const videoId = urlParams.get('id');

if (videoId) {
    const currentVideo = videos.find(v => v.id == videoId);
    if (currentVideo) {
        const mainPlayer = document.getElementById('main-player');
        if (mainPlayer) mainPlayer.src = currentVideo.videoUrl;
        
        const titleElement = document.getElementById('video-title');
        if (titleElement) titleElement.innerText = currentVideo.title;
        
        const statsElement = document.getElementById('video-stats');
        if (statsElement) statsElement.innerText = `${currentVideo.views} • Uploaded ${currentVideo.uploaded}`;
    }

    const recommendList = document.getElementById('recommendations-list');
    if (recommendList) {
        const otherVideos = videos.filter(v => v.id != videoId);
        otherVideos.forEach(video => {
            const rCard = document.createElement('div');
            rCard.className = 'recommend-card';
            rCard.onclick = () => { window.location.href = `video.html?id=${video.id}`; };
            rCard.innerHTML = `
                <img src="${video.thumbnail}" alt="Thumbnail">
                <div class="r-info">
                    <h4>${video.title}</h4>
                    <p>${video.views} • ${video.uploaded}</p>
                </div>
            `;
            recommendList.appendChild(rCard);
        });
    }
}
