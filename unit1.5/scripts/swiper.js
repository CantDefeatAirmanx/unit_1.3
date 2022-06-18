{
   let isMobileDevice = window.matchMedia(
      "(max-width: 724px) and (min-resolution: 190dpi)"
   ).matches;

   if (isMobileDevice) {
      new Swiper(".repair-brands__swiper-container", {
         pagination: {
            el: ".swiper-pagination",
            clickable: true,
         },

         slideToClickedSlide: true,

         autoWidth: true,

         slidesPerView: "auto",
      });
   }
}

// "only screen and (max-width: 760px)"

// if (typeof screen.orientation == 'undefined') {
//    document.querySelector('.swiper-wrapper').classList.remove('swiper-wrapper');
// }
