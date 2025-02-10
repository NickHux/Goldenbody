// document.addEventListener("DOMContentLoaded", function () {
//     var userAgent = navigator.userAgent || navigator.vendor || window.opera;

//     // Check for iOS devices
//     if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
//         var boxes = document.querySelectorAll(".box-fixed");
//         boxes.forEach(function (box) {
//             box.classList.add("ios-device");
//         });
//     }
// });


// document.addEventListener('DOMContentLoaded', function() {
//   var bgElements = document.querySelectorAll('.hero-item');
  
//   bgElements.forEach(function(el) {
//     var mobileImage = el.getAttribute('data-mobile-image');
    
//     function updateBackgroundImage() {
//       if (window.innerWidth < 768 && mobileImage) {
//         el.style.backgroundImage = 'url(' + mobileImage + ')';
//       } else {
//         // Revert to desktop image if screen is larger
//         var desktopImage = el.getAttribute('style').match(/url\(([^)]+)\)/)[1];
//         el.style.backgroundImage = 'url(' + desktopImage + ')';
//       }
//     }

//     // Initial check on load
//     updateBackgroundImage();

//     // Update on window resize
//     window.addEventListener('resize', updateBackgroundImage);
//   });
// });




// jQuery(document).ready(function ($) {

// // Hide all video-main-content initially
// $('.video-main-content').hide();

// // Show the first video-main-content on load
// $('.video-main-content').first().fadeIn();

// // Add active class to the first tab button on load
// $('.video-tabbings li a').first().addClass('active');

// // Tab functionality
// $('.video-tabbings li a').on('click', function (e) {
//     e.preventDefault();

//     // Remove active class from all tab buttons
//     $('.video-tabbings li a').removeClass('active');

//     // Add active class to the clicked tab button
//     $(this).addClass('active');

//     // Get the index of the clicked tab button
//     let index = $(this).parent().index();

//     // Hide all video-main-content
//     $('.video-main-content').hide();

//     // Fade in the corresponding video-main-content
//     $('.video-main-content').eq(index).fadeIn(400); // Adjust duration as needed
// });

// $('span.price-item').each(function() {
//   var priceText = $(this).text();
//   if (priceText.includes("Von")) {
//     // Remove or hide "Von" by replacing it with an empty string
//     $(this).text(priceText.replace("Von", "").trim());
//   }
// });

  
//   let buttons = jQuery("a[class^='btn-']");

//   buttons.each(function () {
//     let btn = jQuery(this);
//     let text = btn.find("span").text().trim();
//     if (text === "") {
//       btn.remove();
//     }
//   });

//  //  if($(".menu-drawer__menu").hasClass('submenu-open')){
//  //      $(".shopify-app-block").addClass("hidden");
//  //      $(".shopify-app-block").hide();
//  //      $(".header__icons").hide();
//  // }

//   if ($(window).width() > 1023) {
//       var body = $("body").outerWidth();
//       var contain = $(".requirement-section .container").innerWidth();
//       var less = body - contain;
//       var total = less / 2;
//       $(".feedback-sec .feedback-col").css('margin-left', total);
//       $(".hero-slider .owl-nav").css('margin-right', total);
//    }

//     $('.ba-slider').owlCarousel({
//       center: true,
//       loop:true,
//       nav:true,
//       navText: ["<img src='https://cdn.shopify.com/s/files/1/0673/5806/4951/files/arrow-slider.png'>","<img src='https://cdn.shopify.com/s/files/1/0673/5806/4951/files/arrow-slider.png'>"],
//       margin:100,
//       responsiveClass:true,
//       responsive:{
//        0:{
//             items:1
//         },
//         600:{
//             margin:60,
//             items:2
//         },
//         1025:{
//             items:2.7
//         }
//       }
//   });

//   $('.feedback-slider').owlCarousel({
//       loop:true,
//       margin:20,
//       nav:true,
//       navText: ["<img src='https://cdn.shopify.com/s/files/1/0673/5806/4951/files/arrow-slider.png'>","<img src='https://cdn.shopify.com/s/files/1/0673/5806/4951/files/arrow-slider.png'>"],
//       dots: false,
//       responsive:{
//           0:{
//               items:1
//           },
//           600:{
//               items:2
//           },
//           1025:{
//               items:2.8
//           }
//       }
//   });

//   $(".header__search .modal__toggle svg").click(function(){
//     $(".gt_switcher_wrapper").hide();
//   });

//   $(".search-modal__close-button").click(function(){
//     $(".gt_switcher_wrapper").show();
//   });

//   $('.usp-slider').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:false,
//     dots:false,
//     autoplay: true,
//     autoWidth:true,
//     autoHeight: false,
//     slideTransition: 'linear',
//     autoplayTimeout: 6000,
//     autoplaySpeed: 6000,
//     autoplayHoverPause: true,
//     responsive:{
//         0:{
//             items:1.2,
//         },
//         600:{
//             items:2,
//         },
//         1000:{
//             items:3,
//         },
//         1200:{
//             items:3.5,
//         },
//         1700:{
//             items:5,
//         }
//     }
// });

//   var owl = $(".hero-slider");
//   owl.owlCarousel({
//     items: 1,
//     margin: 0,
//     loop: true,
//     nav: true,
//     autoplay: true,
//     autoplayTimeout: 8600,
//     autoplayHoverPause: false,
//     dots: false,
//     dotsData: false,
//     navText: ["<img src='https://cdn.shopify.com/s/files/1/0673/5806/4951/files/arrow-slider.png'>","<img src='https://cdn.shopify.com/s/files/1/0673/5806/4951/files/arrow-slider.png'>"],
//   });

//   // $(".hero-slider").append('<div class="custom-nav-wrapper container"></div>');
//   // $(".custom-nav-wrapper").append($(".owl-prev"));
//   // $(".custom-nav-wrapper").append($(".owl-dots"));
//   // $(".custom-nav-wrapper").append($(".owl-next"));

