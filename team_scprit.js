let currentIndex = 0;
let carouselItems, dots;

document.addEventListener("DOMContentLoaded", function () {
    carouselItems = document.querySelectorAll(".carousel-item");
    dots = document.querySelectorAll(".dot");

    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    showSlide(currentIndex);
    setInterval(nextSlide, 3000);
});

function showSlide(index) {
    carouselItems.forEach((item) => {
        item.style.display = "none";
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    carouselItems[index].style.display = "block";
    dots[index].classList.add("active");
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showSlide(currentIndex);
}
