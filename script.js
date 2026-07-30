// 1. Sidebar Menu Button ka Code
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

// 2. Videos ka Data
const videos = [
    {
        id: 1,
        title: "My First Video (Drive Link)",
        thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=500&q=60",
        videoUrl: "https://drive.google.com/uc?export=download&id=1e8Y2Cwky3FIoOsPPFcSkmp1Wjg7Bokrd",
        views: "100 Views",
        uploaded: "Just now"
    },
    {
        id: 2,
        title: "EV Motors Update",
        thumbnail: "https://images.unsplash.com/photo-1593941707882-a5bba14938cb?auto=format&fit=crop&w=500&q=60",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        views: "3.5K Views",
        uploaded: "2 days ago"
    }
];

// 3. Videos ko Grid mein lagane ka Code
const videoGrid = document.getElementById('video-grid');

if (videoGrid) {
    videos.forEach(video => {
        const card = document.createElement('div');
        card.className = 'video-card';
        
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