//   var owl = $(".hero-slider2");
//   owl.owlCarousel({
//     items: 2.25,
//     margin: 40,
//     loop: true,
//     nav: true,
//     navText: ["<img src='https://cdn.shopify.com/s/files/1/0673/5806/4951/files/arrow-slider.png'>","<img src='https://cdn.shopify.com/s/files/1/0673/5806/4951/files/arrow-slider.png'>"],
//     autoplay: false,
//     autoplayTimeout: 8600,
//     autoplayHoverPause: false,
//     dots: false,
//     dotsData: false,
//     responsive: {
//       0: {
//         items: 1,
//         margin: 0,
//       },
//       768: {
//         items: 1.75,
//         margin: 20,
//       },
//       1024: {
//         items: 2.25,
//         margin: 20,
//       },
//       1280: {
//         items: 2.5,
//         margin: 40,
//       },
//     },
//   });

//   // var owl = $(".product-box-text-slider");
//   // owl.owlCarousel({
//   //   items: 4,
//   //   margin: 20,
//   //   loop: true,
//   //   nav: false,
//   //   autoplay: false,
//   //   autoplayTimeout: 8600,
//   //   autoplayHoverPause: false,
//   //   dots: false,
//   //   dotsData: false,
//   //   navText: [
//   //     "<i class='fa fa-arrow-left'></i>",
//   //     "<i class='fa fa-arrow-right'></i>",
//   //   ],
//   //   responsive: {
//   //     0: {
//   //       items: 2,
//   //     },
//   //     768: {
//   //       items: 2,
//   //     },
//   //     1280: {
//   //       items: 3.5,
//   //     },
//   //   },
//   // });

//   if ($(window).width() > 1023) {
//     var body = $("body").outerWidth();
//     var contain = $(".hero-section .container").innerWidth();
//     var less = body - contain;
//     var total = less / 2;
//     $(".second-section").css("padding-left", total);
//   }

//   $(window).scroll(function () {
//     let annoceHeight = $(".Usp-Section").outerHeight();
//     let headerHeight = $(".header-wrapper").outerHeight();
//     let scrollHeight = annoceHeight + headerHeight;
    
//     if ($(this).scrollTop() > scrollHeight) {
//       $(".header-wrapper").addClass("backgo");
//       $("body").addClass("backgo");
//       // $(".usp-slider").addClass("hide-slider");                             
//       $(".gt_switcher_wrapper").addClass("stick");
//     } else {
//       $(".header-wrapper").removeClass("backgo");
//       $("body").removeClass("backgo");
//       // $(".usp-slider").removeClass("hide-slider"); 
//       $(".gt_switcher_wrapper").removeClass("stick");
//     }
//   });
//   if ($(this).scrollTop() > scrollHeight) {
//     $(".header-wrapper").addClass("backgo");
//     $("body").addClass("backgo");
//     // $(".usp-slider").addClass("hide-slider"); 
//     $(".gt_switcher_wrapper").addClass("stick");
    
//   } else {
//     $(".header-wrapper").removeClass("backgo");
//     $("body").removeClass("backgo");
//     // $(".usp-slider").removeClass("hide-slider"); 
//     $(".gt_switcher_wrapper").removeClass("stick");
//   }

//   $(".outer-popup").hide();

//   $(".top").on("click", function () {
//     var articleId = $(this).data("article-id");
//     $(".outer-popup[data-article-id='" + articleId + "']").show();
//     $("html").toggleClass("overflow-hidden");
//   });

//   $(".outer-popup" || ".outer-popup .close-btn").on("click", function () {
//     $(this).hide();
//     $("html").toggleClass("overflow-hidden");
//   });


//   // $(".you-tube-popup").hide();

//   // $(".video-img").on("click", function () {
//   //     var articleId = $(this).data("article-id");  // Use data-article-id from the .video-img div
//   //     $(".you-tube-popup[data-article-id='" + articleId + "']").show();  // Show the matching popup
//   //     $("html").addClass("overflow-hidden");
//   // });
  
//   // $(".you-tube-popup, .you-tube-popup .close-btn").on("click", function () {
//   //     $(this).closest(".you-tube-popup").hide();  // Hide the closest popup
//   //     $("html").removeClass("overflow-hidden");
//   // });

//   // $(".training-popup").hide();

//   // $(".training-video-contain").on("click", function () {
//   //     var articleId = $(this).data("article-id");  // Use data-article-id from the .video-img div
//   //     $(".training-popup[data-article-id='" + articleId + "']").show();  // Show the matching popup
//   //     $("html").addClass("overflow-hidden");
//   // });
  
//   // $(".training-popup, .training-popup .close-btn").on("click", function () {
//   //     $(this).closest(".training-popup").hide();  // Hide the closest popup
//   //     $("html").removeClass("overflow-hidden");
//   // });


//   $(".full-video-popup").hide();

//   $(".play-btn").on("click", function () {
//       var articleId = $(this).data("article-id");  // Use data-article-id from the .video-img div
//       $(".full-video-popup[data-article-id='popup']").show();  // Show the matching popup
//       $("html").addClass("overflow-hidden");
//   });
  
//   $(".full-video-popup, .full-video-popup .close-btn").on("click", function () {
//       $(this).closest(".full-video-popup").hide();  // Hide the closest popup
//       $("html").removeClass("overflow-hidden");
//   });





//   var testi_owl1 = $(".testimonial-slider");
//   testi_owl1.owlCarousel({
//     items: 1.5,
//     margin: 0,
//     loop: true,
//     nav: true,
//     center: true,
//     autoplay: false,
//     autoplayTimeout: 2000,
//     autoplayHoverPause: false,
//     dots: false,
//     autoplayHoverPause: true,
//     navText: [
//       "<img src='https://cdn.shopify.com/s/files/1/0643/9344/5421/files/arrow-gray.png?v=1724679292'>",
//       "<img src='https://cdn.shopify.com/s/files/1/0643/9344/5421/files/arrow-gray.png?v=1724679292'>",
//     ],
//     responsive: {
//       0: {
//         items: 1,
//         margin: 20,
//       },
//       600: {
//         items: 1,
//         nav: true,
//         margin: 20,
//       },
//       1280: {
//         items: 1.5,
//         margin: 20,
//       },
//       1660: {
//         items: 1.5,
//         margin: 0,
//       },
//     },
//   });

//   // setTimeout(function() {
//   //   $(".testimonial-slider").find('.owl-nav').removeClass("disabled");
//   // }, 1000 );

