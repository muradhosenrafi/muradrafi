/* =====================================================
   Resume section tabs and tab contents
===================================================== */
const resumeTabs = document.querySelector(".resume-tabs");
const resumePortfolioTabBtns = resumeTabs.querySelectorAll(".tab-btn");
const resumeTabContents = document.querySelectorAll(".resume-tab-content");

var resumeTabNav = function (resumeTabClick) {
   resumeTabContents.forEach((resumeTabContent) => {
      resumeTabContent.style.display = "none";
      resumeTabContent.classList.remove("active");
   });

   resumePortfolioTabBtns.forEach((resumePortfolioTabBtn) => {
      resumePortfolioTabBtn.classList.remove("active");
   });

   resumeTabContents[resumeTabClick].style.display = "flex";

   setInterval(() => {
      resumeTabContents[resumeTabClick].classList.add("active");
   }, 100)

   resumePortfolioTabBtns[resumeTabClick].classList.add("active");
}

resumePortfolioTabBtns.forEach((resumePortfolioTabBtn, i) => {
   resumePortfolioTabBtn.addEventListener("click", () => {
      resumeTabNav(i);
   });
});
/* =====================================================
   Service modal open/close function
===================================================== */
const serviceCardWithModels = document.querySelectorAll(".service-container .card-with-model");


serviceCardWithModels.forEach((serviceCardWithModel) => {
   const servisCard = serviceCardWithModel.querySelector(".service-card");
   const servisBackdrop = serviceCardWithModel.querySelector(".service-modal-backdrop");
   const modalClosebtn = serviceCardWithModel.querySelector(".modal-close-btn");
   const serviceModial = serviceCardWithModel.querySelector(".service-modal");


   servisCard.addEventListener("click", () => {
      servisBackdrop.style.display = "flex";

      setTimeout(() => {
         servisBackdrop.classList.add("active");
      }, 100);

      setTimeout(() => {
         serviceModial.classList.add("active");
      }, 300);

   });

   modalClosebtn.addEventListener("click", () => {

      setTimeout(() => {
         servisBackdrop.style.display = "none";
      }, 500);

      setTimeout(() => {
         servisBackdrop.classList.remove("active");
         serviceModial.classList.remove("active");
      }, 100);
   });

});
/* =====================================================
   Portfolio modals, tabs and cards
===================================================== */

// Filter portfolio cards according to portfolio tabs.
document.addEventListener("DOMContentLoaded", () => {
   const portfolioTabs = document.querySelector(".portfolio-tabs");
   const portfolitabsbtns = portfolioTabs.querySelectorAll(".tab-btn");
   const cardswithModels = document.querySelectorAll(".protfolio-container .card-with-modal");

   portfolitabsbtns.forEach((tabBtn) => {
      tabBtn.addEventListener("click", () => {
         const filter = tabBtn.getAttribute("data-filter");

         cardswithModels.forEach((cardwithModel) => {
            if (filter === "all" || cardwithModel.classList.contains(filter)) {

               cardwithModel.classList.remove("hidden");
               setTimeout(() => {
                  cardwithModel.style.opacity = "1";
                  cardwithModel.style.transition = ".5s ease";
               }, 1);

            } else {

               cardwithModel.classList.add("hidden");

               setTimeout(() => {
                  cardwithModel.style.opacity = "0";
                  cardwithModel.style.transition = ".5s ease";
               }, 1);


            }
         });
         // add active class to the clicked tab button
         portfolitabsbtns.forEach((tabBtn) => tabBtn.classList.remove("active"));
         tabBtn.classList.add("active")
      });
   });
});
// Open/Close Portfolio modals.
const portfolioCardswithModals = document.querySelectorAll(".protfolio-container .card-with-modal");

