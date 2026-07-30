/* Sidebar ka Design */
.sidebar {
    height: 100%;
    width: 250px;
    position: fixed;
    z-index: 999;
    top: 60px; /* Header ke theek niche se shuru */
    left: -250px; /* Shuru mein chhupa rahega */
    background-color: #0f0f0f;
    overflow-x: hidden;
    transition: 0.3s; 
    padding-top: 20px;
    border-right: 1px solid #303030;
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

/* Main Content aur Video Grid ka Design */
.main-content {
    margin-top: 80px; /* Header ke liye jagah chhodi */
    padding: 20px;
    transition: margin-left .3s;
}

.video-grid {
    display: grid;
    /* 2/2 combination jaisa layout banane ke liye */
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
}

.video-card {
    cursor: pointer;
    transition: transform 0.2s;
}

.video-card:hover {
    transform: scale(1.02); /* Hover karne par thoda bada hoga */
}

.thumbnail {
    position: relative;
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
}

.thumbnail img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    display: block;
}

.video-info {
    margin-top: 10px;
    color: white;
}

.video-info h3 {
    font-size: 16px;
    margin-bottom: 5px;
}

.video-info p {
    color: #aaaaaa;
    font-size: 14px;
}