//   var testi_owl = $(".product-slider");
//   testi_owl.owlCarousel({
//     items: 3,
//     margin: 20,
//     loop: true,
//     nav: true,
//     center: true,
//     autoplay: false,
//     autoplayTimeout: 2000,
//     autoplayHoverPause: false,
//     dots: false,
//     autoplayHoverPause: true,
//     navText: [
//       "<img src='https://cdn.shopify.com/s/files/1/0643/9344/5421/files/Arrow_Right.png?v=1724691815'>",
//       "<img src='https://cdn.shopify.com/s/files/1/0643/9344/5421/files/Arrow_Right.png?v=1724691815'>",
//     ],
//     responsive: {
//       0: {
//         items: 1.1,
//         margin: 20,
//         center: false,
//       },
//       600: {
//         items: 2,
//         margin: 20,
//         center: false,
//       },
//       1024: {
//         items: 3,
//         margin: 20,
//       },
//     },
//   });

//   setTimeout(function () {
//     var mediaListWidth = $(".product ul.product__media-list").width();
//     if ($(window).width() <= 712) {
//       mediaListWidth -= 40;
//     }
//     $(".product ul.product__media-list li.product__media-item").css(
//       "min-width",
//       mediaListWidth
//     );
//   }, 1500);

//   var maxHeight = 0;
//   $("section.product-section-2 .products a .img-box").each(function () {
//     var currentHeight = $(this).height();
//     if (currentHeight > maxHeight) {
//       maxHeight = currentHeight;
//     }
//   });
//   $("section.product-section-2 .products a .img-box").height(maxHeight);

//   // setTimeout(function () {
//   //   $("section.product-section-2.all-products .products .col-md-4")
//   //     .hide()
//   //     .slice(0, 9)
//   //     .show();
//   //   $("section.product-section-2.all-products a.btn-red").on(
//   //     "click",
//   //     function () {
//   //       $("section.product-section-2.all-products .products .col-md-4:hidden")
//   //         .slice(0, 9)
//   //         .fadeIn();
//   //       if (
//   //         $("section.product-section-2.all-products .products .col-md-4:hidden")
//   //           .length === 0
//   //       ) {
//   //         $(this).hide();
//   //       }
//   //     }
//   //   );
//   // }, 1000);

//   $(
//   ".Meet-The-Team .item .img-box, .Meet-The-Team .item .team_read_more"
//     ).click(function () {
//       var id = $(this).data("id");
//       var popup = $('.Meet-The-Team-popup[data-id="' + id + '"]');
//       popup.fadeIn();
//       $("html").toggleClass("overflow-hidden");
    
//       var innerHeight = popup.find(".inner").height();
//       var topHeight = popup.find(".top").height();
//       var bottomHeight = innerHeight - topHeight;
    
//       if ($(window).width() > 1660) {
//         bottomHeight -= 150;
//       } else if ($(window).width() > 1024) {
//         bottomHeight -= 90;
//       } else if ($(window).width() > 989) {
//         bottomHeight -= 120;
//       } else if ($(window).width() > 712) {
//         bottomHeight -= 100;
//       } else if ($(window).width() > 320) {
//         bottomHeight -= 40;
//       }
    
//       // Set the height for the bottom section of the currently opened popup
//       popup.find(".inner .bottom").css("height", bottomHeight);
//     });
    
//     $(".Meet-The-Team-popup .close-btn").click(function () {
//       $(this).closest(".Meet-The-Team-popup").fadeOut();
//       $("html").toggleClass("overflow-hidden");
//     });


//   $("section.podcasts-section.all-podcasts .podcasts .podcast")
//     .hide()
//     .slice(0, 6)
//     .show();
//   $("section.podcasts-section.all-podcasts .load-more-podcasts").click(
//     function (e) {
//       e.preventDefault();
//       $("section.podcasts-section.all-podcasts .podcasts .podcast:hidden")
//         .slice(0, 6)
//         .show();
//       if (
//         $("section.podcasts-section.all-podcasts .podcasts .podcast:hidden")
//           .length === 0
//       ) {
//         $(this).hide();
//       }
//     }
//   );

//   // $("section.blogs-section ul.blogs li.blog-item").hide().slice(0, 3).show();
//   // $("section.blogs-section a.btn-red.load-more-blogs").click(function (e) {
//   //   e.preventDefault();
//   //   $("section.blogs-section ul.blogs li.blog-item:hidden").slice(0, 6).show();
//   //   if ($("section.blogs-section ul.blogs li.blog-item:hidden").length === 0) {
//   //     $(this).hide();
//   //   }
//   // });

//   // var siteUrl = window.location.origin;
//   // if (window.location.href === siteUrl + "/pages/podcasts") {
//   //   window.location.href = "https://open.spotify.com/show/3JQFECq2CFYpSdrIfuKGuK";
//   // } else if (window.location.href === siteUrl + "/blogs/news/") {
//   //   window.location.href = siteUrl + "/pages/blogs";
//   // } else if (window.location.href === siteUrl + "/products/") {
//   //   window.location.href = siteUrl + "/pages/digitale-produkte";
//   // } else if (window.location.href === siteUrl + "/products") {
//   //   window.location.href = siteUrl + "/pages/digitale-produkte";
//   // } else if (window.location.href === siteUrl + "/collections/all") {
//   //   window.location.href = siteUrl + "/pages/digitale-produkte";
//   // }

//   $("#accordionExample .accordion-item:first-child button").click();
//   $("#accordion1 .accordion-item:first-child button").click();

//   if ($(window).width() <= 713) {
//     $("ul.menu-drawer__menu").after($("header .header__icons"));
//   }

//   if ($(window).width() > 1023) {
//     var body = $("body").outerWidth();
//     var contain = $("section.banner-section .container").innerWidth();
//     var less = body - contain;
//     var total = less / 2;
//     // $(".product .col-md-6.product__media-wrapper").css('padding-left', total);
//     $(".product").css("padding-left", total);
//     $(".product .col-md-6.product__info-wrapper .product__info-container").css(
//       "padding-right",
//       total
//     );
//   }




//   jQuery.fn.isInViewport = function () {
//     var elementTop = jQuery(this).offset().top;
//     var elementBottom = elementTop + jQuery(this).outerHeight();
//     var viewportTop = jQuery(window).scrollTop();
//     var viewportBottom = viewportTop + jQuery(window).height();
//     return elementBottom > viewportTop && elementTop < viewportBottom;
// };

