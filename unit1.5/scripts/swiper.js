{
   let isMobileDevice = window.matchMedia(
      "(max-width: 767.9px) and (min-resolution: 140dpi)"
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





// "(max-width: 767.9px) and (min-resolution: 190dpi)"

