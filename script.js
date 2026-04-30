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

// (function () {
//     emailjs.init({
//         publicKey: "rieG3P6f9QESbyGUo",
//     });
// })();

// const contactForm = document.getElementById("sue-contact-form");
// const alertBox = document.querySelector(".contact-form-alert");

// contactForm.addEventListener("submit", function (e) {
//     e.preventDefault();

//     alertBox.innerHTML = `<span>Sending...</span>`;

//     emailjs.sendForm("service_2szd9w8", "template_wi7zhdi", "contactForm")
//         .then(() => {
//             alertBox.innerHTML = `
//                 <span>Message sent successfully!</span>
//                 <i class='ri-checkbox-circle-fill'></i>
//             `;
//             contactForm.reset();
//         })
//         .catch((error) => {
//             alertBox.innerHTML = `
//                 <span>Message not sent!</span>
//                 <i class='ri-error-warning-fill'></i>
//             `;
//             console.error(error);
//         });
// });
/* =====================================================
   Shrink the height of the header on scroll
===================================================== */
window.addEventListener("scroll", () => {
   const sueHeader = document.querySelector(".sue-header");

   sueHeader.classList.toggle("shrink", window.scrollY > 0)
});
/* =====================================================
   Bottom navigation menu
===================================================== */

window.addEventListener("scroll", () => {
   const navMenuSections = document.querySelectorAll(".nav-menu-section");
   const scrollY = window.pageYOffset;

   navMenuSections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 50;
      const id = section.getAttribute("id");

      const navLink = document.querySelector(
         `.bottom-nav .menu li a[href*="${id}"]`
      );

      if (navLink) {
         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add("current");
         } else {
            navLink.classList.remove("current");
         }
      }
   });
});

// Javascript to show bottom navigation menu on home(page load).
window.addEventListener("DOMContentLoaded", () => {
   const bottomNav = document.querySelector(".bottom-nav");
   bottomNav.classList.toggle("active", window.scrollY < 10);
});
// Javascript to show/hide bottom navigation menu on home(scroll).
const bottomNav = document.querySelector(".bottom-nav");
const menuHideBtn = document.querySelector(".menu-hide-btn");
const menuShowBtn = document.querySelector(".menu-show-btn");

var navTimeout;

window.addEventListener("scroll", () => {
   bottomNav.classList.add("active");
   menuShowBtn.classList.remove("active");


   if (window.scrollY < 10) {

      //  menuHideBtn.classList.remove("active"); not working!!!!!!!!!

      function scrollStopped() {
         bottomNav.classList.add("active");
      }
      clearTimeout(navTimeout);
      navTimeout = setTimeout(scrollStopped, 2500);

   }


   if (window.scrollY > 10) {
      menuHideBtn.classList.add("active");

      function scrollStopped() {
         bottomNav.classList.remove("active");
         menuShowBtn.classList.add("active");
      }
      clearTimeout(navTimeout);
      navTimeout = setTimeout(scrollStopped, 2500);
   }
});

// Hide bottom navigation menu on click menu-hide-btn.
menuHideBtn.addEventListener("click", () => {
   bottomNav.classList.remove("active");   // nav hide
   menuHideBtn.classList.remove("active"); // hide button hide
   menuShowBtn.classList.add("active");    // show button show
});

// Show bottom navigation menu on click menu-show-btn.

menuShowBtn.addEventListener("click", () => {
   bottomNav.classList.add("active");      // nav show
   menuShowBtn.classList.remove("active"); // show button hide
   menuHideBtn.classList.add("active");    // hide button show
});

/* =====================================================
   To-top-button with scroll indicator bar
===================================================== */
window.addEventListener("scroll", () => {
   const toptobtn = document.querySelector(".to-tap-btn");
   toptobtn.classList.toggle("active", window.scrollY > 0);
   // scroll indicator bar
   const scrollindicatorbar = document.querySelector(".scroll-indicator-bar");
   const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
   const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
   const scrollValue = (pageScroll / height) * 100;
   scrollindicatorbar.style.height = scrollValue + "%";
})
/* =====================================================
   Customized cursor on mousemove
===================================================== */
const cursor = document.querySelector(".cursor");
const cursordot = cursor.querySelector(".cursor-dot");
const cursorCricle = cursor.querySelector(".cursor-circle");

