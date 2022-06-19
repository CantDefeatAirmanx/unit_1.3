{
   let isMobileDevice = window.matchMedia(
      "(max-width: 767.9px) and (min-resolution: 150dpi)"
   ).matches;

   let isIphone = window.matchMedia(
      "(max-width: 767.9px) and (-webkit-min-device-pixel-ration: 2), (max-width: 767.9px) and (min-device-pixel-ration: 2)"
   ).matches;

   if (isMobileDevice || isIphone) {
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
