$(window).scroll( function() { 
	$(".card").each(function(e){
		var bottom_of_object = $(this).position().top + $(this).outerHeight();
		var bottom_of_window = $(window).scrollTop() + $(window).height();

		/*if the object is completely visible, fade it in*/
		if( bottom_of_window > bottom_of_object - 180 ){
			$(this).addClass("flow-in");
		}
	});
});
