// Detect system theme on load
      if (
        localStorage.theme === "dark" ||
        (!localStorage.theme &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      // Get the current year and insert it into the footer
  document.getElementById('current-year').textContent = new Date().getFullYear();