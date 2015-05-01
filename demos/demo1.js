/*$(document).ready(function(){
	var temp = 0;	// a global variable records current left value of element #switch-content.
	var countClick = 0;		// a global variable records current clicks of left-mouse.
	var leftChicked = 0;		// to judge if left-arrow-bar has been clicked.
	var rightClicked = 0;		// to judge if right-arrow-bar has been clicked.

	var currentPoint;			// records current clicked point in the points.

	var oldindex = 4;			// records old index of point.

	var distance;			// click point to switch image. distance between oldindex and current index.


	var texts = [{text: '金牛座星座礼物', author: 'by 李大象在哪里'}, {text: '两个人一起走下去', author: 'by 下一站xy'}, {text: '一屋一人一事', author: 'by 柴灼'}, {text: '向左向右', author: 'by 我来自台湾'}, {text: '堆糖周边发售了', author: 'by duitang.com'}];

	var images = ['../images/book.jpeg', '../images/lianggeren.jpeg', '../images/bowl.jpeg', '../images/zuoyou.jpeg', '../images/zhoubian.jpeg'];

	var item = $('.item');		// image
	var points = $('.points').children();
	function init(){
		for( var i = 0; i < item.length; i++ ){
			item.eq(i).find('a').css('background-image', 'url(' + images[i] + ')');
		}
		$('#switch-content').css('left', -1424 + 'px');
	}
	function finalSwitch(){
		countClick++;
		var leftValue = 0;
		var timeCount = 0;
		var switchLeftValue;
		var rightMostImageIndex = 0;
		switchLeftValue = $('#switch-content').css('left');
		switchLeftValue = parseInt( switchLeftValue );		// parseInt() 将字符串转变为整数。
		if ( countClick == 5 ){
			countClick = 0;
			rightMostImageIndex = 4;
		} else {
			rightMostImageIndex = countClick - 1;
		}
		console.log( countClick );
		console.log('switchLeftValue' + switchLeftValue);
		var tempPoint = points.eq( 4 - countClick );
		tempPoint.attr('class', 'empty-point');		// points.
		points.not( tempPoint ).attr('class', 'point');

		// images switch.
		var timeId = setInterval( function(){
			timeCount++;
			var temp;
			leftValue -= 8;
			temp = ( leftValue + switchLeftValue );
			$('#switch-content').css('left', temp + 'px');
			if ( timeCount == 89 ) { clearInterval( timeId ); }
		}, 1 )		// switch one image.

		// append a image to the right most of switch-content element.
			$('#switch-content').append("<div class='item'><a href='#'></a></div>");
			var oldWidth = parseInt( $('#switch-content').css('width') );
			var newWidth = oldWidth + 712;
			$('#switch-content').css('width', newWidth + 'px');
			$('.item').last().find('a').css('background-image', 'url(' + images[rightMostImageIndex] + ')');
	}
	init();
	$('.demo1-content').on({
		mouseenter: function(){
			$('.left-arrow-bar, .right-arrow-bar').show();
		}, 
		mouseleave: function(){
			$('.left-arrow-bar, .right-arrow-bar').hide();
		}
	})
	$('.right-arrow-bar').click( finalSwitch );
	$('.left-arrow-bar').click( {handler: 'left', speed: 8 }, move ).click( changeTextAgainst ).click( changePointAgainst );


	function speedupToLeft(){
		var count = 0;
		var y = setInterval( function(){
			count++;
			temp += 32;
			$('#switch-content').css('left', temp + 'px');
			if ( count == 89 ) clearInterval( y );
		}, 1 );
	};

	function speedupToRight(){
		var count = 0;
		var y = setInterval( function(){
			count++;
			temp -= 32;
			$('#switch-content').css('left', temp + 'px');
			if ( count == 89 ) clearInterval( y );
		}, 1 )
	};
		var leftValue = 0;
	function move( event ){
		var count = 0;
		var speedIn = 0;
		var stopPoint = 0;
		if ( typeof event.data.handler == 'string' && event.data.handler.toString() == 'left' ){
			if ( leftValue == 0 ){
				speedIn = -event.data.speed * 4;
			} else {
				speedIn = event.data.speed;
			}
		} else if ( typeof event.data.handler == 'string' && event.data.handler.toString() == 'right'){
			if ( leftValue <= -2848 ){
				speedIn = event.data.speed * 4;
			} else {
				speedIn = -event.data.speed;
			}
		}			//  判断边界条件。
		var timeId = setInterval( function(){
			count++;
			leftValue = leftValue + speedIn;
			console.log( event.pageX );
			console.log('leftValue:' + leftValue);
			$('#switch-content').css('left', leftValue + 'px');
			if ( count == 89 ) clearInterval( timeId );
			console.log( count );
		}, 1);
	}

	//  points click event.
	var pointNode = $('.points').children();
	$.each( pointNode, function(index, item){
		$(item).click( function(){
			currentPoint = pointNode.index( item );
			console.log( currentPoint );
			$(this).attr('class', 'empty-point');
			pointNode.not(this).attr('class', 'point');

			distance = currentPoint - oldindex;
			console.log('distance: ' + distance);
			specialMove();
			oldindex = currentPoint;

			console.log( index );

			$('#inner-text').text( texts[4 - index].text );
			$('#inner-author').text( texts[4 - index].author );
		} )
	} );


	function specialMove(){
		var count = 0;
		if( distance < 0 ){
			if ( distance == -4 ){
				speedupToRight();
			} else {
				var y = setInterval( function (){
					count++;
					temp -= 8;	
					$('#switch-content').css('left', temp + 'px');
					if ( count == -( 89 * distance ) ) clearInterval( y );
				} )
			}
		} else if ( distance > 0 ) {
			if ( distance == 4 ){
				speedupToLeft();
			} else {
				var z = setInterval( function(){
					count++;
					temp += 8;
					$('#switch-content').css('left', temp + 'px');
					if ( count == ( 89 * distance ) ) clearInterval( z );
				} )
			}
		}
	};

	function changePoint(){
		var temp = -countClick - 1;
		var node = $('.points').children().eq( temp );
		if ( temp == -1 ){
			$('.points').children().not( $('.points').children().eq(-1) ).attr('class', 'point');
			$('.points').children().eq( -1 ).addClass('empty-point').removeClass('point');
		} else {
			node.addClass('empty-point').removeClass('point');
			$('.points').children().not(node).attr('class', 'point');
		}

	}
	function changePointAgainst(){
		var temp = -countClick - 1;
		var node = $('.points').children();
		if ( temp == 4 ){
			node.eq( temp ).addClass('empty-point').removeClass('point');
			node.eq( 1 ).addClass('point').removeClass('empty-point');
			node.eq( temp ).prev().addClass('point').removeClass('empty-point');
		} else if ( temp == 0 ){
			node.eq( temp ).addClass('empty-point').removeClass('point');
			node.eq( temp - 1 ).addClass('point').removeClass('empty-point');
		} else {
			node.eq( temp ).addClass('empty-point').removeClass('point');
			node.eq( temp ).prev().addClass('point').removeClass('empty-point');
		}
	}
	function changeTextAgainst(){
		leftChicked++;
		if ( rightClicked ){
			countClick -= 5;
			rightClicked = 0;
		}
		if ( countClick == -5 ) countClick = 0;
		countClick--;
		var temp = countClick + 5;
		$('#inner-text').text( texts[temp].text );
		$('#inner-author').text( texts[temp].author );
	}
	function changeText(){
		rightClicked++;
		if ( leftChicked ) {
			countClick += 5;
			leftChicked = 0;
		}
		if ( countClick == 4 ){
			countClick = -1;	// because below exists: countClick++; For the reason to make countClick = 0;
		}
		countClick++;
		$('#inner-text').text( texts[countClick].text );
		$('#inner-author').text( texts[countClick].author );
	}
	


	for(var i = 0; i < texts.length; i++){
		console.log( texts[i].text + '\t' + texts[i].author );
	}
})*/

