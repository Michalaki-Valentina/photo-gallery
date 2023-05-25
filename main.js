const masks = document.querySelectorAll(".mask");
const close = document.querySelector(".close");
const modal = document.getElementById("modal-container");

masks.forEach((mask) => {
  mask.addEventListener("click", openModal);
});

close.addEventListener("click", closeModal);

function openModal($event) {
  const image = $event.target.previousElementSibling;
  const modalImage = document.getElementById("modal-image");

  modalImage.src = image.getAttribute("src");
  modalImage.alt = image.getAttribute("alt");

  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}
