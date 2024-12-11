const navHome = document.getElementById("navHome");
        const navSearch = document.getElementById("navSearch");
        const navPlayer = document.getElementById("navPlayer");

        navHome.addEventListener('click', () => {
            musicContainer.style.display = "block";
            playerPopup.style.display = "none";
            searchContainer.style.display = "none";
            navHome.classList.add('active');
            navSearch.classList.remove('active');
            navPlayer.classList.remove('active');
        });

        navSearch.addEventListener('click', () => {
            musicContainer.style.display = "none";
            playerPopup.style.display = "none";
            searchContainer.style.display = "block";
            navHome.classList.remove('active');
            navSearch.classList.add('active');
            navPlayer.classList.remove('active');
        });

        navPlayer.addEventListener('click', () => {
            musicContainer.style.display = "none";
            searchContainer.style.display = "none";
            playerPopup.style.display = "block";
            navHome.classList.remove('active');
            navSearch.classList.remove('active');
            navPlayer.classList.add('active');
        });
