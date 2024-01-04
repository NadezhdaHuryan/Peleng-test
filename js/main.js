const headerBurger = document.querySelector(".burger");
const navMobile = document.querySelector(".hidden__menu");
const hiddenLi = document.querySelector(".hidden__menu li.dropdown");
const hiddenLink = document.querySelectorAll(".hidden__menu li.dropdown a");

headerBurger.addEventListener("click", () => {
    headerBurger.classList.toggle("burger--active");
    navMobile.classList.toggle("hidden__menu--active");
    document.body.classList.toggle("body--lock");
    
});
if (hiddenLink.length>0) {
    hiddenLink.forEach(item => {
        item.addEventListener("click", function(e) {
            e.preventDefault;
            this.parentElement.classList.toggle("active")
        })
    }) 

    
}

const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });