
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");


accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {

        // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

        // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
        // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
        //   currentlyActiveAccordionItemHeader.classList.toggle("active");
        //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        // }

        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }

    });
});


var swiper2 = new Swiper(".swiper", {
    loop: false,
   grabCursor: true,
   // cssMode: true,
   //allowTouchMove: true,
  //  freeMode: true,
  noSwiping: false,
    spaceBetween: 25,
    breakpoints: {
        0: {
            slidesPerView: 1.15
        },
        450: {
            slidesPerView: 1.4,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        }
    }, 
    pagination: {
        el: ".swiper-pagination",
        clickable: false,
    },
   
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
})

// подмена номера

let phone = document.querySelector(".phone")
let contentY = '<a class="phoneid" href="tel: +74995055627">+7 499 505-56-27</a>';
let contentG = '<a class="phoneid" href="tel: +74995055612">+7 499 505-56-12</a>';

const queryString = window.location.search;

let paramString = queryString.split('&')[1];

let ourSubstring = "yandex";
let ourSubstring2 = "google";

if (queryString.includes(ourSubstring)) {
    phone.innerHTML = contentY
} else if (queryString.includes(ourSubstring2)) {
    phone.innerHTML = contentG
}