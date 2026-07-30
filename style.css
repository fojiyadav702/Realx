/* ==================================
   Basic Settings & Dark Theme
   ================================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #0f0f0f; /* YouTube jaisa dark background */
    color: white;
    font-family: Arial, sans-serif;
    overflow-x: hidden;
}

/* ==================================
   Navbar (Upar ki patti)
   ================================== */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #0f0f0f;
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    z-index: 1000;
}

.left-nav {
    display: flex;
    align-items: center;
}

.search-bar {
    flex: 1;
    max-width: 600px;
    margin: 0 20px;
}

#search-input {
    width: 100%;
    padding: 10px 15px;
    border-radius: 20px;
    border: 1px solid #303030;
    background-color: #121212;
    color: white;
    font-size: 16px;
    outline: none;
}

#search-input:focus {
    border: 1px solid #1c62b9; /* Search karte waqt blue border */
}

/* ==================================
   Sidebar (Left Menu)
   ================================== */
.sidebar {
    height: 100%;
    width: 250px;
    position: fixed;
    z-index: 999;
    top: 60px; /* Navbar ke niche se shuru */
    left: -250px; /* Shuru mein chhupa hua rahega */
    background-color: #0f0f0f;
    overflow-x: hidden;
    transition: 0.3s; /* Smooth animation */
    padding-top: 20px;
}

.sidebar a {
    padding: 15px 25px;
    text-decoration: none;
    font-size: 18px;
    color: white;
    display: block;
    transition: 0.2s;
}

.sidebar a:hover {
    background-color: #272727;
    border-radius: 10px;
    margin: 0 10px;
}

/* ==================================
   Main Content & Video Grid
   ================================== */
.main-content {
    margin-top: 80px; /* Navbar ke niche jagah */
    padding: 20px;
    transition: margin-left .3s;
}

.video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
}

.video-card {
    cursor: pointer;
    transition: transform 0.2s;
}

.video-card:hover {
    transform: scale(1.02);
}

.thumbnail {
    position: relative;
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
}

.thumbnail img {
    width: 100%;
    height: 170px;
    object-fit: cover;
    display: block;
}

.duration {
    position: absolute;
    bottom: 8px;
    right: 8px;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 3px 6px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: bold;
}

.video-info {
    margin-top: 10px;
}

.video-info h3 {
    font-size: 16px;
    margin-bottom: 5px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.video-info p {
    color: #aaaaaa;
    font-size: 14px;
}

/* ==================================
   Video Player Page (video.html ke liye)
   ================================== */
.player-container {
    margin-top: 70px;
    padding: 20px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}

.video-section video {
    width: 100%;
    border-radius: 12px;
    background: black;
    max-height: 500px;
    outline: none;
}

.video-title-main {
    margin-top: 15px;
    font-size: 22px;
}

.video-stats-main {
    color: #aaaaaa;
    font-size: 14px;
    margin-top: 5px;
    margin-bottom: 20px;
}

.recommendations-section h3 {
    margin-bottom: 15px;
}

.r-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.recommend-card {
    display: flex;
    gap: 15px;
    cursor: pointer;
}

.recommend-card img {
    width: 160px;
    height: 90px;
    border-radius: 8px;
    object-fit: cover;
}

.r-info {
    display: flex;
    flex-direction: column;
}

.r-info h4 {
    font-size: 14px;
    margin-bottom: 5px;
}

.r-info p {
    color: #aaaaaa;
    font-size: 12px;
}

/* Mobile Screen Adjustments */
@media (max-width: 600px) {
    .recommend-card img {
        width: 120px;
        height: 70px;
    }
}
