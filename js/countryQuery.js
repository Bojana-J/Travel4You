$(document).ready(function () {


    $(".card-footer").on("click", "button", function () {
        $(this).closest(".card").find(".hidden2").slideToggle();
    });



});