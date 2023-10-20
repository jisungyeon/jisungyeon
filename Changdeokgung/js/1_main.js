const slider = $("#slider");

slider.slick({
    arrows: true,
    prevArrow: $(".mainSlide").find(".prevArrow"),
    nextArrow: $(".mainSlide").find(".nextArrow"),

    dots: true,
    appendDots: $(".mainSlide").find(".dotsWrap"),
    dotsClass: "customDots",

    autoplay: true,
    autoplaySpeed: 2500,
    speed: 400
});

function showFloatingMenu() {
    $header = $("header");
    $sub = $(".headerGnb").find(".sub");

    let scrollTop = 0;

    $(window).on("scroll", function() {
        scrollTop = $(this).scrollTop();
        $(".pos").text( scrollTop );

        if ( scrollTop > 50 ) {
            $header.addClass("on");
            $sub.addClass("on");
            $header.find(".headerBack").css({
                width: "100%",
              });
        } else {
            $header.removeClass("on");
            $sub.removeClass("on");
        }
    });
}
showFloatingMenu();



const $saleBanner = $("section.saleBanner");

$saleBanner.find(".slider").slick({
    dots: true,
    appendDots: $saleBanner.find(".dotsWrap"),
    dotsClass: "customDots",

    arrows: true,
    prevArrow: $saleBanner.find(".prevArrow"),
    nextArrow: $saleBanner.find(".nextArrow"),

    autoplay: true,
    autoplaySpeed: 2500,
    speed: 400
});





slider.on("beforeChange", function(event, slick, current, next) {

    if (current !== next) {
        $(".slick-current + .slick-cloned").each(function(index, item) {
            const $item = $(item);

            setTimeout(function() {
                $item.addClass("slick-current");
                $item.addClass("slick-active");
            });
        });
    }
});