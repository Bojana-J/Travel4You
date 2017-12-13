$(document).ready(function () {


    $(".divMoreAbout").on("click", "button", function () {
        // event.stopPropagation();
        $(this).closest(".divMoreAbout").find(".hidden").slideToggle();
    });



});