// jQuery(window).on("resize scroll", function () {
//     var timeline = jQuery(".timeline-contain");
//     if (timeline.isInViewport()) {
//         const timelineElement = timeline[0]; // Get the native DOM element
//         const timelineRect = timelineElement.getBoundingClientRect();
//         const viewportHeight = window.innerHeight;

//         // Calculate scroll progress
//         const scrollProgress = Math.max(0, Math.min(1, (viewportHeight - timelineRect.top) / timelineRect.height));

//         // Update CSS variable based on scroll progress
//         const newHeight = scrollProgress * timelineRect.height;
//         timeline.css("--after-height", `${newHeight}px`);
//     } else {
//         // Reset height when out of view
//         timeline.css("--after-height", `0px`);
//     }
// });


// jQuery.fn.isInViewportForNumbers = function () {
//     var elementTop = jQuery(this).offset().top;
//     var elementBottom = elementTop + jQuery(this).outerHeight();
//     var viewportTop = jQuery(window).scrollTop();
//     var viewportBottom = viewportTop + jQuery(window).height();
//     return elementBottom > viewportTop && elementTop < viewportBottom;
// };

// jQuery(window).on("resize scroll", function () {
//     jQuery(".t-number-block .number").each(function () {
//         const $this = jQuery(this);

//         if ($this.isInViewportForNumbers()) {
//             if (!$this.hasClass("orange-num")) { // Prevent duplicate timeouts
//                 setTimeout(() => {
//                     $this.addClass("orange-num");
//                 }, 300); // Delay in milliseconds
//             }
//         } else {
//             $this.removeClass("orange-num"); // Optionally remove the class immediately when out of view
//         }
//     });
// });





  

//   const container = document.querySelector(".product-box-text-slider");

//   let startY;
//   let startX;
//   let scrollLeft;
//   let scrollTop;
//   let isDown;

//   container.addEventListener("mousedown", (e) => mouseIsDown(e));
//   container.addEventListener("mouseup", (e) => mouseUp(e));
//   container.addEventListener("mouseleave", (e) => mouseLeave(e));
//   container.addEventListener("mousemove", (e) => mouseMove(e));

//   function mouseIsDown(e) {
//     isDown = true;
//     startY = e.pageY - container.offsetTop;
//     startX = e.pageX - container.offsetLeft;
//     scrollLeft = container.scrollLeft;
//     scrollTop = container.scrollTop;
//   }
//   function mouseUp(e) {
//     isDown = false;
//   }
//   function mouseLeave(e) {
//     isDown = false;
//   }
//   function mouseMove(e) {
//     if (isDown) {
//       e.preventDefault();
//       //Move vertcally
//       const y = e.pageY - container.offsetTop;
//       const walkY = y - startY;
//       container.scrollTop = scrollTop - walkY;

//       //Move Horizontally
//       const x = e.pageX - container.offsetLeft;
//       const walkX = x - startX;
//       container.scrollLeft = scrollLeft - walkX;
//     }
//   }
// });


// document.addEventListener("DOMContentLoaded", function () {
//     const urlParams = new URLSearchParams(window.location.search);

//     // Check for success parameter
//     if (urlParams.get("customer_posted") === "true") {
//         showPopup("Danke für deine Anmeldung!");
//     }

//     // Check for error parameter
//     if (urlParams.get("form_type") === "customer" && window.location.hash === "#contact_form") {
//         showPopup("Sie sind bereits abonniert!");
//     }

//     // Function to display the popup
//     function showPopup(message) {
//         const popup = document.getElementById("popupMessage");
//         const popupContainer = document.getElementById("successPopup");

//         popup.textContent = message; // Set the message dynamically
//         popupContainer.style.display = "flex";
//     }