portfolioCardswithModals.forEach((portfolioCardswithModal) => {
   const portfolioCard = portfolioCardswithModal.querySelector(".portfolio-card");
   const portfoliBackdrop = portfolioCardswithModal.querySelector(".portfolio-modal-backdrop");
   const modelClosebtn = portfolioCardswithModal.querySelector(".modal-close-btn");
   const portfolioModel = portfolioCardswithModal.querySelector(".portfolio-modal");


   portfolioCard.addEventListener("click", () => {
      portfoliBackdrop.style.display = "flex";


      setTimeout(() => {
         portfoliBackdrop.classList.add("active");
      }, 300);

      setTimeout(() => {
         portfolioModel.classList.add("active");
      }, 300);

   });
   modelClosebtn.addEventListener("click", () => {

      setTimeout(() => {
         portfoliBackdrop.style.display = "none";
      }, 300);

      setTimeout(() => {
         portfoliBackdrop.classList.remove("active");
         portfolioModel.classList.remove("active");
      }, 100);

   })

});
/* =====================================================
   Testimonial Swiper
===================================================== */
// var swiper = new Swiper(".sue-client-swiper", {
//       cssMode: true,
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//       pagination: {
//         el: ".swiper-pagination",
//       },
//       mousewheel: true,
//       keyboard: true,
//     });

/* =====================================================
   Send/Receive emails from contact form - EmailJS
===================================================== */
// (function() {
//             // https://dashboard.emailjs.com/admin/account
//             emailjs.init({
//               publicKey: "rieG3P6f9QESbyGUo",
//             });
//         })();


// const contactForm = document.getElementById("sue-contact-form");
// const sueContactFormAlert = document.getElementsByClassName("contact-form-alert")[0];

// contactForm.addEventListener('submit', function(event) {
//     event.preventDefault();

//     emailjs.sendForm('service_2szd9w8', 'template_wi7zhdi', this)
//     .then(() => {
//         sueContactFormAlert.innerHTML = `
//             <span>Your message sent successfully!</span>
//             <i class='ri-checkbox-circle-fill'></i>
//         `;
//         contactForm.reset();
//     }, (error) => {
//         sueContactFormAlert.innerHTML = `
//              <span>Your message not sent!</span>
//             <i class='ri-error-warning-fill'></i>
//         `;
//         sueContactFormAlert.title= error;
//     });
// });

(function () {
    emailjs.init({
        publicKey: "rieG3P6f9QESbyGUo",
    });
})();

const contactForm = document.getElementById("sue-contact-form");
const alertBox = document.querySelector(".contact-form-alert");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    alertBox.innerHTML = `<span>Sending...</span>`;

    emailjs.sendForm("service_2szd9w8", "template_wi7zhdi", "contactForm")
        .then(() => {
            alertBox.innerHTML = `
                <span>Message sent successfully!</span>
                <i class='ri-checkbox-circle-fill'></i>
            `;
            contactForm.reset();
        })
        .catch((error) => {
            alertBox.innerHTML = `
                <span>Message not sent!</span>
                <i class='ri-error-warning-fill'></i>
            `;
            console.error(error);
        });
});
/* =====================================================
   Shrink the height of the header on scroll
===================================================== */

/* =====================================================
   Bottom navigation menu
===================================================== */

// Each bottom navigation menu items active on page scroll.

// Javascript to show bottom navigation menu on home(page load).

// Javascript to show/hide bottom navigation menu on home(scroll).

// Hide bottom navigation menu on click menu-hide-btn.

// Show bottom navigation menu on click menu-show-btn.

/* =====================================================
   To-top-button with scroll indicator bar
===================================================== */

/* =====================================================
   Customized cursor on mousemove
===================================================== */

// Cursor effects on hover website elements.

/* =====================================================
   Website dark/light theme
===================================================== */

// Change theme and save current theme on click the theme button.

// Get saved theme icon and theme on document loaded.

/* =====================================================
   ScrollReveal JS animations
===================================================== */

// Common reveal options to create reveal animations.

// Target elements and specify options to create reveal animations.