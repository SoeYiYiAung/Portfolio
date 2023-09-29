document.addEventListener("DOMContentLoaded", function() {
    const elementsToAnimate = document.querySelectorAll(".fade-in, .slide-in");
    elementsToAnimate.forEach(function(element) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
    });
});