document.addEventListener("mousemove", (e) => {
   let x = e.clientX;
   let y = e.clientY;

   cursordot.style.top = y + "px";
   cursordot.style.left = x + "px";
   cursorCricle.style.top = y + "px";
   cursorCricle.style.left = x + "px";
})

// Cursor effects on hover website elements.
const cursorHoverlinks = document.querySelectorAll("body a, .theme-btn, .sue-main-btn, .portfolio-card, .swiper-button-next, .swiper-button-prev, .swiper-pagination-bullet, .service-card, .contact-social-links li, .contact-form .submit-btn, .menu-show-btn, .menu-hide-btn")

cursorHoverlinks.forEach((cursorHoverlink) => {
   cursorHoverlink.addEventListener("mouseover", () => {
      cursordot.classList.add("large");
      cursorCricle.style.display = "none"
   });
});

cursorHoverlinks.forEach((cursorHoverlink) => {
   cursorHoverlink.addEventListener("mouseout", () => {
      cursordot.classList.remove("large");
      cursorCricle.style.display = "block";
   });
});
/* =====================================================
   Website dark/light theme
===================================================== */

// Change theme and save current theme on click the theme button.
const thembtn = document.querySelector(".theme-btn")

thembtn.addEventListener("click", ()=>{
thembtn.classList.toggle("active-sun-icon");
document.body.classList.toggle("light-theme");

//  saved theme icon and theme on click theme button.
const getCurrentIcon= () => thembtn.classList.contains("active-sun-icon") ? "sun" : "moon";
const getCurrenTheme= () => document.body.classList.contains("light-theme")? "light" : "dark";

localStorage.setItem("sue-saved-icon", getCurrentIcon())
localStorage.setItem("sue-saved-Theme", getCurrenTheme())

});
//Get saved theme icon and theme on document loaded.
const savedicon =localStorage.getItem("sue-saved-icon");
const savedTheme =localStorage.getItem("sue-saved-Theme");

document.addEventListener("DOMContentLoaded" ,()=>{
thembtn.classList[savedicon === "sun" ? "add" : "remove"]("active-sun-icon");
document.body.classList[savedTheme === "light" ? "add" : "remove"]("light-theme");
});

/* =====================================================
   ScrollReveal JS animations
===================================================== */

// Common reveal options to create reveal animations.
   ScrollReveal({ 
      reset: true, 
      distance:'60px',
      duration: 2500,
      delay:400
   });
// Target elements and specify options to create reveal animations.
ScrollReveal().reveal('.avatar-img', { delay: 100, origin: 'top'});
ScrollReveal().reveal('.avatar-info,.section-title',{ delay: 300, origin: 'top'});
ScrollReveal().reveal('.home-social, .home-scroll-btn,.copy-right', { delay: 600, origin: 'bottom'});
ScrollReveal().reveal('.about-img', { delay: 700, origin: 'top'});
ScrollReveal().reveal('.about-info,.sue-footer .sue-logo', { delay: 300, origin: 'bottom'});
ScrollReveal().reveal('.pro-card,.about-buttons .sue-main-btn,.resume-tabs .tab-btn,.portfolio-tabs .tab-btn',{ delay: 500, origin: 'right', interval: 200});
ScrollReveal().reveal('#resume .section-content',{ delay: 700, origin: 'bottom'});
ScrollReveal().reveal('.service-card,.portfolio-card,.contact-item,.contact-social-link li,.footer-menu .menu-item',{ delay: 300, origin: 'bottom', interval:300});
ScrollReveal().reveal('.contact-info h3',{ delay: 100, origin: 'bottom', interval:300});
ScrollReveal().reveal('.contact-form-body',{ delay: 700, origin: 'right'});

// ScrollReveal().reveal('.about-buttons, ' { delay: 300, origin: 'top'});