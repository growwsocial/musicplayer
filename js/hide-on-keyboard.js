const navigationBar = document.getElementById("navigationBar");
    const notFoundMusic = document.getElementById("notFoundMusic");

    function handleKeyboardVisibility() {
      // Detect viewport height changes
      const initialHeight = window.innerHeight;

      window.addEventListener("resize", () => {
        const currentHeight = window.innerHeight;

        // If height reduces, keyboard is likely active
        if (currentHeight < initialHeight) {
          navigationBar.classList.add("hidden");
          notFoundMusic.classList.add("hidden");
        } else {
          // If height restores, keyboard is likely closed
          navigationBar.classList.remove("hidden");
          notFoundMusic.classList.remove("hidden");
        }
      });
    }

    // Call the function to initialize the listener
    handleKeyboardVisibility();
