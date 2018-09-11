//--------Smoothscroll Function---------//
//$("nav ul li a[href^='#']").on('click', function(e) {
$(".nav-item a, .arrow, .footer a, .navbar-brand").on('click', function(e) {
//    ga('send', 'event', 'navigation'); 
   e.preventDefault();
    e.stopPropagation();

   var hash = this.hash;
    $hash = $(hash);
    
    
   if(hash.length){
       var scrollLocation = $hash.offset().top - $("nav").outerHeight();
       console.log(scrollLocation)
   }
   else{
       var scrollLocation = 0;
   }                            
    
   $('html, body').animate({
       scrollTop: scrollLocation
     }, 500, function(){
     });
    
    if($(".collapse.navbar-collapse").hasClass('show')){
       $(".collapse.navbar-collapse").collapse('hide');
    }  

});


$('body').scrollspy({
   offset: $("nav").outerHeight()+1
});


$(function(){
    if($(window).width()<768){
        var landingOffset = $(window).height()-$("nav").outerHeight()
        $('.landing').css('height', landingOffset)
    }
    else{
        $('.landing').css('height', '100vh')
    }
})

$(function(){
    $(window).on("activate.bs.scrollspy", function(){
        var activePage = $(".nav-link.active").text();

//        ga('send', 'pageview', activePage);
    })
})

//---------Navbar color change-------//
function checkScroll(){
    var startY = $('.navbar').height() ; 


    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
//        $(".navbar .navbar-brand img").attr("src","/assets/images/courtney-ring-logo-white.png");
    }else{
        $('.navbar').removeClass("scrolled");
//        $(".navbar .navbar-brand img").attr("src","/assets/images/CourtneyRingLogo.png");
    }
}

$(function(){
    if($(window).width() > 992 ){
        $(window).on("scroll load resize", function(){
            checkScroll();
        });
    }

})



//-----------Portfolio Modal Data--------//
//$(function(){
//    
//    var data = {}
//
//    
//    $.getJSON("/assets/json/portfolio.json", function(json) {
//        
//        data = json;
//        
//    }).then(function(){
//         $(".portfolio .portfolio-images .project-inner").each(function(){
//            
//            var thumbnailLoc = this.id;
//            var thumbnail = data[thumbnailLoc].thumbnail;
//            
//            $(this).css("background", "url("+thumbnail+") center/cover no-repeat");    
//        
//        })
//    })
//})

$(function(){
    $('.collapse').collapse('hide')
})


$('.project').on('click', function(){
    id = $(this).children('.project-inner').attr('id')

    $('.collapse.show').collapse('hide')

    $('#'+id+'-expand').collapse('show')

})

$(".modalPortfolio .modal-body .website").on('click',function(){
    ga('send', 'event', 'projects', 'link', $(".modalPortfolio .modal-body .website").text());  
})

//--------Refresh on Orientation Change -------//
window.addEventListener("orientationchange", function() {
    location.reload()
});


//---------IE Handling---------//
$(function msieversion() {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  
    {
        $(".skill-section-mobile").css('display','block');
        $(".skills-content").removeClass("desktop");
        $(".skill-section").css('display','none');
        $(".skills-content").removeClass("col-lg-5")
        $(".skills-content").addClass("offset-md-3")
        $(".skills-content").addClass("col-lg-6")
        $('#ieModal').modal('show');
        
    }

    return false;
})


/*-------Analytics --------*/
                                
$(".about .about-blurb #resume").on('click', function() {
    ga('send', 'event', 'about', 'download', 'resume');  
})

$(".about .about-blurb a:not(#resume)").on('click', function() {

    ga('send', 'event', 'about', 'link', $(this).attr('href'));  
})
                                    
$(".contact .info a").on('click', function() {

    ga('send', 'event', 'contact', $(this).attr('id'));  
})



/*----------ReCaptcha----------*/
function recaptchaCallback() {
    $('.submit').removeClass('disabled');
    $('.submit').removeAttr('disabled');
};