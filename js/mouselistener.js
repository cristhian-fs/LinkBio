window.addEventListener("DOMContentLoaded", function () {
  const nameContainer = document.querySelector("#name-mouse-listener");
  const nameItem = document.querySelector("#text-name");

  nameContainer.addEventListener("mousemove", function (event) {
    const x = event.clientX - nameContainer.offsetLeft;
    const y = event.clientY - nameContainer.offsetTop;
    nameItem.style.setProperty("--mouse-x", x + "px");
    nameItem.style.setProperty("--mouse-y", y + "px");
  });

  const instagramDivs = document.querySelectorAll(".instagram-conic-gradient");
  instagramDivs.forEach((div) => {
    div.addEventListener("mousemove", function (event) {
      const x = event.clientX - div.offsetLeft;
      const y = event.clientY - div.offsetTop;
      div.style.setProperty("--mouse-x", x + "px");
      div.style.setProperty("--mouse-y", y + "px");
    });
  });

  // LOADING ANIMATION
  gsap.registerPlugin(ScrollTrigger);
});
