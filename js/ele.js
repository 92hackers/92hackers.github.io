define(['jquery', 'jssor'], function(){
	$(document).ready(function(){
		var foodItems = $('.food-item');
		var switchItems = $('.switch-category');
		var triangles = $('.triangle');

		/*function throttle(method, context){
			clearTimeout( method.tId );

			method.tId = setTimeout(function(){
				method.call(context);
			}, 500);
		};*/

		$.each(foodItems, function(index, item){
			$(this).on({
				mouseover: function( event ){
						$(switchItems[index]).show();
						$(this).css('background-color', '#1e89e0');
						$(this).find('a').css('color', '#fff');
						$(triangles[index]).show();
				}, 
				mouseout: function(event){
						$(switchItems[index]).hide();
						$(this).css('background-color', '#fff');
						$(this).find('a').css('color', '#666');
						$(triangles[index]).hide();
				}
			})
		})
		$.each(switchItems, function(index, item){
			$(this).on({
				mouseover: function( event ){
					$(this).show();
					$(foodItems[index]).css('background-color', '#1e89e0');
					$(foodItems[index]).find('a').css('color', '#fff');
					$(triangles[index]).show();
				}, 
				mouseout: function( event ){
						$(this).hide();
						$(foodItems[index]).css('background-color', '#fff');
						$(foodItems[index]).find('a').css('color', '#666');
						$(triangles[index]).hide();
				}
			})
		})
		// slider.
		var options = {
			$AutoPlay: true, 
			$ArrowKeyNavigation: true, 
			$PlayOrientation: 1, 
			$DragOrientation: 0, 

			$BulletNavigatorOptions: {
				$Class: $JssorBulletNavigator$, 
				$ChanceToShow: 2, 
				$SpacingX: 10, 
				$AutoCenter: 0
			}, 
			$ArrowNavigatorOptions: {
				$Class: $JssorArrowNavigator$, 
				$ChanceToShow: 1, 
				$AutoCenter: 2
			}
		};
		var texts = ['喷香多汁披萨', '美味地三鲜', '正宗回锅肉'];

		var jssor_slider = new $JssorSlider$('new-food', options);
		//jssor_slider1_starter = new $JssorSlider$('new-food');


		function carouselContent( slideindex, fromIndex ){
			var content = $Jssor$.$GetElement('inner-text');
			$Jssor$.$InnerText( content, texts[ slideindex ] );
		}
		jssor_slider.$On( $JssorSlider$.$EVT_PARK, carouselContent );
		var carouselItem = $('.carousel-item');
		var mainFood = [];
		var temp = $('.main-food');
		mainFood[0] = $('#new-food')[0];
		for ( var i = 0; i < temp.size(); i++ ){
			mainFood[i + 1] = temp[i];
		}
		$.each(carouselItem, function(index, item){
			$(this).on('click', function(event){
				if ( index != 0 ){
					jssor_slider.$Pause();
				} else {
					jssor_slider.$Play();
				}
				$(this).css('background-color', '#006bc7');
				$(carouselItem).not($(this)).css('background-color', '#1e89e0');
				$(mainFood[index]).show();
				$(mainFood).not($(mainFood[index])).hide();
			})
			}
		)
		$('.slider-wrap').on({
			mouseover: function(event){
				$('.right-slider').show();
			}, 
			mouseout: function( event ){
				if( !smallSliderMouseMoveFlag ){
					$('.right-slider').hide();
				}
			}
		})
			// middle switch ends.
			// code starts here.
		var group = $('.group');
		var rightSlider = $('.small-slider');
		var originalMousePosition = 0;
		var smallSliderMouseMoveFlag = 0;
		var smallSliderPosition = 0;
		$(rightSlider).on({
			mousedown: function( event ){
				event.preventDefault();
				smallSliderMouseMoveFlag++;
				originalMousePosition = event.clientY;
				//$(this).width(20 + 'px');
			} 
			/*mousemove: function( event ){
					if( originalMousePosition ){
						var newPosition = event.clientY;
						var lengthMove = newPosition - originalMousePosition;
						var temp = lengthMove + smallSliderPosition;
						temp = temp < 0 ? 0 : temp;
						temp = temp > 315 ? 315 : temp;
						$(this).css('top', temp + 'px');
						console.log('from mousemove:' + $(this).position().top );
					}
			}, 
			mouseup: function( event ){
				var newPosition = event.clientY;
				var lengthMove = newPosition - originalMousePosition;
				var temp = lengthMove + smallSliderPosition;
				temp = temp < 0 ? 0 : temp;
				temp = temp > 315 ? 315 : temp;
				$(this).css('top', temp + 'px');
				// reinit originalMousePosition.
				originalMousePosition = 0;
				smallSliderPosition = temp;
				console.log( 'From mouseup.originalMousePosition:' + originalMousePosition );
			}*/
		})
		// 用全局flag去判断某个事件的发生与否，然后在相应的事件中更新这个全局flag.
		$('body').on({
			mousemove: function( event ){
				event.preventDefault();
				if ( smallSliderMouseMoveFlag ){
					if( originalMousePosition ){
						var newPosition = event.clientY;
						var lengthMove = newPosition - originalMousePosition;
						var temp = lengthMove + smallSliderPosition;
						temp = temp < 0 ? 0 : temp;
						temp = temp > 315 ? 315 : temp;
						$(this).css('cursor', 'move');
						$(rightSlider).css('top', temp + 'px');
						// group slide.
						var rate = temp / 315;
						var tempGroup = -rate * 920;
						$(group).css('top', tempGroup + 'px');
					}
				}

			}, 
			mouseup: function( event ){
				event.preventDefault();		// to prevent select text.
				$(this).css('cursor', 'default');
				smallSliderMouseMoveFlag = 0;
				originalMousePosition = 0;
				smallSliderPosition = $(rightSlider).position().top;
			}
		})
		// right-carousel switch.

		var rightCarouselItem = $('.right-carousel-item');
		$.each(rightCarouselItem, function(index, item){
			$(this).click(function(event){
				$(this).css('background-color', '#006bc7');
				$(rightCarouselItem).not($(this)).css('background-color', '#1e89e0');
			})
		})
		// switch content.
		$('#right-1').click(function(event){
			$('.slider-wrap').show();
			$('.group').show();
			$('.brand').hide();
		})
		$('#right-2').click(function(event){
			$('.brand').show();
			$('.slider-wrap').hide();
			$('.group').hide();
		})
	})
})
