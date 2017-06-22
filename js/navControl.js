$(function () {
    $('#nav-wrapper').height($(".mainMenu").height());

    $('.mainMenu').affix({
        offset: { top: $('.mainMenu').offset().top }
    });
});

