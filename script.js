// Aapki videos ka data (Aapka Drive link laga diya gaya hai)
const videos = [
    {
        id: 1,
        title: "My First Video",
        thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=500&q=60",
        // Aapke Google drive link ko direct play hone wale format me convert kiya hai:
        videoUrl: "https://drive.google.com/uc?export=download&id=1e8Y2Cwky3FIoOsPPFcSkmp1Wjg7Bokrd",
        views: "100 Views",
        uploaded: "Just now"
    }
];

// Sidebar Open/Close karne ka system
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

// Home page par video grid load karne ka system
const videoGrid = document.getElementById('video-grid');

function loadVideos(videoList) {
    if (!videoGrid) return; 
    
    videoGrid.innerHTML = ''; 
    
    videoList.forEach(video => {
        const card = document.createElement('div');
        card.className = 'video-card';
        
        // Is par click karne se naye page (video.html) par jayega
        card.onclick = () => {
            window.location.href = `video.html?id=${video.id}`;
        };

        card.innerHTML = `
            <div class="thumbnail">
                <img src="${video.thumbnail}" alt="Thumbnail">
            </div>
            <div class="video-info">
                <h3>${video.title}</h3>
                <p>${video.views} • ${video.uploaded}</p>
            </div>
        `;
        videoGrid.appendChild(card);
    });
}

// Data load karo
if (videoGrid) {
    loadVideos(videos);
}
