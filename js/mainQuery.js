$(document).ready(function () {

	$(".divImage>a").hover(function () {
		$(this).parent().addClass('card-highlighted');
	}, function () {
		$(this).parent().removeClass('card-highlighted');
	});

	$(window).click(function () {
		$(".card-selected").removeClass("card-selected");
		$(".filter-selected").removeClass('filter-selected');
		$(".card-selected-2").removeClass("card-selected-2");
		$(".filter-selected-2").removeClass('filter-selected-2');
	});

	$("#filters-1").on("click", ".onsale-filter", function (event) {
		event.stopPropagation();
		$(".card-selected").removeClass("card-selected");
		$("div").filter(".onsale").addClass('card-selected');
		$("#filters-1 .filter-selected").removeClass('filter-selected');
		$(this).addClass('filter-selected');
	});

	$("#filters-1").on("click", ".expiring-filter", function (event) {
		event.stopPropagation();
		$(".card-selected").removeClass("card-selected");
		$("div").filter(".expiring").addClass("card-selected");
		$("#filters-1 .filter-selected").removeClass('filter-selected');
		$(this).addClass('filter-selected');
	});


	$("#filters-2").on("click", ".topRated", function (event) {
		event.stopPropagation();
		$(".divImage").removeClass("card-selected-2");
		$(".top").addClass("card-selected-2");
		$("#filters-2 .filter-selected-2").removeClass('filter-selected-2');
		$(this).addClass('filter-selected-2');
	});

	$("#filters-2").on("click", ".bestChoice", function (event) {
		event.stopPropagation();
		$(".divImage").removeClass("card-selected-2");
		$(".divImage").filter(".best").addClass("card-selected-2");
		$("#filters-2 .filter-selected-2").removeClass('filter-selected-2');
		$(this).addClass('filter-selected-2');
	});

	$(".divImage").on("click", ".dButton", function (event) {
		event.stopPropagation();
		$(this).closest(".divImage").find(".ticket").slideToggle();
	});


	$(".divImage").on("keyup", ".quantity", function () {
		var price = +$(this).closest(".divImage").data("price");
		var quantity = +$(this).val();
		$(this).closest(".divImage").find(".total").text(price * quantity);
	});

	var myFunction = function () {
		alert("Hello World");
	}

	

});

