document.addEventListener('DOMContentLoaded', function() {
    // Change slides every 8 seconds
    setInterval(changeSlide, 8000);
});

function changeSlide() {
    const slides = document.querySelectorAll('.slide');
    const firstSlide = slides[0];
    const lastSlide = slides[slides.length - 1];
    firstSlide.parentElement.appendChild(firstSlide);
}