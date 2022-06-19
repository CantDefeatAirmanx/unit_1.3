{
   let brandsList = document.querySelector(".repair-brands__list");
   let listHandlerBtn = document.querySelector(".repair-brands__showbtn");

   listHandlerBtn.addEventListener("click", function () {
      if (brandsList.classList.contains("repair-brands__list--opened")) {
         brandsList.classList.remove("repair-brands__list--opened");
         brandsList.classList.add("repair-brands__list--closed");
      } 

      else if (brandsList.classList.contains("repair-brands__list--closed")) {
         brandsList.classList.remove("repair-brands__list--closed");
         brandsList.classList.add("repair-brands__list--opened");
      }
   });
}
