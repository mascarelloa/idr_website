

  $(window).scroll( function(){

    /* Check the location of each desired element */
    $('.chart').each( function(i){
var el = $(this),
speed = el.data('speed');

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it in */
        if( bottom_of_window > bottom_of_object ){

            $('.chart').easyPieChart({
                size: 150,
                barColor: "#f9bfc8",
                scaleLength: 0,
                lineWidth: 15,
                trackColor: "#f2f2f2",
                lineCap: "round",
                animate: 2500,
              });

        }

    }); 

});


$(document).ready(function () {
	$('.slideset').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 850,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			}
		}]
	});
});


function toggleMenu() {
  $("#hamburgerMenu").toggleClass("collapsed");  
  $(".aa-mobile-overlay").animate({
        height: "toggle",
        opacity: "toggle"
    }, 300);
}




$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});






const slideshow = document.querySelector('.slide-wrap');

if (slideshow != null ) { //make sure we don't run this script if the slideshow is not present

  let slides = document.querySelectorAll('.slide-entry'),
slideCount = slides.length,
currentSlide = 0,
slideHeight = null,
initialHeight = slides[0].clientHeight;

slides[0].classList.add('active'); //on load, activate the first slide

function moveToSlide(n) { // set up our slide navigation functionality
  slides[currentSlide].className = 'slide-entry';
  currentSlide = (n+slideCount)%slideCount;
  slides[currentSlide].className = 'slide-entry active';
  slideHeight = slides[currentSlide].clientHeight;
  slideshow.style.height = slideHeight + 'px';
  window.addEventListener('resize', function(){
    resizedSlideHeight = slides[currentSlide].clientHeight;
    slideshow.style.height = resizedSlideHeight + 'px';
  });
}

function nextSlide(e){
  moveToSlide(currentSlide+1);
  let code = e.keyCode;
  if( code == 39 ) {
    moveToSlide(currentSlide+1);
  }
};
function prevSlide(e){
  moveToSlide(currentSlide+-1);
  let code = e.keyCode;
  if( code == 37 ) {
    moveToSlide(currentSlide+-1);
  }
};

const slideHandlers = {
  nextSlide: function(element){
    document.querySelector(element).addEventListener('click',nextSlide);
    document.body.addEventListener('keydown',nextSlide, false);
  },
  prevSlide: function(element){
    document.querySelector(element).addEventListener('click',prevSlide);
    document.body.addEventListener('keydown',prevSlide, false);
  }
}

slideHandlers.nextSlide('#next-slide');
slideHandlers.prevSlide('#prev-slide');

// Dynamic slideshow height

  slideshow.style.height = initialHeight + 'px'; //on load, set the height of the slider to the first active slide

window.addEventListener('resize', function(){ // adjust the height of the slidehow as the browser is resized
  let resizedHeight = slides[0].clientHeight;
  slideshow.style.height = resizedHeight + 'px';
});

// Detect swipe events for touch devices, credit to Kirupa @ https://www.kirupa.com/html5/detecting_touch_swipe_gestures.htm
let initialX = null;
let initialY = null;
function startTouch(e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
};
function moveTouch(e) {
  if (initialX === null) {
    return;
  }
  if (initialY === null) {
    return;
  }
  let currentX = e.touches[0].clientX;
  let currentY = e.touches[0].clientY;
  let diffX = initialX - currentX;
  let diffY = initialY - currentY;
  if (Math.abs(diffX) > Math.abs(diffY)) {
    if (diffX > 0) {
// swiped left
moveToSlide(currentSlide+1);
} else {
// swiped right
moveToSlide(currentSlide+-1);
}
}
initialX = null;
initialY = null;
e.preventDefault();
};

slideshow.addEventListener("touchstart", startTouch, false);
slideshow.addEventListener("touchmove", moveTouch, false);  

// optional autoplay function  
  setInterval(function(){
    nextSlide();
  },8000); 

} //end slideshow



// var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), options)



// jQuery(document).on('ready', function() {
//   jQuery(".center").slick({
//     dots: false,
//     infinite: true,
//     centerMode: true,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//    mobileFirst:true,
//               responsive: [
//               {
//                 breakpoint: 1024,
//                 settings: {
//                   slidesToShow: 3,
//                   slidesToScroll: 1,
//                   infinite: true,
//                   dots: false
//                 }
//               },
//               {
//                 breakpoint: 765,
//                 settings: {
//                  slidesToShow: 2,
//                   slidesToScroll: 1,
//                 }
//               },
              
//                 {
//                 breakpoint: 480,
//                 settings: {
//                   slidesToShow: 1,
//                   slidesToScroll: 1,
//                 }
//               },
//               {
//                 breakpoint: 340,
//                 settings: {
//                   slidesToShow: 1,
//                   slidesToScroll: 1,
//                 }
//               },
//             ]
    
//   });
    
// });




const swiper = new Swiper('.swiper', {
  spaceBetween: 50,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});