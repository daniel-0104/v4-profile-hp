const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
});

window.addEventListener('scroll',reveal);
function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoints = 140;

    if(revealtop < windowheight - revealpoints){
      reveals[i].classList.add('active');
    }else{
      reveals[i].classList.remove('active');
    }
  }
}



var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: false,
  centerSlide: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    770: {
        slidesPerView: 2,
    },
    1000: {
        slidesPerView: 3,
    }
  }
});