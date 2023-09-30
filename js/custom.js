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
  checkVisibility(); // Check initial visibility
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
    checkVisibility(); // Check initial visibility
});

