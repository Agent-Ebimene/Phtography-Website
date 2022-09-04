const galleryImages = document.getElementsByClassName("single-gallery-image");
const modalCloseBtn = document.querySelector(".modal-close-container");
const modal = document.querySelector(".gallery-modal");
const modalImg = document.querySelector(".modal-image");
console.log(modalImg);
for (let i = 0; i < galleryImages.length; i++) {
  galleryImages[i].addEventListener("click", (event) => {
    modal.style.display = "flex";
    modalImg.src = event.target.src;
  });
}
modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
