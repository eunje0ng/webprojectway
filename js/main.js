$(function(){
    menu();
    titleTab();
    popup();
})
function menu(){
    $(".lnb").css("display","none")
    $(".gnb-list").mouseenter(function(){
        $(".lnb-bg").stop().slideDown("fast");
        $(this).children().stop().slideDown("fast");
    });
    $(".gnb-list").mouseleave(function(){
        $(".lnb-bg").stop().slideUp("fast");
        $(this).children(".lnb").stop().slideUp("fast");
    });
}
function titleTab(){
    $(".search-top-title > li").click(function(){
        $(this).addClass("title-tab-on");
        $(this).siblings().removeClass("title-tab-on");
    })
}
function popup(){
    $(".menu-bar > i").click(function(){
        if(! $(this).hasClass("fa-xmark")) {
            $(this).removeClass("fa-bars-staggered");
            $(this).addClass("fa-xmark");
            $("#modal").fadeIn("fast");
        }else{
            $(this).addClass("fa-bars-staggered");
            $(this).removeClass("fa-xmark");
            $("#modal").fadeOut("fast");
        }
    })
}