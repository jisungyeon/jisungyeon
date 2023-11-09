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
        if (scrollTop + winH/1.05 > $ani.eq(i).offset().top) {
            $ani.eq(i).addClass("on");
        } else {
            $ani.eq(i).removeClass("on");
        }
    }


};



const $portfolio3 = $(".portfolioWrap .portfolio3");

const $modal = $(".layerPop .modal");

$portfolio3.find(".design1 .left").on("click", function() {
    $("body").addClass("popupOn");
    $modal.show();
});
$modal.find(".close").on("click", function() {
    $("body").removeClass("popupOn");
    $modal.hide();
});


const $modal2 = $(".layerPop .modal2");

$portfolio3.find(".design1 .right").on("click", function() {
    $("body").addClass("popupOn");
    $modal2.show();
});
$modal2.find(".close").on("click", function() {
    $("body").removeClass("popupOn");
    $modal2.hide();
});



const $modal3 = $(".layerPop .modal3");

$portfolio3.find(".design2 .left").on("click", function() {
    $("body").addClass("popupOn");
    $modal3.show();
});
$modal3.find(".close").on("click", function() {
    $("body").removeClass("popupOn");
    $modal3.hide();
});


const $modal4 = $(".layerPop .modal4");

$portfolio3.find(".design2 .mid").on("click", function() {
    $("body").addClass("popupOn");
    $modal4.show();
});
$modal4.find(".close").on("click", function() {
    $("body").removeClass("popupOn");
    $modal4.hide();
});



const $modal5 = $(".layerPop .modal5");

$portfolio3.find(".design2 .right").on("click", function() {
    $("body").addClass("popupOn");
    $modal5.show();
});
$modal5.find(".close").on("click", function() {
    $("body").removeClass("popupOn");
    $modal5.hide();
});

const $modal5_1 = $(".layerPop .modal5_1");

$portfolio3.find(".design2_1 .left").on("click", function() {
    $("body").addClass("popupOn");
    $modal5_1.show();
});
$modal5_1.find(".close").on("click", function() {
    $("body").removeClass("popupOn");
    $modal5_1.hide();
});

const $modal5_2 = $(".layerPop .modal5_2");

$portfolio3.find(".design2_1 .right").on("click", function() {
    $("body").addClass("popupOn");
    $modal5_2.show();
});
$modal5_2.find(".close").on("click", function() {
    $("body").removeClass("popupOn");
    $modal5_2.hide();
});



const $modal6 = $(".layerPop .modal6");

$portfolio3.find(".design3 .left").on("click", function() {
    $("body").addClass("popupOn");
    $modal6.show();
});
$modal6.find(".close").on("click", function() {
    $("body").removeClass("popupOn");
    $modal6.hide();
});


const $modal7 = $(".layerPop .modal7");

$portfolio3.find(".design3 .mid").on("click", function() {
    $("body").addClass("popupOn");
    $modal7.show();
});
$modal7.find(".close").on("click", function() {
    $("body").removeClass("popupOn");
    $modal7.hide();
});



const $modal8 = $(".layerPop .modal8");

$portfolio3.find(".design3 .right").on("click", function() {
    $("body").addClass("popupOn");
    $modal8.show();
});
$modal8.find(".close").on("click", function() {
    $("body").removeClass("popupOn");
    $modal8.hide();
});


const $modal9 = $(".layerPop .modal9");

$portfolio3.find(".design4 .left").on("click", function() {
    $("body").addClass("popupOn");
    $modal9.show();
});
$modal9.find(".close").on("click", function() {
    $("body").removeClass("popupOn");
    $modal9.hide();
});


const $modal10 = $(".layerPop .modal10");

$portfolio3.find(".design4 .right").on("click", function() {
    $("body").addClass("popupOn");
    $modal10.show();
});
$modal10.find(".close").on("click", function() {
    $("body").removeClass("popupOn");
    $modal10.hide();
});


// const $modal11 = $(".layerPop .modal11");

// $portfolio3.find(".design5 .left").on("click", function() {
//     $("body").addClass("popupOn");
//     $modal11.show();
// });
// $modal11.find(".close").on("click", function() {
//     $("body").removeClass("popupOn");
//     $modal11.hide();
// });


const $modal12 = $(".layerPop .modal12");

$portfolio3.find(".design5 .mid").on("click", function() {
    $("body").addClass("popupOn");
    $modal12.show();
});
$modal12.find(".close").on("click", function() {
    $("body").removeClass("popupOn");
    $modal12.hide();
});


