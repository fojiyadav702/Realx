// ==================================
// Video Data (Yahan aap apni details aur links daalenge)
// ==================================
const videos = [
    {
        id: 1,
        title: "Cinematic Travel Vlog: The Ultimate Journey",
        thumbnail: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=500&q=60",
        videoUrl: "", // <-- Apna video link yahan daalein
        duration: "12:45",
        views: "1.2K Views",
        uploaded: "today"
    },
    {
        id: 2,
        title: "Future of EV Motors & Global Market",
        thumbnail: "https://images.unsplash.com/photo-1593941707882-a5bba14938cb?auto=format&fit=crop&w=500&q=60",
        videoUrl: "", // <-- Apna video link yahan daalein
        duration: "08:30",
        views: "3.5K Views",
        uploaded: "2 days ago"
    },
    {
        id: 3,
        title: "Mastering AI Video Production Prompts",
        thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=500&q=60",
        videoUrl: "", // <-- Apna video link yahan daalein
        duration: "15:20",
        views: "850 Views",
        uploaded: "1 week ago"
    }
    // Aap aage id: 4, 5 karke aur bhi videos add kar sakte hain
];

// ==================================
// 1. Sidebar (Menu) Open/Close Logic
// ==================================
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

// ==================================
// 2. Home Page Logic (Video Grid & Search)
// ==================================
const videoGrid = document.getElementById('video-grid');
const searchInput = document.getElementById('search-input');

function loadVideos(videoList) {
    if (!videoGrid) return; // Agar grid nahi hai (matlab hum video.html par hain), toh aage mat badho
    
    videoGrid.innerHTML = ''; // Purana content saaf karo
    
    videoList.forEach(video => {
        const card = document.createElement('div');
        card.className = 'video-card';
        
        // Card par click karne se video.html par jayega
        card.onclick = () => {
            window.location.href = `video.html?id=${video.id}`;
        };

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

// Search Box ka system
if (searchInput && videoGrid) {
    searchInput.addEventListener('input', (e) => {
        const keyword = e.target.value.toLowerCase();
        // Title ke hisaab se videos filter karo
        const filteredVideos = videos.filter(v => v.title.toLowerCase().includes(keyword));
        loadVideos(filteredVideos);
    });
}

// Shuru mein saari videos load karo
if (videoGrid) {
    loadVideos(videos);
}

// ==================================
// 3. Video Player Page Logic (video.html)
// ==================================
const urlParams = new URLSearchParams(window.location.search);
const videoId = urlParams.get('id');

if (videoId) {
    const currentVideo = videos.find(v => v.id == videoId);
    
    if (currentVideo) {
        // Player mein video aur details set karo
        const mainPlayer = document.getElementById('main-player');
        if(mainPlayer) mainPlayer.src = currentVideo.videoUrl;
        
        const titleElement = document.getElementById('video-title');
        if(titleElement) titleElement.innerText = currentVideo.title;
        
        const statsElement = document.getElementById('video-stats');
        if(statsElement) statsElement.innerText = `${currentVideo.views} • Uploaded ${currentVideo.uploaded}`;
    }

    // Niche ki YouTube style video list (Up Next)
    const recommendList = document.getElementById('recommendations-list');
    if (recommendList) {
        // Jo video chal rahi hai usko list se hata do
        const otherVideos = videos.filter(v => v.id != videoId);
        
        otherVideos.forEach(video => {
            const rCard = document.createElement('div');
            rCard.className = 'recommend-card';
            
            // List wali video par click karne se us par jao
            rCard.onclick = () => {
                window.location.href = `video.html?id=${video.id}`;
            };

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
