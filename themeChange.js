function toggleDark() {
    $('body').addClass('bg-dark');
    $('nav').removeClass('bg-body');
    $('nav').addClass('bg-secondary');
    $('.tab-container').addClass('bg-tertiary');
    $('#contact-container').addClass('bg-tertiary');
    $('#contact-methods').addClass('bg-secondary rounded');
    $('p').addClass('text-white');
    $('a').addClass('link-light');
    $('.dropdown-menu').addClass('dropdown-menu-dark');
}

function toggleLight() {
    $('body').removeClass('bg-dark');
    $('nav').addClass('bg-body');
    $('nav').removeClass('bg-secondary');
    $('.tab-container').removeClass('bg-tertiary');
    $('#contact-container').removeClass('bg-tertiary');
    $('#contact-methods').removeClass('bg-secondary rounded');
    $('p').removeClass('text-white');
    $('a').removeClass('link-light');
    $('.dropdown-menu').removeClass('dropdown-menu-dark');
}