const $modal13 = $(".layerPop .modal13");

$portfolio3.find(".design5 .right").on("click", function() {
    $("body").addClass("popupOn");
    $modal13.show();
});
$modal13.find(".close").on("click", function() {
    $("body").removeClass("popupOn");
    $modal13.hide();
});


const $modal14 = $(".layerPop .modal14");

$portfolio3.find(".design7 .left").on("click", function() {
    $("body").addClass("popupOn");
    $modal14.show();
});
$modal14.find(".close").on("click", function() {
    $("body").removeClass("popupOn");
    $modal14.hide();
});


const $modal15 = $(".layerPop .modal15");

$portfolio3.find(".design7 .right").on("click", function() {
    $("body").addClass("popupOn");
    $modal15.show();
});
$modal15.find(".close").on("click", function() {
    $("body").removeClass("popupOn");
    $modal15.hide();
});


const $modal16 = $(".layerPop .modal16");

$portfolio3.find(".design8 .left").on("click", function() {
    $("body").addClass("popupOn");
    $modal16.show();
});
$modal16.find(".close").on("click", function() {
    $("body").removeClass("popupOn");
    $modal16.hide();
});


const $modal17 = $(".layerPop .modal17");

$portfolio3.find(".design8 .right").on("click", function() {
    $("body").addClass("popupOn");
    $modal17.show();
});
$modal17.find(".close").on("click", function() {
    $("body").removeClass("popupOn");
    $modal17.hide();
});


const $modal18 = $(".layerPop .modal18");

$portfolio3.find(".design9 .ani").on("click", function() {
    $("body").addClass("popupOn");
    $modal18.show();
});
$modal18.find(".close").on("click", function() {
    $("body").removeClass("popupOn");
    $modal18.hide();
});


const $modal19 = $(".layerPop .modal19");

$portfolio3.find(".design10 .ani").on("click", function() {
    $("body").addClass("popupOn");
    $modal19.show();
});
$modal19.find(".close").on("click", function() {
    $("body").removeClass("popupOn");
    $modal19.hide();
});


const $modal20 = $(".layerPop .modal20");

$portfolio3.find(".design11 .ani").on("click", function() {
    $("body").addClass("popupOn");
    $modal20.show();
});
$modal20.find(".close").on("click", function() {
    $("body").removeClass("popupOn");
    $modal20.hide();
});


const $modal21 = $(".layerPop .modal21");

$portfolio3.find(".design12 .ani").on("click", function() {
    $("body").addClass("popupOn");
    $modal21.show();
});
$modal21.find(".close").on("click", function() {
    $("body").removeClass("popupOn");
    $modal21.hide();
});


const $modal22 = $(".layerPop .modal22");

$portfolio3.find(".design12 .two").on("click", function() {
    $("body").addClass("popupOn");
    $modal22.show();
});
$modal22.find(".close").on("click", function() {
    $("body").removeClass("popupOn");
    $modal22.hide();
});


const $modal23 = $(".layerPop .modal23");

$portfolio3.find(".design12 .three").on("click", function() {
    $("body").addClass("popupOn");
    $modal23.show();
});
$modal23.find(".close").on("click", function() {
    $("body").removeClass("popupOn");
    $modal23.hide();
});


const $modal24 = $(".layerPop .modal24");

$portfolio3.find(".design12 .four").on("click", function() {
    $("body").addClass("popupOn");
    $modal24.show();
});
$modal24.find(".close").on("click", function() {
    $("body").removeClass("popupOn");
    $modal24.hide();
});




































// const $modal3 = $(".layerPop .modal3");

// $portfolio3.find(".design2 .right").on("click", function() {
//     $("body").addClass("popupOn");
//     $modal3.show();
// });
// $modal3.find(".close").on("click", function() {
//     $("body").removeClass("popupOn");
//     $modal3.hide();
// });













// const $bannerWrap = $(".portfolioWrap .portfolio3");
// const $banner = $(".layerPop");

// $bannerWrap.find(`.design1`).on("click", function() {
//     $("body").addClass("popupOn");
//     $banner.show();
// });

// // for (let i = 1; i <= 5; i++) {
// //     $bannerWrap.find(`.design${i}`).on("click", function() {
// //         $("body").addClass("popupOn");
// //         $banner.show();
// //     });
// // }

// $banner.find(".close").on("click", function() {
//     $("body").removeClass("popupOn");
//     $banner.hide();
// });














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

