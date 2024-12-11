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
                li.textContent = file.name;
                li.addEventListener('click', () => playMusic(musicFiles.indexOf(file)));
                searchResults.appendChild(li);
            });
        }
