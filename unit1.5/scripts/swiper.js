new Swiper('.repair-brands__swiper-container', {
   
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   }, 

   slideToClickedSlide: true, 

   autoWidth: true,

   slidesPerView: 'auto',
});




// if (typeof screen.orientation == 'undefined') {
//    document.querySelector('.swiper-wrapper').classList.remove('swiper-wrapper');
// }