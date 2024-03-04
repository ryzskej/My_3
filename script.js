//(function($){
//   $(function(){
//       /* Scroll to sections */
//       $(".jq-test-menu").click(function(){
//          $("html").animate({scrollTop: $(".jq-test").offset().top}, 1000);
//       });    
//   }); 
//})(jQuery);


(function($){
    $(function(){
        // tady budeme psát jQuery
        $(".jq-test-menu").click(function(){
            $("html").animate({scrollTop: $(".jq-test").offset().top}, 500);
        });

        $(".jq--buttonScrollToOnas").click(function(){
            $("html").animate({scrollTop: $(".about-us").offset().top}, 500);
        });

        $(".jq--buttonScrollToContact").click(function(){
            $("html").animate({scrollTop: $(".contact").offset().top}, 500);
        });

        $(".jq--nav-icon").click(function(){
            $(".nav-background").fadeToggle();
            $(".mobile-nav-back").slideToggle(500);
            $("nav ul li").slideToggle(500);
        });

        $(".jq--icon-hamburger").click(function(){

            if($(".jq--icon-hamburger").attr("src") == "img/hamburgerMenu.png"){
                $(".jq--icon-hamburger").attr("src", "img/crossMenu.png");
            } else {
                $(".jq--icon-hamburger").attr("src", "img/hamburgerMenu.png");
              }
            });

    });
})(jQuery);