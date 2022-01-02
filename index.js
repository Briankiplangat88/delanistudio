$(document).ready(function(){
    $("section .header").addClass('text-center text-white');
    // $("#what-we-do").addClass('justify-content-center ml-5');
    $("#design").click(function(){$("#design-hide").toggle(500)});
    $("#design").click(function(){$("#hidden").toggle(100)});

    $("#development").click(function(){$("#development-hide").toggle(500)});
    $("#development").click(function(){$("#hidden2").toggle(100)});

    $("#product").click(function(){$("#product-hide").toggle(500)});
    $("#product").click(function(){$("#hidden3").toggle(100)})

    $("#contact-us").addClass("text-center");
    $("#icons").addClass("text-center mt-3");
    $("#contains").addClass("text-center");
    $(".submit-div").addClass("text-center");

