$(document).ready(function () {


    $(".card-body").on("click", "button", function () {
        $(this).closest(".card-body").find(".hidden2").slideToggle();
    });



});