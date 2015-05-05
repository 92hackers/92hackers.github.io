// js file for demo2
// beta demo2,    finished on 5-5-2015
// Author:  92Hackers
define(['./jquery'], function( jquery ){
	$(document).ready(function(){
		var doc = $(document);		// grammer: on({event: handler, event: handler}, 'selector');
		//var currentValue = parseInt($('#good-product span').css('margin-right'));
		// 精选市场 动作开始
		// animate function.
		
		// 在做动作之前，考虑对该事件的各种影响。
		doc.on({
			mouseenter: function(){
				$('.special').show();
				$('#good-product-outer').show();
				$('#main-navigator li').removeClass('main-navigator-li-out');
				$(this).addClass('main-navigator-li-selected');
				$(triangle).hide();
				if(parseInt($('#good-product span').css('margin-right')) >= 52){
				} else {
					$('#good-product span').animate({
						'margin-right': '+=5px'
					}, 'fast');
				}
			},  
			mouseleave: function(event){			// most out left is 325.5 px
				if(  event.clientX > 514 ){}else {
					var timeId = setTimeout(function(){
						$('#good-product span').animate({
							'margin-right': '-=5px'
						}, 'fast');
					}, 200);
				}
				if (parseInt($('#good-product span').css('margin-right')) < 47 ){
					$('#good-product span').css('margin-right', 47 + 'px');
				}
				$(this).removeClass('main-navigator-li-selected');
				$(this).addClass('main-navigator-li-out');
			}
		}, '#good-product'
			);
		// 精选市场   动作结束。
		// 精选市场 出现的wrapper 的动作。
		var outers = $('#good-product-outer').find('li');
		$.each(outers, function(index, item){
			$(this).on({
				mouseenter: function(){
					$(this).addClass('main-navigator-li-out');
					$('#good-product').removeClass('main-navigator-li-out');
					$('#good-product').addClass('main-navigator-li-selected');
					$('.special').show();
				}, 
				mouseleave: function(){
					$(this).removeClass('main-navigator-li-out');
					$('#good-product').removeClass('main-navigator-li-selected').addClass('main-navigator-li-out');
				}
			})
		})
		//精选市场 animation.

		var out = $('#good-product-outer');
		out.on({
			mouseenter: function(){
				if ( parseInt($('#good-product span').css('margin-right')) >= 52 ){
				} else {
					$('#good-product span').animate({
						'margin-right': '+=5px'
					}, 'fast');
				}
			}, 
			mouseleave: function( event ){
				if ( event.clientX < 516 ){}else {
					var timeId = setTimeout(function(){
						$('#good-product span').animate({
							'margin-right': '-=5px'
						}, 'fast');
					}, 200);
				}
				if (parseInt($('#good-product span').css('margin-right')) < 47 ){
					$('#good-product span').css('margin-right', 47 + 'px');
				}
			}
		})

		//sub-nav hover.  animation.

		var subNav = $('.sub-nav');
		var navigator = $('#main-navigator li').not('#good-product');
		var triangle = $('.triangle');
		$.each(navigator, function(index, item){
			$(this).on({
				mouseenter: function(){
					$('.special').hide();
					$('#good-product').removeClass('main-navigator-li-selected');
					$('#good-product-outer').hide();
					$('#main-navigator li').removeClass('main-navigator-li-out');
					//$(subNav[index]).show();
					$(this).addClass('main-navigator-li-selected');
					$(triangle).hide();
					$(triangle[index]).show().addClass('transform');
					$(navigator[index]).find('span').animate({
						'margin-right': '+=5px'
					}, 'fast');
					$(subNav[index]).animate({
						left: '+=10px'
					}, 'fast').show();
				}, 
				mouseleave: function(event){
					$(triangle[index]).removeClass('transform');
					//$(subNav[index]).hide();
					$(this).removeClass('main-navigator-li-selected');
					$(this).addClass('main-navigator-li-out');
					if( event.clientX > 514 ){}else {
					$(navigator[index]).find('span').animate({
						'margin-right': '-=5px'
					}, 'fast');
					$(subNav[index]).animate({
						left: '-=10px'
					}, 'fast').hide();
					}
				}
			})
		})
		// moveover on sub-nav.
		$.each(subNav, function(index, item){
			$(this).on({		// mouseenter 当中的内容可以转移到navigator中的mouseleave中去。
				mouseenter: function(){
					$(navigator[index]).removeClass('main-navigator-li-out').addClass('main-navigator-li-selected');
					$(this).show();
					$(triangle[index]).addClass('transform');
				}, 
				mouseleave: function(){
					$(triangle[index]).removeClass('transform');
					//$(this).hide();
					$(navigator[index]).removeClass('main-navigator-li-selected').addClass('main-navigator-li-out');
					$(navigator[index]).find('span').animate({
						'margin-right': '-=5px'
					}, 'fast');
					$(this).animate({
						left: '-=10px'
					}, 'fast');
					var that = this;
					setTimeout(function(){
						$(that).hide();
					}, 200);
				}
			})
		})
	})
})