$(document).ready(function(){
	var carousel = $('#switch-content'), 
		currentPosition = parseInt( $('#switch-content').css('left') );
	$('.demo1-content').hover( function(){
		$('.left-arrow-bar').show();
		$('.right-arrow-bar').show();
	}, function(){
		$('.left-arrow-bar').hide();
		$('.right-arrow-bar').hide();
	} );
	function move( event){		// event.data.element
		var	step = 0, 
			temp = 0,
			xelement = event.data.xelement,
			runCount = 0;
		if( event.data.direction == 'left' ){
			step = event.data.speed;
		} else {
			step = -event.data.speed;
		}
		console.log( step);
		var timeId = setInterval( function(){
				runCount++;
				step++;
				temp = step + currentPosition;
				$(xelement).css('left', temp + 'px');
				if ( runCount == 89 ) { clearInterval( timeId ) }
}, 1 );	
		console.log( runCount );
		currentPosition = temp;
		console.log( currentPosition );
}
	$('.right-arrow-bar').click( {xelement: '#switch-content', speed: 8, direction: 'right'} , move );		// 再次强调，事件调用只用名字，不能加括号，传递参数用第一个eventObject就可以了。靠，真是猪头。
	$('.left-arrow-bar').on('click', {xelement: '#switch-content', speed: 8, direction: 'left'}, move);
})
