function followCursor() {

    const mousePos = {
        x: 0,
        y: 0
    };

    $(window).on("mousemove", function (event) {
        mousePos.x = event.clientX;
        mousePos.y = event.clientY;

        $(".followCursor").css({
            left: mousePos.x,
            top: mousePos.y
        });

    });

}
followCursor();




let winH = $(window).innerHeight();
let scrollTop = $(window).scrollTop();

scrollAni();

$(window).on("resize", function() {
    winH = $(window).innerHeight();
    scrollAni();
});

$(window).on("scroll", function() {
    scrollTop = $(this).scrollTop();
    scrollAni();
    // if (scrollTop + winH/1.5 > $(".ani").eq(0).offset().top) {
    //     $(".ani").eq(0).addClass("on");
    // }
    // if (scrollTop + winH/2 > $(".ani").eq(1).offset().top) {
    //     $(".ani").eq(1).addClass("on");
    // }
    // if (scrollTop + winH/2 > $(".ani").eq(2).offset().top) {
    //     $(".ani").eq(2).addClass("on");
    // }


});

function scrollAni() {

    const $ani = $(".ani");
    for (let i = 0; i < $ani.length; i++) {
        if (scrollTop + winH/1.3 > $ani.eq(i).offset().top) {
            $ani.eq(i).addClass("on");
        } else {
            $ani.eq(i).removeClass("on");
        }
    }


}

















// function scrollEvent() {
//     const $img = $(".portfolioWrap .inner .portfolio1 .cdg .img img");
//     const scroll = 3000;
  
//     $(window).on("scroll", function () {
//       const scrollPosition = $(window).scrollTop();
  
//       if (scrollPosition >= scroll) {
//         $img.addClass("active");
//       } else {
//         $img.removeClass("active");
//       }
//     });
//   }
  
// scrollEvent();

