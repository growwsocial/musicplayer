const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const results = musicFiles.filter(file => file.name.toLowerCase().includes(query));
    displaySearchResults(results);
});

function displaySearchResults(results) {
    searchResults.innerHTML = "";
    results.forEach(file => {
        const li = document.createElement('li');
        // Remove the ".mp3" extension from the file name
        const trackName = file.name.replace('.mp3', '');
        li.textContent = trackName;
        li.addEventListener('click', () => playMusic(musicFiles.indexOf(file)));
        searchResults.appendChild(li);
    });
}
