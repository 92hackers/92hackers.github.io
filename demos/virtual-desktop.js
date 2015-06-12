window.onload = function(){
	// animation function.

	function animation( options ){
		var start = new Date();
		var id = setInterval( function(){
			var timePassed = new Date() - start;
			var progress = timePassed / options.duration;

			if ( progress > 1 ) {
				progress = 1;
			}
			var doing = options.delta( progress );
				
			options.step( doing );

			if ( progress == 1 ) {
				clearInterval( id );
			}
		}, options.delay || 16 )
	};

	// easeout cubic function.
	
	function easeoutCubic( t ){
		return ( t -= 1 ) * t * t + 1;
	}
	// easeout bounce.
	function  easeoutBounce( t ){
		return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
	}

	// positive step.

	function positiveStep( delta ){
		$('#login').css('margin-bottom', 30 * delta + 'px');
	}

	function negativeStep( delta ){
		var current = $('#login').css('margin-bottom') + 30 * delta;
		$('#login').css('margin-bottom', current + 'px');
	}

	var positiveOptions = {
		duration: 1000, 
		delta: easeoutCubic, 
		delay: 10, 
		step: positiveStep
	}

	var negativeOptions = {
		duration: 1000, 
		delta: easeoutBounce, 
		delay: 10, 
		step: negativeStep
	}
	function move( delta, step){

		animation({
			duration: 1000, 
			delta: delta, 
			delay: 10, 
			step: step
		})
	}
	function x(){
		animation( positiveOptions );
		var id = setTimeout( function(){
			$("#login-window").show();
		}, 400);
	}

	//函数节流
	
	function throttle( method, context ){
		clearTimeout( method.tId );
		method.tId = setTimeout( function(){
			method.call( context );
		}, 200);
	}

	var container = document.getElementById('menu');
	var imgs = document.getElementsByClassName('docker');
	var imax = 150;		// 这个可以控制img的起伏幅度。
	var left = container.offsetLeft;
	var top = container.offsetTop;

	document.onmousemove = function(e){
		var x, y, c;
		e = e || event;

		for( var i = 0; i < imgs.length; i++ ){
			x = imgs[i].offsetLeft + left - e.clientX + imgs[i].offsetWidth/2;
			y = imgs[i].offsetTop + top - e.clientY + imgs[i].offsetHeight/2;

			c = Math.sqrt( Math.pow(x, 2) + Math.pow(y, 2) );
			c = Math.min(c, imax);
			console.log( c );
			imgs[i].width = ((imax - c) / imax) * 32 + 64;
		}
	}
	var body = $('body');
	body.width( window.innerWidth );
	body.height( window.innerHeight );

	// 取消页面双击选择文字的默认行为。
	document.getElementsByTagName('body')[0].onselectstart= function(){
		return false;
	}

	// 取消页面默认拖拽
	document.getElementsByTagName('footer')[0].ondragstart = function(){
		return false;
	}
	// 开启中间区域的拖拽
	document.getElementsByTagName('header')[0].ondragstart = function(){
		return false;
	}
	// 取消底部footer的拖拽
	document.getElementsByTagName('main')[0].ondragstart = function(){
		return true;
	}

	//为啥我自己写的就不可以，为什么，这是个问题。而且自带防抖动功能。好厉害。
	$.each( $(imgs), function(index, item){
		$(this).on('click', function(){
			$(this)
			.animate( {marginBottom: '50px'}, 500, 'easeOutCubic')
			.animate( {marginBottom: '0px'}, 800, 'easeOutBounce');
		var id = setTimeout( function(){
			// open each pop-up.
		}, 1500);
		})
	} )
	
	/*close,  minimu,  maximum.*/
	
	$('.close').on('click', function(){
		$('.pop').hide();
	})

	$('.minimum').on('click', function(){
		$('.pop').addClass('transform')
		.animate( {left: '410px', top: '200px'}, 1000, 'linear' )
		.animate( {top: '325px'}, 1000, 'easeOutBounce' )
		var timeoutId = setTimeout(function(){
			$('#login').animate( {marginBottom: '-100px'}, 500, 'linear' ).hide();
		}, 1250)
		$('.pop').addClass('cursor-pointer');
	})

	// makes pop window draggable.
	$('.pop').draggable({
		containment: "parent"
	})
	
}
