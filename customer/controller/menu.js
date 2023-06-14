$('.js-open').on('click', function () {
    var target = $(this).attr('data-target');
    $(target).toggleClass('is-visible');
});

$('.js-close').on('click', function () {
    $(this).parent().removeClass('is-visible');
});