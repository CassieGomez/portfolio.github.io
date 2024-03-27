var $portfolio = $('.portfolio');
if ($.fn.imagesLoaded && $portfolio.length > 0) {
    imagesLoaded($portfolio, function () {
        $portfolio.isotope({
            itemSelector: '.portfolio-item',
            filter: '*'
        });
        $(window).trigger("resize");
    });
}

$('.portfolio-filter').on('click', 'a', function (e) {
    e.preventDefault();
    $(this).parent().addClass('active').siblings().removeClass('active');
    var filterValue = $(this).attr('data-filter');
    $portfolio.isotope({filter: filterValue});
});