//     // Close the popup when clicking the close button
//     document.getElementById("closePopup").addEventListener("click", function () {
//         const popupContainer = document.getElementById("successPopup");
//         popupContainer.style.display = "none";
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   setInterval(() => {
//     const links = document.querySelectorAll(".delayed-redirect");

//     links.forEach(link => {
//       const frequentText = link.getAttribute("data-query"); // Fetch frequent text from data attribute
//       const shopUrl = link.getAttribute("href").split('?')[0]; // Get the base URL of the link
//       const translatedText = link.textContent.trim(); // Use the current visible text for the query

//       // Update the href to use the current visible text (translated)
//       link.href = `${shopUrl}?q=${encodeURIComponent(translatedText)}`;
//     });
//   }, 5000); // Runs every 5 seconds
// });



//   document.addEventListener('DOMContentLoaded', function () {
//     // Get all the play buttons
//     const playButtons = document.querySelectorAll('.play-btns');

//     playButtons.forEach(playBtn => {
//       playBtn.addEventListener('click', function () {
//         // Get the parent container
//         const container = playBtn.closest('.training-video-contain');

//         // Find the corresponding video container, image, and video
//         const videoContainer = container.querySelector('.training-videos-con');
//         const image = container.querySelector('.training-img');
//         const video = videoContainer.querySelector('video');

//         // Set the video height to match the image height
//         const imageHeight = image.offsetHeight; // Get the height of the image
//         video.style.height = `${imageHeight}px`; // Apply the height to the video tag

//         // Hide the image and play button, show the video container
//         image.style.display = 'none';
//         playBtn.style.display = 'none';
//         videoContainer.style.display = 'block';

//         // Play the video
//         if (video) {
//           video.play();
//         }
//       });
//     });
//   });


// document.addEventListener('submit', function(e) {
//     var emailInput = document.querySelector('input[type="email"]');
//     if (emailInput && !emailInput.value) {
//         var currentLang = document.documentElement.lang; // get current language
//         if (currentLang === 'es') { // if Spanish, for example
//             emailInput.setCustomValidity('Bitte fülle dieses Feld aus.');
//         } else {
//             emailInput.setCustomValidity('Bitte fülle dieses Feld aus.');
//         }
//     }
// });




// // document.addEventListener('DOMContentLoaded', function () {
// //     // Get all the play buttons
// //     const playButtons2 = document.querySelectorAll('.play-btns-2');

// //     playButtons2.forEach(playBtn2 => {
// //       playBtn2.addEventListener('click', function () {
// //         // Get the parent container
// //         const container2 = playBtn2.closest('li.video-wrapper');

// //         // Find the corresponding video container, image, and video
// //         const videoContainer2 = container2.querySelector('.main-tab-video');
// //         const image2 = container2.querySelector('.video-img');
// //         const video = videoContainer2.querySelector('video');

// //         // Set the video height to match the image height
// //         const imageHeight = image2.offsetHeight; // Get the height of the image
// //         video.style.height = `${imageHeight}px`; // Apply the height to the video tag

// //         // Hide the image and play button, show the video container
// //         image2.style.display = 'none';
// //         playBtn2.style.display = 'none';
// //         videoContainer2.style.display = 'block';

// //         // Play the video
// //         if (video) {
// //           video.play();
// //         }
// //       });
// //     });
// //   });




// Userback = window.Userback || {};
// Userback.access_token =
//   "4465|17969|0pC59czd68HZ897LGv6kO5wwVnhWaGlmymPyChuoHi8bwBWuKB";
// (function (id) {
//   var s = document.createElement("script");
//   s.async = 1;
//   s.src = "https://static.userback.io/widget/v1.js";
//   var parent_node = document.head || document.body;
//   parent_node.appendChild(s);
// })("userback-sdk");

document.addEventListener("DOMContentLoaded", function () {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check for iOS devices
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        var boxes = document.querySelectorAll(".box-fixed");
        boxes.forEach(function (box) {
            box.classList.add("ios-device");
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
  var bgElements = document.querySelectorAll('.hero-item');
  
  bgElements.forEach(function(el) {
    var mobileImage = el.getAttribute('data-mobile-image');
    
    function updateBackgroundImage() {
      if (window.innerWidth < 768 && mobileImage) {
        el.style.backgroundImage = 'url(' + mobileImage + ')';
      } else {
        // Revert to desktop image if screen is larger
        var desktopImage = el.getAttribute('style').match(/url\(([^)]+)\)/)[1];
        el.style.backgroundImage = 'url(' + desktopImage + ')';
      }
    }

    // Initial check on load
    updateBackgroundImage();

    // Update on window resize
    window.addEventListener('resize', updateBackgroundImage);
  });
});




jQuery(document).ready(function ($) {

/*// Hide all video-main-content initially
$('.video-main-content').hide();

// Show the first video-main-content on load
$('.video-main-content').first().fadeIn();

// Add active class to the first tab button on load
$('.video-tabbings li a').first().addClass('active');

// Tab functionality
$('.video-tabbings li a').on('click', function (e) {
    e.preventDefault();

    // Remove active class from all tab buttons
    $('.video-tabbings li a').removeClass('active');

    // Add active class to the clicked tab button
    $(this).addClass('active');

    // Get the index of the clicked tab button
    let index = $(this).parent().index();

    // Hide all video-main-content
    $('.video-main-content').hide();

    // Fade in the corresponding video-main-content
    $('.video-main-content').eq(index).fadeIn(400); // Adjust duration as needed
});*/

$('span.price-item').each(function() {
  var priceText = $(this).text();
  if (priceText.includes("Von")) {
    // Remove or hide "Von" by replacing it with an empty string
    $(this).text(priceText.replace("Von", "").trim());
  }
});

  
  let buttons = jQuery("a[class^='btn-']");

  buttons.each(function () {
    let btn = jQuery(this);
    let text = btn.find("span").text().trim();
    if (text === "") {
      btn.remove();
    }
  });

 //  if($(".menu-drawer__menu").hasClass('submenu-open')){
 //      $(".shopify-app-block").addClass("hidden");
 //      $(".shopify-app-block").hide();
 //      $(".header__icons").hide();
 // }

  if ($(window).width() > 1023) {
      var body = $("body").outerWidth();
      var contain = $(".requirement-section .container").innerWidth();
      var less = body - contain;
      var total = less / 2;
      $(".feedback-sec .feedback-col").css('margin-left', total);
      $(".hero-slider .owl-nav").css('margin-right', total);
   }

    $('.ba-slider').owlCarousel({
      center: true,
      loop:true,
      nav:true,
      navText: ["<img src='https://cdn.shopify.com/s/files/1/0673/5806/4951/files/arrow-slider.png'>","<img src='https://cdn.shopify.com/s/files/1/0673/5806/4951/files/arrow-slider.png'>"],
      margin:100,
      responsiveClass:true,
      responsive:{
       0:{
            items:1
        },
        600:{
            margin:60,
            items:2
        },
        1025:{
            items:2.7
        }
      }
  });

  $('.feedback-slider').owlCarousel({
      loop:true,
      margin:20,
      nav:true,
      navText: ["<img src='https://cdn.shopify.com/s/files/1/0673/5806/4951/files/arrow-slider.png'>","<img src='https://cdn.shopify.com/s/files/1/0673/5806/4951/files/arrow-slider.png'>"],
      dots: false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1025:{
              items:2.8
          }
      }
  });

  // $(".header__search .modal__toggle svg").click(function(){
  //   $(".gt_switcher_wrapper").hide();
  // });

  // $(".search-modal__close-button").click(function(){
  //   $(".gt_switcher_wrapper").show();
  // });

  $('.usp-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay: true,
    autoWidth:true,
    autoHeight: false,
    slideTransition: 'linear',
    autoplayTimeout: 6000,
    autoplaySpeed: 6000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1.2,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        },
        1200:{
            items:3.5,
        },
        1700:{
            items:5,
        }
    }
});

  var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

  // var owl = $(".hero-slider");
  // owl.owlCarousel({
  //   items: 1,
  //   margin: 0,
  //   loop: false,
  //   nav: true,
  //   autoplay: true,
  //   autoplayTimeout: 8600,
  //   autoplayHoverPause: false,
  //   dots: false,
  //   dotsData: false,
  //   navText: ["<img src='https://cdn.shopify.com/s/files/1/0673/5806/4951/files/arrow-slider.png'>","<img src='https://cdn.shopify.com/s/files/1/0673/5806/4951/files/arrow-slider.png'>"],
  // });

  // $(".hero-slider").append('<div class="custom-nav-wrapper container"></div>');
  // $(".custom-nav-wrapper").append($(".owl-prev"));
  // $(".custom-nav-wrapper").append($(".owl-dots"));
  // $(".custom-nav-wrapper").append($(".owl-next"));

  var owl = $(".hero-slider2");
  owl.owlCarousel({
    items: 2.25,
    margin: 40,
    loop: true,
    nav: true,
    navText: ["<img src='https://cdn.shopify.com/s/files/1/0673/5806/4951/files/arrow-slider.png'>","<img src='https://cdn.shopify.com/s/files/1/0673/5806/4951/files/arrow-slider.png'>"],
    autoplay: false,
    autoplayTimeout: 8600,
    autoplayHoverPause: false,
    dots: false,
    dotsData: false,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      768: {
        items: 1.75,
        margin: 20,
      },
      1024: {
        items: 2.25,
        margin: 20,
      },
      1280: {
        items: 2.5,
        margin: 40,
      },
    },
  });

  // var owl = $(".product-box-text-slider");
  // owl.owlCarousel({
  //   items: 4,
  //   margin: 20,
  //   loop: true,
  //   nav: false,
  //   autoplay: false,
  //   autoplayTimeout: 8600,
  //   autoplayHoverPause: false,
  //   dots: false,
  //   dotsData: false,
  //   navText: [
  //     "<i class='fa fa-arrow-left'></i>",
  //     "<i class='fa fa-arrow-right'></i>",
  //   ],
  //   responsive: {
  //     0: {
  //       items: 2,
  //     },
  //     768: {
  //       items: 2,
  //     },
  //     1280: {
  //       items: 3.5,
  //     },
  //   },
  // });

  function adjustPadding() {
    if ($(window).width() > 1023) {
      var body = $("body").outerWidth();
      var contain = $(".hero-section .container").innerWidth();
      var less = body - contain;
      var total = less / 2;
      $(".second-section").css("padding-left", total);
    }
    else {
      $(".second-section").css("padding-left", ""); // Reset for smaller screens
    }
  }

  $(document).ready(adjustPadding);
  $(window).on("resize", adjustPadding);
