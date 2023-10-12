document.addEventListener("DOMContentLoaded", function () {
        var accordionTriggers = document.querySelectorAll(".accordion-trigger");
      
        accordionTriggers.forEach(function (trigger) {
          trigger.addEventListener("click", function (event) {
            event.preventDefault();
      
            // Toggle the clicked class on the anchor link
            this.classList.toggle("clicked");
      
            // Find the corresponding .accordion-content element
            var content = this.nextElementSibling;
      
            // Toggle the display property
            if (content.style.display === "block") {
              content.style.display = "none";
            } else {
              content.style.display = "block";
            }
          });
        });
      });