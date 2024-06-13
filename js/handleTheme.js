document.addEventListener("DOMContentLoaded", (e) => {
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    document.querySelector("button[data-theme=dark]").classList.add("active");
  } else {
    document.documentElement.classList.remove("dark");
    document.querySelector("button[data-theme=light]").classList.add("active");
  }

  let themeToggleBtns = document.querySelectorAll("button[data-theme]");
  let themeToggleParent = document.querySelector("#theme-toggle");

  function updateElement() {
    let toggleBtnActive = document.querySelector("button[data-theme].active");
    let toggleBtnActiveRect = toggleBtnActive.getBoundingClientRect();
    let parentRect = themeToggleParent.getBoundingClientRect();

    themeToggleParent.style.setProperty(
      "--width-btn",
      `${toggleBtnActiveRect.width}px`
    );
    themeToggleParent.style.setProperty(
      "--height-btn",
      `${toggleBtnActiveRect.height}px`
    );

    themeToggleParent.style.setProperty(
      "--x-position",
      `${toggleBtnActiveRect.left - parentRect.left}px`
    );
    themeToggleParent.style.setProperty(
      "--y-position",
      `${toggleBtnActiveRect.top - parentRect.top - 1}px`
    );
  }
  updateElement();

  themeToggleBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const theme = this.dataset.theme;
      themeToggleBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      if (theme === "light") {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else if (theme === "dark") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }

      updateElement();
    });
  });

  window.addEventListener("resize", updateElement);
});
