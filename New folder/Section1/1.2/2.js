// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

// Lightbox Modal
const modal = document.createElement("div");
modal.id = "lightbox-modal";
modal.innerHTML = `<div class="modal-content">
    <span class="close">&times;</span>
    <img id="modal-img">
</div>`;
document.body.appendChild(modal);

const productImages = document.querySelectorAll(".product-img");
const modalImg = document.getElementById("modal-img");

productImages.forEach((img) => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

document.querySelector(".close").addEventListener("click", () => {
    modal.style.display = "none";
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modal.style.display = "none";
});
