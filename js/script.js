

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