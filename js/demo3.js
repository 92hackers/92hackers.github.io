define( ['./jquery', './jssor'], function(){
	$(document).ready(function(){
		//init.
		$('#wrap').height( window.innerHeight ).width( window.innerWidth );
		
		// slide. use jssor.slider
		$.each($('.empty-point'), function( index, item ){
			$(this).on({
				mouseover: function(){
					$(this).css('opacity', 1);
				}, 
				mouseleave: function(){
					$(this).css('opacity', 0.4);
				}
			})
		})
		$('.empty-point').eq(1).click( function(){

		} )

	})
} )
