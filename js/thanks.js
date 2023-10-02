document.addEventListener("DOMContentLoaded", function() {
    const elementsToAnimate = document.querySelectorAll(".fade-in, .slide-in");
    elementsToAnimate.forEach(function(element) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
    });
});


  // Push a new state to the browser's history, effectively replacing the current state.
  history.pushState(null, null, document.URL);

  // Add a listener for the 'popstate' event, which fires when the user navigates back.
  window.addEventListener('popstate', function(event) {
    // Push another state to prevent going back.
    history.pushState(null, null, document.URL);
  });