/*
  $(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
      $(".header-wrapper").addClass("backgo");
      $(".usp-slider").addClass("hide-slider");                             
      // $(".gt_switcher_wrapper").addClass("stick");
    } else {
      $(".header-wrapper").removeClass("backgo");
      $(".usp-slider").removeClass("hide-slider"); 
      // $(".gt_switcher_wrapper").removeClass("stick");
    }
  });
  if ($(this).scrollTop() > 10) {
    $(".header-wrapper").addClass("backgo");
    $(".usp-slider").addClass("hide-slider"); 
    // $(".gt_switcher_wrapper").addClass("stick");
    
  } else {
    $(".header-wrapper").removeClass("backgo");
    $(".usp-slider").removeClass("hide-slider"); 
    // $(".gt_switcher_wrapper").removeClass("stick");
  }*/

  $(".outer-popup").hide();

  $(".top").on("click", function () {
    var articleId = $(this).data("article-id");
    $(".outer-popup[data-article-id='" + articleId + "']").show();
    $("html").toggleClass("overflow-hidden");
  });

  $(".outer-popup" || ".outer-popup .close-btn").on("click", function () {
    $(this).hide();
    $("html").toggleClass("overflow-hidden");
  });


  // $(".you-tube-popup").hide();

  // $(".video-img").on("click", function () {
  //     var articleId = $(this).data("article-id");  // Use data-article-id from the .video-img div
  //     $(".you-tube-popup[data-article-id='" + articleId + "']").show();  // Show the matching popup
  //     $("html").addClass("overflow-hidden");
  // });
  
  // $(".you-tube-popup, .you-tube-popup .close-btn").on("click", function () {
  //     $(this).closest(".you-tube-popup").hide();  // Hide the closest popup
  //     $("html").removeClass("overflow-hidden");
  // });

  // $(".training-popup").hide();

  // $(".training-video-contain").on("click", function () {
  //     var articleId = $(this).data("article-id");  // Use data-article-id from the .video-img div
  //     $(".training-popup[data-article-id='" + articleId + "']").show();  // Show the matching popup
  //     $("html").addClass("overflow-hidden");
  // });
  
  // $(".training-popup, .training-popup .close-btn").on("click", function () {
  //     $(this).closest(".training-popup").hide();  // Hide the closest popup
  //     $("html").removeClass("overflow-hidden");
  // });


  $(".full-video-popup").hide();

  $(".play-btn").on("click", function () {
      var articleId = $(this).data("article-id");  // Use data-article-id from the .video-img div
      $(".full-video-popup[data-article-id='popup']").show();  // Show the matching popup
      $("html").addClass("overflow-hidden");
  });
  
  $(".full-video-popup, .full-video-popup .close-btn").on("click", function () {
      $(this).closest(".full-video-popup").hide();  // Hide the closest popup
      $("html").removeClass("overflow-hidden");
  });





  var testi_owl1 = $(".testimonial-slider");
  testi_owl1.owlCarousel({
    items: 1.5,
    margin: 0,
    loop: true,
    nav: true,
    center: true,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    dots: false,
    autoplayHoverPause: true,
    navText: [
      "<img src='https://cdn.shopify.com/s/files/1/0643/9344/5421/files/arrow-gray.png?v=1724679292'>",
      "<img src='https://cdn.shopify.com/s/files/1/0643/9344/5421/files/arrow-gray.png?v=1724679292'>",
    ],
    responsive: {
      0: {
        items: 1,
        margin: 20,
      },
      600: {
        items: 1,
        nav: true,
        margin: 20,
      },
      1280: {
        items: 1.5,
        margin: 20,
      },
      1660: {
        items: 1.5,
        margin: 0,
      },
    },
  });

  // setTimeout(function() {
  //   $(".testimonial-slider").find('.owl-nav').removeClass("disabled");
  // }, 1000 );

  var testi_owl = $(".product-slider");
  testi_owl.owlCarousel({
    items: 3,
    margin: 20,
    loop: true,
    nav: true,
    center: true,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    dots: false,
    autoplayHoverPause: true,
    navText: [
      "<img src='https://cdn.shopify.com/s/files/1/0643/9344/5421/files/Arrow_Right.png?v=1724691815'>",
      "<img src='https://cdn.shopify.com/s/files/1/0643/9344/5421/files/Arrow_Right.png?v=1724691815'>",
    ],
    responsive: {
      0: {
        items: 1.1,
        margin: 20,
        center: false,
      },
      600: {
        items: 2,
        margin: 20,
        center: false,
      },
      1024: {
        items: 3,
        margin: 20,
      },
    },
  });

  setTimeout(function () {
    var mediaListWidth = $(".product ul.product__media-list").width();
    if ($(window).width() <= 712) {
      mediaListWidth -= 40;
    }
    $(".product ul.product__media-list li.product__media-item").css(
      "min-width",
      mediaListWidth
    );
  }, 1500);

  var maxHeight = 0;
  $("section.product-section-2 .products a .img-box").each(function () {
    var currentHeight = $(this).height();
    if (currentHeight > maxHeight) {
      maxHeight = currentHeight;
    }
  });
  // $("section.product-section-2 .products a .img-box").height(maxHeight);

  // setTimeout(function () {
  //   $("section.product-section-2.all-products .products .col-md-4")
  //     .hide()
  //     .slice(0, 9)
  //     .show();
  //   $("section.product-section-2.all-products a.btn-red").on(
  //     "click",
  //     function () {
  //       $("section.product-section-2.all-products .products .col-md-4:hidden")
  //         .slice(0, 9)
  //         .fadeIn();
  //       if (
  //         $("section.product-section-2.all-products .products .col-md-4:hidden")
  //           .length === 0
  //       ) {
  //         $(this).hide();
  //       }
  //     }
  //   );
  // }, 1000);

  $(
  ".Meet-The-Team .item .img-box, .Meet-The-Team .item .team_read_more"
    ).click(function () {
      var id = $(this).data("id");
      var popup = $('.Meet-The-Team-popup[data-id="' + id + '"]');
      popup.fadeIn();
      $("html").toggleClass("overflow-hidden");
    
      var innerHeight = popup.find(".inner").height();
      var topHeight = popup.find(".top").height();
      var bottomHeight = innerHeight - topHeight;
    
      if ($(window).width() > 1660) {
        bottomHeight -= 150;
      } else if ($(window).width() > 1024) {
        bottomHeight -= 90;
      } else if ($(window).width() > 989) {
        bottomHeight -= 120;
      } else if ($(window).width() > 712) {
        bottomHeight -= 100;
      } else if ($(window).width() > 320) {
        bottomHeight -= 40;
      }
    
      // Set the height for the bottom section of the currently opened popup
      popup.find(".inner .bottom").css("height", bottomHeight);
    });
    
    $(".Meet-The-Team-popup .close-btn").click(function () {
      $(this).closest(".Meet-The-Team-popup").fadeOut();
      $("html").toggleClass("overflow-hidden");
    });


  $("section.podcasts-section.all-podcasts .podcasts .podcast")
    .hide()
    .slice(0, 6)
    .show();
  $("section.podcasts-section.all-podcasts .load-more-podcasts").click(
    function (e) {
      e.preventDefault();
      $("section.podcasts-section.all-podcasts .podcasts .podcast:hidden")
        .slice(0, 6)
        .show();
      if (
        $("section.podcasts-section.all-podcasts .podcasts .podcast:hidden")
          .length === 0
      ) {
        $(this).hide();
      }
    }
  );

  // $("section.blogs-section ul.blogs li.blog-item").hide().slice(0, 3).show();
  // $("section.blogs-section a.btn-red.load-more-blogs").click(function (e) {
  //   e.preventDefault();
  //   $("section.blogs-section ul.blogs li.blog-item:hidden").slice(0, 6).show();
  //   if ($("section.blogs-section ul.blogs li.blog-item:hidden").length === 0) {
  //     $(this).hide();
  //   }
  // });

  // var siteUrl = window.location.origin;
  // if (window.location.href === siteUrl + "/pages/podcasts") {
  //   window.location.href = "https://open.spotify.com/show/3JQFECq2CFYpSdrIfuKGuK";
  // } else if (window.location.href === siteUrl + "/blogs/news/") {
  //   window.location.href = siteUrl + "/pages/blogs";
  // } else if (window.location.href === siteUrl + "/products/") {
  //   window.location.href = siteUrl + "/pages/digitale-produkte";
  // } else if (window.location.href === siteUrl + "/products") {
  //   window.location.href = siteUrl + "/pages/digitale-produkte";
  // } else if (window.location.href === siteUrl + "/collections/all") {
  //   window.location.href = siteUrl + "/pages/digitale-produkte";
  // }

  // $("#accordionExample .accordion-item:first-child button").click();
  // $("#accordion1 .accordion-item:first-child button").click();
  $(".odd_number_blocks .accordion-item:first-child button").click();

  if ($(window).width() <= 713) {
    $("ul.menu-drawer__menu").after($("header .header__icons"));
  }

  if ($(window).width() > 1023) {
    var body = $("body").outerWidth();
    var contain = $("section.banner-section .container").innerWidth();
    var less = body - contain;
    var total = less / 2;
    // $(".product .col-md-6.product__media-wrapper").css('padding-left', total);
    $(".product").css("padding-left", total);
    $(".product .col-md-6.product__info-wrapper .product__info-container").css(
      "padding-right",
      total
    );
  }




  jQuery.fn.isInViewport = function () {
    if(jQuery(this).offset()) {
      var elementTop = jQuery(this).offset().top;
      var elementBottom = elementTop + jQuery(this).outerHeight();
      var viewportTop = jQuery(window).scrollTop();
      var viewportBottom = viewportTop + jQuery(window).height();
      return elementBottom > viewportTop && elementTop < viewportBottom;
    }
};

jQuery(window).on("resize scroll", function () {
    var timeline = jQuery(".timeline-contain");
    if (timeline.isInViewport()) {
        const timelineElement = timeline[0]; // Get the native DOM element
        const timelineRect = timelineElement.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Calculate scroll progress
        const scrollProgress = Math.max(0, Math.min(1, (viewportHeight - timelineRect.top) / timelineRect.height));

        // Update CSS variable based on scroll progress
        const newHeight = scrollProgress * timelineRect.height;
        timeline.css("--after-height", `${newHeight}px`);
    } else {
        // Reset height when out of view
        timeline.css("--after-height", `0px`);
    }
});


jQuery.fn.isInViewportForNumbers = function () {
    var elementTop = jQuery(this).offset().top;
    var elementBottom = elementTop + jQuery(this).outerHeight();
    var viewportTop = jQuery(window).scrollTop();
    var viewportBottom = viewportTop + jQuery(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};

jQuery(window).on("resize scroll", function () {
    jQuery(".t-number-block .number").each(function () {
        const $this = jQuery(this);

        if ($this.isInViewportForNumbers()) {
            if (!$this.hasClass("orange-num")) { // Prevent duplicate timeouts
                setTimeout(() => {
                    $this.addClass("orange-num");
                }, 300); // Delay in milliseconds
            }
        } else {
            $this.removeClass("orange-num"); // Optionally remove the class immediately when out of view
        }
    });
});





  

  const container = document.querySelector(".product-box-text-slider");
  if (container) {
    let startY;
    let startX;
    let scrollLeft;
    let scrollTop;
    let isDown;
  
    container.addEventListener("mousedown", (e) => mouseIsDown(e));
    container.addEventListener("mouseup", (e) => mouseUp(e));
    container.addEventListener("mouseleave", (e) => mouseLeave(e));
    container.addEventListener("mousemove", (e) => mouseMove(e));
  
    function mouseIsDown(e) {
      isDown = true;
      startY = e.pageY - container.offsetTop;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      scrollTop = container.scrollTop;
    }
    function mouseUp(e) {
      isDown = false;
    }
    function mouseLeave(e) {
      isDown = false;
    }
    function mouseMove(e) {
      if (isDown) {
        e.preventDefault();
        //Move vertcally
        const y = e.pageY - container.offsetTop;
        const walkY = y - startY;
        container.scrollTop = scrollTop - walkY;
  
        //Move Horizontally
        const x = e.pageX - container.offsetLeft;
        const walkX = x - startX;
        container.scrollLeft = scrollLeft - walkX;
      }
    }
  }
});


