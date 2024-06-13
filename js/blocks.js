window.addEventListener("DOMContentLoaded", () => {
  const imageContainer = document
    .querySelector("#profile-image")
    .getBoundingClientRect();
  const blockContainer = document.querySelector(".blocks");
  const blockSize = 40;
  const imageWidth = imageContainer.width;
  const imageHeight = imageContainer.height;
  const numCols = Math.ceil(imageWidth / blockSize);
  const numRows = Math.ceil(imageHeight / blockSize);
  const numBlocks = numCols * numRows;

  function createBlocks() {
    for (let i = 0; i < numBlocks; i++) {
      const block = document.createElement("div");
      block.classList.add("block");
      block.dataset.index = i;
      block.addEventListener("mousemove", highlight);
      blockContainer.appendChild(block);
    }
  }

  function highlight() {
    this.classList.add("highlight");
    setTimeout(() => {
      this.classList.remove("highlight");
    }, 500);
  }

  createBlocks();

  window.addEventListener("resize", createBlocks);
});
