

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