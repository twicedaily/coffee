//$(window).scroll(function () {
//    var $scrollTop = $(this).scrollTop();
//    console.log($scrollTop);
//});
$(window).scroll(function () {
    var $scrollTop = $(this).scrollTop();
    if($scrollTop > 500) {
        $(".up-btn").css({opacity: 1}, 100);
    } else {
        $(".up-btn").css({opacity: 0}, 100);
    }
});

$(document).ready(function(){
  $(".boxb1").slick({
      infinite: true ,
      dots: true,
      arrows: true ,
      fade: true,
      prevArrow: "<i class='prev-btn fas fa-chevron-circle-left'></i>",
      nextArrow: "<i class='next-btn fas fa-chevron-circle-right'></i>",
      responsive:[
          {
              breakpoint:991,
              settings:{
                  dots:false,
                  arrows:false,
              }
          }
      ]
  });
    
    $(".boxd>.boxd1>.box1>.slick-test").slick({
        arrows: true ,
        prevArrow: "<i class='prev-btn2 fas fa-caret-square-left'></i>",
        nextArrow: "<i class='next-btn2 fas fa-caret-square-right'></i>",
        draggable: false,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive:[
            {
                breakpoint:991,
                settings: {
                    slidesToShow:1
                }
            }
        ]
    });
    $(".boxd>.boxd1>.box2>.slick-test").slick({
        arrows: true ,
        prevArrow: "<i class='prev-btn2 fas fa-caret-square-left'></i>",
        nextArrow: "<i class='next-btn2 fas fa-caret-square-right'></i>",
        draggable: false,
    });
    $(".boxd>.boxd1>.box3>.slick-test").slick({
        arrows: true ,
        prevArrow: "<i class='prev-btn2 fas fa-caret-square-left'></i>",
        nextArrow: "<i class='next-btn2 fas fa-caret-square-right'></i>",
        draggable: false,
    });
   $(".boxh>.boxh1>.box3>.mon").click(function(){
       $(".mon").toggleClass("active");
   });
    $(".up-btn").click(function(){
       $("html , body").animate({scrollTop:0}); 
    });
    $(".boxa>.boxa1>.side-menu>.side-menu-box>ul>li>i").click(function(){
        $(this).toggleClass("active");
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    $(".boxa>.boxa1>.ham-btn").click(function(){
       $(".boxa>.boxa1>.side-menu").addClass("active");
        $(".big-wrap").addClass("active");
        $(".bg").addClass("active");
    });

    $(".boxa>.boxa1>.side-menu>.close-btn").click(function(){
        $(".boxa>.boxa1>.side-menu").removeClass("active");
        $(".big-wrap").removeClass("active");
        $(".bg").removeClass("active");
    });
    
    $(".bg").click(function(){
        $(".boxa>.boxa1>.side-menu").removeClass("active");
        $(".big-wrap").removeClass("active");
        $(".bg").removeClass("active");
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    $(".boxe991c>.boxe991c-1>.slick-last").slick({
        
       infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        draggable: false,
        prevArrow: "<i class='prev-btn9 fas fa-caret-square-left'></i>",
        nextArrow: "<i class='next-btn9 fas fa-caret-square-right'></i>",
        responsive:[
          {
              breakpoint:527,
              settings:{
                  slidesToShow: 2,
              }
          }
      ]
        
        
    });
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});






















