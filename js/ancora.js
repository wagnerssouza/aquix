$(document).ready(function(){


$(".logoAquix").click(function() {

			$('html, body').animate({

				scrollTop: $(".topHeader").offset().top-3000

			}, 800);

		});



		$("#qs").click(function() {

			$('html, body').animate({

				scrollTop: $(".quemSomos").offset().top-120

			}, 800);

		});

		$("#serv").click(function() {
			$('html, body').animate({
				scrollTop: $(".servicos").offset().top-120
			}, 800);
		});
		
		$("#cs").click(function() {
			$('html, body').animate({
				scrollTop: $(".cases").offset().top-120
			}, 800);
		});
		
		$("#cp").click(function() {
			$('html, body').animate({
				scrollTop: $(".clientesParceiros").offset().top-120 
			}, 800);
		});
		
		$("#ct").click(function() {
			$('html, body').animate({
				scrollTop: $(".boxContato").offset().top-120 
			}, 800);
		});
		
		
	});