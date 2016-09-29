$(function(){
	$('.showMoto').click(function (){
		$('.moto2').fadeIn(3000);
		$('.moto').fadeOut(3000);
	});
	$('.showCar').click(function (){
		$('.car2').fadeIn(3000);
		$('.car').fadeOut(3000);
		$('.img-container-text').delay( 3000 ).each(function() {$(this).slideDown(1000)});
	});

}());