// document.addEventListener("DOMContentLoaded", function () {
//     const urlParams = new URLSearchParams(window.location.search);

//     // Check for success parameter
//     if (urlParams.get("customer_posted") === "true") {
//         showPopup("Danke für deine Anmeldung!");
//     }

//     // Check for error parameter
//     if (urlParams.get("form_type") === "customer" && window.location.hash === "#contact_form") {
//         showPopup("Sie sind bereits abonniert!");
//     }

//     // Function to display the popup
//     function showPopup(message) {
//         const popup = document.getElementById("popupMessage");
//         const popupContainer = document.getElementById("successPopup");

//         popup.textContent = message; // Set the message dynamically
//         popupContainer.style.display = "flex";
//     }

//     // Close the popup when clicking the close button
//     document.getElementById("closePopup").addEventListener("click", function () {
//         const popupContainer = document.getElementById("successPopup");
//         popupContainer.style.display = "none";
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
  setInterval(() => {
    const links = document.querySelectorAll(".delayed-redirect");

    links.forEach(link => {
      const frequentText = link.getAttribute("data-query"); // Fetch frequent text from data attribute
      const shopUrl = link.getAttribute("href").split('?')[0]; // Get the base URL of the link
      const translatedText = link.textContent.trim(); // Use the current visible text for the query

      // Update the href to use the current visible text (translated)
      link.href = `${shopUrl}?q=${encodeURIComponent(translatedText)}`;
    });
  }, 5000); // Runs every 5 seconds
});



  document.addEventListener('DOMContentLoaded', function () {
    // Get all the play buttons
    const playButtons = document.querySelectorAll('.play-btns');

    playButtons.forEach(playBtn => {
      playBtn.addEventListener('click', function () {
        // Get the parent container
        const container = playBtn.closest('.training-video-contain');

        // Find the corresponding video container, image, and video
        const videoContainer = container.querySelector('.training-videos-con');
        const image = container.querySelector('.training-img');
        const video = videoContainer.querySelector('video');

        // Set the video height to match the image height
        const imageHeight = image.offsetHeight; // Get the height of the image
        video.style.height = `${imageHeight}px`; // Apply the height to the video tag

        // Hide the image and play button, show the video container
        image.style.display = 'none';
        playBtn.style.display = 'none';
        videoContainer.style.display = 'block';

        // Play the video
        if (video) {
          video.play();
        }
      });
    });
  });


document.addEventListener('submit', function(e) {
    var emailInput = document.querySelector('input[type="email"]:not([no-default-script])');
    console.log("emailInput", emailInput)
    if (emailInput && !emailInput.value) {
        var currentLang = document.documentElement.lang; // get current language
        if (currentLang === 'es') { // if Spanish, for example
            emailInput.setCustomValidity('Bitte fülle dieses Feld aus.');
        } else {
            emailInput.setCustomValidity('Bitte fülle dieses Feld aus.');
        }
    }
});




// document.addEventListener('DOMContentLoaded', function () {
//     // Get all the play buttons
//     const playButtons2 = document.querySelectorAll('.play-btns-2');

//     playButtons2.forEach(playBtn2 => {
//       playBtn2.addEventListener('click', function () {
//         // Get the parent container
//         const container2 = playBtn2.closest('li.video-wrapper');

//         // Find the corresponding video container, image, and video
//         const videoContainer2 = container2.querySelector('.main-tab-video');
//         const image2 = container2.querySelector('.video-img');
//         const video = videoContainer2.querySelector('video');

//         // Set the video height to match the image height
//         const imageHeight = image2.offsetHeight; // Get the height of the image
//         video.style.height = `${imageHeight}px`; // Apply the height to the video tag

//         // Hide the image and play button, show the video container
//         image2.style.display = 'none';
//         playBtn2.style.display = 'none';
//         videoContainer2.style.display = 'block';

//         // Play the video
//         if (video) {
//           video.play();
//         }
//       });
//     });
//   });




Userback = window.Userback || {};
Userback.access_token =
  "4465|17969|0pC59czd68HZ897LGv6kO5wwVnhWaGlmymPyChuoHi8bwBWuKB";
(function (id) {
  var s = document.createElement("script");
  s.async = 1;
  s.src = "https://static.userback.io/widget/v1.js";
  var parent_node = document.head || document.body;
  parent_node.appendChild(s);
})("userback-sdk");



// el.style.overflow = 'auto';
// window.requestAnimationFrame(() => el.scrollTo({ left: 100, behavior: 'smooth' }));
// setTimeout(() => (el.style.overflow = 'hidden'), 1000);