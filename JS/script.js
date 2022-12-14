// Sticking Header
const header = document.querySelector(".header");
const scrollBtn = document.querySelector(".arrow_btn");
const search = document.querySelector(".search");

const refreshButton = () => {
    if(document.documentElement.scrollTop <= 50){
        console.log(document.body.scrollTop);
        scrollBtn.style.display = "none";
    }
    else {
        scrollBtn.style.display = "block";
    }
};
refreshButton();

scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

window.addEventListener("scroll", () => {
    refreshButton();
    header.classList.toggle("sticky", window.scrollY > 0);
})

search.addEventListener("mouseover", () => {
  search.classList.add("search_focus")
})

// hovering search input
search.addEventListener("mouseout", () => {
  search.classList.remove("search_focus")
})

// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// swiper2
var swiper2 = new Swiper(".Swiper2", {
  slidesPerView: 5,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// swiper_feedback
var swiper_feedback = new Swiper(".swiper_feedback", {
  slidesPerView: 2,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// ---- pagination buttons -----
