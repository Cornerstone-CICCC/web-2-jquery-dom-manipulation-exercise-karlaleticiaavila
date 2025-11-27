// COMPLETE THE CODE
$(function() {
    // Exercise 1
    $("#exercise1Button").on('click', function() {
        $("#exercise1 ul").find('li').css("color", "blue");
    });

    // Exercise 2
    $("#exercise2Button").on('click', function() {
        $("#exercise2 p").parent('div').css("background-color", "yellow");
    });

    // Exercise 3
    $("#exercise3Button").on('click', function() {
        $("#exercise3 p").parents('div').css("background-color", "lightgreen");
    });

    // Exercise 4
    $("#exercise4Button").on('click', function() {
        $(this).closest("#exercise4").find('p').eq(1).hide();
    });

    // Exercise 5
    $("#exercise5Button").on('click', function() {
        $(this).siblings('div').find('p').css("border", "2px solid red");
    });

    // Exercise 6
    $("#exercise6Button").on('click', function() {
        $(this).closest("#exercise6").find('span:contains("Item 5")').css("color", "purple");
    });
});
