// const scrollSpy = new bootstrap.ScrollSpy(document.body, {
//     target: '#navbar-example'
// });

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
  slidesPerView: 1,
  spaceBetween: 25,
  loop: true,
  centerSlide: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  }
});


function sendEmail(event) {
  event.preventDefault();
    if( document.getElementById('name').value != "" && document.getElementById('phone').value != "" && 
        document.getElementById('email').value != "" && document.getElementById('message').value != "") 
    {
        let params = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            message:document.getElementById('message').value
        };

        var phonePattern = /^(09|\+959)\d{9}$/;
        if (!phonePattern.test(params.phone)) {
          alert("Please enter a valid phone number");
          return;
        }

        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(params.email)) {
            alert("Please enter a valid email address");
            return;
        }

        emailjs.send("service_os3ctl7","template_dxcqnqf",params)
        .then((res) => {
            document.getElementById('name').value = "";
            document.getElementById('phone').value = "";
            document.getElementById('email').value = "";
            document.getElementById('message').value = "";
            alert("Your message has been sent successfully . Status code : " + res.status);
        });
    }   
    else 
    {
      alert("please fill all information!!!");
    }
}