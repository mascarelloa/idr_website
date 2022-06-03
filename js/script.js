

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



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}






