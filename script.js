// 1. Aapka Asli Data (Google Drive Preview Link)
const videos = [
    {
        id: 1,
        title: "My First Original Video",
        thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=500&q=60", 
        // Yahan link ke aakhiri mein /preview laga diya hai
        videoUrl: "https://drive.google.com/file/d/1e8Y2Cwky3FIoOsPPFcSkmp1Wjg7Bokrd/preview", 
        views: "1 View",
        uploaded: "Just now"
    }
];

// 2. Sidebar Open/Close Code
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');

if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', () => {
        if (sidebar.style.left === '0px') {
            sidebar.style.left = '-250px';
        } else {
            sidebar.style.left = '0px';
        }
    });
}

// 3. Home Page Video Grid System
const videoGrid = document.getElementById('video-grid');

if (videoGrid) {
    videoGrid.innerHTML = ''; 
    videos.forEach(video => {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.onclick = () => { window.location.href = `video.html?id=${video.id}`; };

        card.innerHTML = `
            <div class="thumbnail"><img src="${video.thumbnail}" alt="Thumbnail"></div>
            <div class="video-info">
                <h3>${video.title}</h3>
                <p>${video.views} • ${video.uploaded}</p>
            </div>
        `;
        videoGrid.appendChild(card);
    });
}

// 4. Video Player System (Andar ka page)
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
}
