(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);


document.addEventListener("DOMContentLoaded", function() {
  const skills = document.querySelectorAll(".skill");

  function checkVisibility() {
      skills.forEach(function(skill) {
          const bounding = skill.getBoundingClientRect();
          if (bounding.top < window.innerHeight) {
              skill.style.opacity = "1";
              skill.style.transform = "translateY(0)";
          }
      });
  }
  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); 
});


document.addEventListener("DOMContentLoaded", function() {
    const certificates = document.querySelectorAll(".gallery");

    function checkVisibility() {
        certificates.forEach(function(certificate) {
            const bounding = certificate.getBoundingClientRect();
            if (bounding.top < window.innerHeight) {
                certificate.style.opacity = "1";
                certificate.style.transform = "translateY(0)";
            }
        });
    }
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); 
});


document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.querySelector(".contact-form");

  function checkVisibility() {
      const bounding = contactForm.getBoundingClientRect();
      if (bounding.top < window.innerHeight) {
          contactForm.style.opacity = "1";
          contactForm.style.transform = "translateY(0)";
      }
  }
  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); 
});

document.addEventListener("DOMContentLoaded", function() {
  const timelineItems = document.querySelectorAll(".timeline-info");

  function checkVisibility() {
      timelineItems.forEach(function(item) {
          const bounding = item.getBoundingClientRect();
          if (bounding.top < window.innerHeight) {
              item.style.opacity = "1";
              item.style.transform = "translateY(0)";
          }
      });
  }
  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); 
});

document.addEventListener("DOMContentLoaded", function() {
  const profileItems = document.querySelectorAll(".profile");

  function checkVisibility() {
      profileItems.forEach(function(item) {
          const bounding = item.getBoundingClientRect();
          if (bounding.top < window.innerHeight) {
              item.style.opacity = "1";
              item.style.transform = "translateY(0)";
          }
      });
  }
  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); 
});

document.addEventListener("DOMContentLoaded", function() {
  const projectCards = document.querySelectorAll(".card");

  function checkVisibility() {
      projectCards.forEach(function(card) {
          const bounding = card.getBoundingClientRect();
          if (bounding.top < window.innerHeight) {
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
          }
      });
  }
  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});


// Push a new state to the browser's history, effectively replacing the current state.
history.pushState(null, null, document.URL);

// Add a listener for the 'popstate' event, which fires when the user navigates back.
window.addEventListener('popstate', function(event) {
  // Push another state to prevent going back.
  history.pushState(null, null, document.URL);
});
