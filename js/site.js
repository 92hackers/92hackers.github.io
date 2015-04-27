//site.js

define(['./jquery'], function( jquery ){
	$(document).ready(function(){
		//证明一下存在感。
		setTimeout(function(){
			$('#inner-box').fadeOut();
		}, 3);

		//浮动框的鼠标进出闪现的效果。
		$('#float-box').hover(function(){
			$('#inner-box').fadeIn();
		}, function(){
			$('#inner-box').fadeOut();
		})

		// 右边提示框的闪现。
		$('.menu:first').hover(function(){
			$('.tooltips:first').show();
		}, function(){
			$('.tooltips:first').hide();
		})
		$('.menu:last').hover(function(){
			$('.tooltips:last').show();
		}, function(){
			$('.tooltips:last').hide();
		})
	})
}
)
