const videoGrid = document.getElementById('videoGrid');
const input = document.getElementById('searchInput');
const btn = document.getElementById('searchBtn');

// JSON se videos load karna
fetch('videos.json')
  .then(response => response.json())
  .then(videos => {
    
    videos.forEach(video => {
      const card = `
        <a class="card" href="video.html?id=${video.id}" data-title="${video.title}">
          <div class="thumb">
            <img src="${video.thumbnail}" alt="Thumbnail">
            <div class="duration">${video.duration}</div>
          </div>
          <div class="content">
            <div class="title">${video.title}</div>
            <div class="meta">${video.meta}</div>
          </div>
        </a>
      `;
      videoGrid.innerHTML += card;
    });

    // Search system chalu karna
    const cards = [...document.querySelectorAll('.card')];
    
    function doSearch() {
      const q = input.value.trim().toLowerCase();
      cards.forEach(card => {
        const title = (card.dataset.title || '').toLowerCase();
        card.classList.toggle('hidden', q && !title.includes(q));
      });
    }

    btn.addEventListener('click', doSearch);
    input.addEventListener('input', doSearch);
  })
  .catch(error => console.error('Error fetching videos:', error));
